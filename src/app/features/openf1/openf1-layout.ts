import { Component, OnInit, signal, inject } from '@angular/core';
import { OpenF1Service } from '../../shared/services/openf1.service';
import { RouterLink } from '@angular/router';
import { Drivers } from '../../shared/models/driver';

@Component({
	selector: 'app-openf1-layout',
	imports: [RouterLink],
	templateUrl: `./openf1-layout.html`,
})
export class OpenF1Layout implements OnInit {
	private service = inject(OpenF1Service);
	public drivers = signal([] as Drivers);
	public loading = signal(true);
	public error = signal<string | null>(null);

	ngOnInit(): void {
		void this.load();
	}

	async load() {
		this.loading.set(true);
		this.error.set(null);
		try {
			const res = await this.service.getDrivers();
			this.drivers.set(res || []);
		} catch (err: any) {
			this.error.set(err?.message || String(err));
		} finally {
			this.loading.set(false);
		}
	}
}

