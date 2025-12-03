import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Drivers, Driver } from '../models/driver';
import { Meetings } from '../models/meeting';

@Injectable({ providedIn: 'root' })
export class OpenF1Service {
	private readonly base = 'https://api.openf1.org/v1';
	private http = inject(HttpClient);

	async driverByNumber(driverNumber: number): Promise<Driver | null> {
		const url = `${this.base}/drivers?driver_number=${encodeURIComponent(String(driverNumber))}`;
		try {
			const data = await firstValueFrom(this.http.get<Drivers>(url));
			const list = data || [];
			return list.length ? list[0] : null;
		} catch (error: any) {
			throw new Error(`Failed to fetch driver: ${error?.message || String(error)}`);
		}
	}

	async getDrivers(): Promise<Drivers> {
		const url = `${this.base}/drivers?session_key=latest`;
		try {
			const data = await firstValueFrom(this.http.get<Drivers>(url));
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
