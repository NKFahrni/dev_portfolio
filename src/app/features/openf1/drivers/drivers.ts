import { Component, OnInit } from '@angular/core';
import { Drivers } from '../../../shared/models/driver';
import { createDriversStore } from '../../../shared/stores/drivers';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-openf1-drivers',
  imports: [RouterLink],
  templateUrl: './drivers.html'
})
export class DriversComponent implements OnInit {
  public driversStore = createDriversStore();

  ngOnInit(): void {
    void this.driversStore.loadAll();
  }

}
