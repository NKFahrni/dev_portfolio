import { Component, signal, OnInit, inject } from '@angular/core';
import { Driver } from '../../../../shared/models/driver';
import { createDriversStore } from '../../../../shared/stores/drivers';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-driver',
  imports: [NgOptimizedImage],
  templateUrl: './driver.html'
})
export class DriverComponent implements OnInit {
  private route = inject(ActivatedRoute);
  public driversStore = createDriversStore();
  public driver = signal<Driver | null>(null);

  async ngOnInit(): Promise<void> {
    const driverParam = this.route.snapshot.paramMap.get('driverNumber');
    const parsedNumber = driverParam ? Number(driverParam) : NaN;
    const driverNumber = isNaN(parsedNumber) ? 1 : parsedNumber;
    const driverResult = await this.driversStore.loadByNumber(driverNumber);
    if (driverResult) this.driver.set(driverResult);
  }
}
