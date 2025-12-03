import { signal } from '@angular/core';
import { OpenF1Service } from '../services/openf1.service';
import { Driver, Drivers } from '../models/driver';
import { inject } from '@angular/core';

export function createDriversStore() {
  const service = inject(OpenF1Service);

  const drivers = signal<Drivers>([]);
  const selectedDriver = signal<number | null>(null);
  const loading = signal(false);
  const error = signal<string | null>(null);
  const recentDrivers = signal<Drivers>([]);

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
      const result = await service.driverByNumber(driverNumber);
      if (result) {
        drivers.set([result]);
        selectedDriver.set(result.driver_number);
        recordVisitedDriver(result);
        return result;
      }
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
    const existing = recentDrivers().filter(d => d.driver_number !== driver.driver_number);
    const updated = [driver, ...existing].slice(0, 4);
    recentDrivers.set(updated);
  }

  return {
    drivers,
    selectedDriver,
    loading,
    error,
    recentDrivers,
    loadAll,
    loadByNumber,
    recordVisitedDriver,
  };
}
