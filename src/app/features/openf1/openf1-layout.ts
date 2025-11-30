
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { OpenF1Service } from '../../shared/services/openf1.service';
import { OpenF1Driver } from '../../shared/models/openf1-driver';

@Component({
  selector: 'app-openf1-layout',
  imports: [CommonModule, JsonPipe],
  templateUrl: './openf1-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenF1Layout {
  private readonly service = inject(OpenF1Service);

  public readonly drivers = signal<OpenF1Driver[]>([]);
  public readonly selectedDriver = signal<OpenF1Driver | null>(null);
  public readonly loading = signal(false);
  public readonly error = signal<string | null>(null);

  constructor() {
    this.loadDrivers();
  }

  async loadDrivers() {
    this.loading.set(true);
    this.error.set(null);
    try {
      const result = await this.service.getDrivers();
      this.drivers.set(result ?? []);
    } catch (error: unknown) {
      const message = error && typeof error === 'object' && 'message' in error
        ? (error as any).message
        : String(error);
      this.error.set(message || 'Failed to load drivers');
    } finally {
      this.loading.set(false);
    }
  }

  selectDriver(driver: OpenF1Driver) {
    this.selectedDriver.set(driver);
  }

  clearSelection() {
    this.selectedDriver.set(null);
  }
}
