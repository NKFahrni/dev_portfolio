import { Injectable, signal } from '@angular/core';
import type { Driver } from '../models/driver';

@Injectable({ providedIn: 'root' })
export class OpenF1StateService {
  public recentDrivers = signal<Driver[]>([]);

  public recordVisitedDriver(driver: Driver) {
    try {
      const current = this.recentDrivers();
      const filtered = current.filter(d => d.driver_number !== driver.driver_number);
      const next = [driver, ...filtered].slice(0, 4);
      this.recentDrivers.set(next);
      console.log('[OpenF1StateService] recorded visited driver', driver.driver_number, 'recent:', next.map(d=>d.driver_number));
    } catch (e) {
      console.error('[OpenF1StateService] error recording visited driver', e);
    }
  }
}
