import { Injectable } from '@angular/core';
import { OpenF1Driver } from '../models/openf1-driver';

@Injectable({ providedIn: 'root' })
export class OpenF1Service {
  private base = 'https://api.openf1.org/v1';

  async getDrivers(): Promise<OpenF1Driver[]> {
    const url = `${this.base}/drivers`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch drivers: ${res.status} ${res.statusText}`);
    }
    const json: unknown = await res.json();
    // API returns an object or array — try to coerce to array
    if (Array.isArray(json)) {
      return json as OpenF1Driver[];
    }
    // some APIs return { drivers: [...] }
    if (json && typeof json === 'object' && Array.isArray((json as any).drivers)) {
      return (json as any).drivers as OpenF1Driver[];
    }
    // Fallback: attempt to extract values
    if (json && typeof json === 'object') {
      return Object.values(json as Record<string, any>) as OpenF1Driver[];
    }
    throw new Error('Unexpected response format from OpenF1 API');
  }

  async getDriverById(id: string): Promise<OpenF1Driver | null> {
    const drivers = await this.getDrivers();
    return drivers.find(d => d.driverId === id) || null;
  }
}
