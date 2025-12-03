import { Component, OnInit } from '@angular/core';
import { createDriversStore } from '../../shared/stores/drivers';
import { RouterLink } from '@angular/router';
import { Drivers } from '../../shared/models/driver';

@Component({
	selector: 'app-openf1-layout',
	imports: [RouterLink],
	templateUrl: `./openf1-layout.html`,
})
export class OpenF1Layout implements OnInit {
	public driversStore = createDriversStore();

	ngOnInit(): void {
		void this.driversStore.loadAll();
	}

}

