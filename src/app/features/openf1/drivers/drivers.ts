import { Component, signal, OnInit, inject } from '@angular/core';
import { OpenF1Service } from '../../../shared/services/openf1.service';
import { Drivers } from '../../../shared/models/driver';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-openf1-drivers',
  imports: [RouterLink],
  templateUrl: './drivers.html'
})
export class DriversComponent implements OnInit {
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
