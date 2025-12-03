import { Component, signal, OnInit, inject } from '@angular/core';
import { createDriversStore } from '../../../../shared/stores/drivers';
import { Driver } from '../../../../shared/models/driver';
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
    const result = await this.driversStore.loadByNumber(driverNumber);
    if (result) this.driver.set(result);
  }
}
