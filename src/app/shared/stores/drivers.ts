import { signal } from '@angular/core';
import { OpenF1Service } from '../services/openf1.service';
import { Drivers } from '../models/driver';
import { inject } from '@angular/core';

export function createDriversStore() {
  const service = inject(OpenF1Service);

  const drivers = signal<Drivers>([]);
  const selectedDriver = signal<number | null>(null);
  const loading = signal(false);
  const error = signal<string | null>(null);

  async function loadAll() {
    loading.set(true);
    error.set(null);
    try {
      const res = await service.getDrivers();
      drivers.set(res || []);
    } catch (err: any) {
      error.set(err?.message || String(err));
    } finally {
      loading.set(false);
    }
  }

  async function loadByNumber(driverNumber: number) {
    loading.set(true);
    error.set(null);
    try {
      const res = await service.getDriversByNumber(driverNumber);
      drivers.set(res || []);
      if (res && res.length) selectedDriver.set(res[0].driver_number);
      else selectedDriver.set(null);
    } catch (err: any) {
      error.set(err?.message || String(err));
    } finally {
      loading.set(false);
    }
  }

  return {
    drivers,
    selectedDriver,
    loading,
    error,
    loadAll,
    loadByNumber,
  };
}
