import { Component, signal, OnInit, inject } from '@angular/core';
import { OpenF1Service } from '../../../shared/services/openf1.service';
import { Driver } from '../../../shared/models/driver';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-driver',
  imports: [NgOptimizedImage],
  templateUrl: './driver.html',
  styleUrl: './driver.css',
  standalone: true,
})
export class DriverComponent implements OnInit {
  private service = inject(OpenF1Service);
  private route = inject(ActivatedRoute);
  public driver = signal<Driver | null>(null);
  public loading = signal(true);
  public error = signal<string | null>(null);

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('driverNumber');
    const number = param ? Number(param) : NaN;
    void this.load(isNaN(number) ? 1 : number);
  }

  async load(driverNumber: number) {
    this.loading.set(true);
    this.error.set(null);
    try {
      const res = await this.service.getDriversByNumber(driverNumber);
      if (res && res.length) this.driver.set(res[0]);
      else this.error.set('No driver found');
    } catch (err: any) {
      this.error.set(err?.message || String(err));
    } finally {
      this.loading.set(false);
    }
  }
}
