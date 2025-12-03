import { signal, inject } from '@angular/core';
import { Driver, Drivers } from '../models/driver';
import { OpenF1Service } from '../services/openf1.service';
import { OpenF1StateService } from '../services/openf1-state.service';

export function createDriversStore() {
  const state = inject(OpenF1StateService);
  const openF1Service = inject(OpenF1Service);

  const selectedDriver = signal<number | null>(null);
  const drivers = signal<Drivers>([]);
  const loading = signal(false);
  const error = signal<string | null>(null);

  async function loadAll() {
    loading.set(true);
    error.set(null);
    try {
      const result = await openF1Service.getDrivers();
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
      const found = await openF1Service.driverByNumber(driverNumber);
      if (found) {
        selectedDriver.set(found.driver_number);
        state.recordVisitedDriver(found);
        return found;
      }
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
