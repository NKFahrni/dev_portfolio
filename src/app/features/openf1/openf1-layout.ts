import { Component, OnInit } from '@angular/core';
import { createMeetingsStore } from '../../shared/stores/meetings';
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
	public meetingsStore = createMeetingsStore();

	ngOnInit(): void {
		void this.driversStore.loadAll();
		void this.meetingsStore.loadAll();
	}

}

