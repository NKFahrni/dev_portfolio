import { signal, inject } from '@angular/core';
import { OpenF1Service } from '../services/openf1.service';
import { Meetings } from '../models/meeting';

export function createMeetingsStore() {
  const service = inject(OpenF1Service);

  const meetings = signal<Meetings>([]);
  const loading = signal(false);
  const error = signal<string | null>(null);

  async function loadAll() {
    loading.set(true);
    error.set(null);
    try {
      const res = await service.getMeetings();
      meetings.set(res || []);
    } catch (err: any) {
      error.set(err?.message || String(err));
    } finally {
      loading.set(false);
    }
  }

  return {
    meetings,
    loading,
    error,
    loadAll,
  };
}
