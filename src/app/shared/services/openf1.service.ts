import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Drivers, Driver } from '../models/driver';
import { Meetings } from '../models/meeting';

@Injectable({ providedIn: 'root' })
export class OpenF1Service {
	private readonly base = 'https://api.openf1.org/v1';
	private http = inject(HttpClient);
	private driversCache = signal<Drivers>([]);

	async driverByNumber(driverNumber: number): Promise<Driver | null> {
		// Prefer searching the locally cached drivers list to avoid extra network calls.
		const cache = this.driversCache() || [];
		const found = cache.find(d => d.driver_number === driverNumber) || null;
		return found;
	}

	async getDrivers(): Promise<Drivers> {
		const url = `${this.base}/drivers?session_key=latest`;
		try {
			const data = await firstValueFrom(this.http.get<Drivers>(url));
			this.driversCache.set(data);	
			return data;
		} catch (error: any) {
			throw new Error(`Failed to fetch drivers: ${error?.message || String(error)}`);
		}
	}

	async getMeetings(): Promise<Meetings> {
		const url = `${this.base}/meetings`;
		try {
			const data = await firstValueFrom(this.http.get<Meetings>(url));
			return data || [];
		} catch (error: any) {
			throw new Error(`Failed to fetch meetings: ${error?.message || String(error)}`);
		}
	}

}
