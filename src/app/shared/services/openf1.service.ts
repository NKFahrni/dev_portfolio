import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Drivers } from '../models/driver';
import { Meetings } from '../models/meeting';

@Injectable({ providedIn: 'root' })
export class OpenF1Service {
	private readonly base = 'https://api.openf1.org/v1';
	private http = inject(HttpClient);

	async getDriversByNumber(driverNumber: number): Promise<Drivers> {
		const url = `${this.base}/drivers?driver_number=${encodeURIComponent(String(driverNumber))}`;
		try {
			const data = await firstValueFrom(this.http.get<Drivers>(url));
			return data || [];
		} catch (err: any) {
			throw new Error(`Failed to fetch drivers: ${err?.message || String(err)}`);
		}
	}

	async getDrivers(): Promise<Drivers> {
		const url = `${this.base}/drivers?session_key=latest`;
		try {
			const data = await firstValueFrom(this.http.get<Drivers>(url));
			return data;
		} catch (err: any) {
			throw new Error(`Failed to fetch drivers: ${err?.message || String(err)}`);
		}
	}

	async getMeetings(): Promise<Meetings> {
		const url = `${this.base}/meetings`;
		try {
			const data = await firstValueFrom(this.http.get<Meetings>(url));
			return data || [];
		} catch (err: any) {
			throw new Error(`Failed to fetch meetings: ${err?.message || String(err)}`);
		}
	}

}
