import { signal, inject } from '@angular/core';
import { Driver, Drivers } from '../models/driver';
import { OpenF1Service } from '../services/openf1.service';
import { OpenF1StateService } from '../services/openf1-state.service';

export function createDriversStore() {
  const state = inject(OpenF1StateService);
  const service = inject(OpenF1Service);

  const drivers = signal<Drivers>([]);
  const selectedDriver = signal<number | null>(null);
  const loading = signal(false);
  const error = signal<string | null>(null);

  async function loadAll() {
    loading.set(true);
    error.set(null);
    try {
      const result = await service.getDrivers();
      drivers.set(result || []);
    } catch (caughtError: any) {
      error.set(caughtError?.message || String(caughtError));
    } finally {
      loading.set(false);
    }
  }

  async function loadByNumber(driverNumber: number) {
    loading.set(true);
    error.set(null);
    try {
      const list = drivers() || [];
      const found = list.find(d => d.driver_number === driverNumber) || null;
      if (found) {
        drivers.set([found]);
        selectedDriver.set(found.driver_number);
        state.recordVisitedDriver(found);
        return found;
      }
      // not found in cached drivers
      drivers.set([]);
      selectedDriver.set(null);
      return null;
    } catch (caughtError: any) {
      error.set(caughtError?.message || String(caughtError));
      return null;
    } finally {
      loading.set(false);
    }
  }

  function recordVisitedDriver(driver: Driver) {
    // keep API compatible but delegate to the singleton state service
    state.recordVisitedDriver(driver);
  }

  return {
    drivers,
    selectedDriver,
    loading,
    error,
    recentDrivers: state.recentDrivers,
    loadAll,
    loadByNumber,
    recordVisitedDriver,
    debugRecentDrivers: () => state.recentDrivers,
  };
}
