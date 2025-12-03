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
      const result = await service.getMeetings();
      meetings.set(result || []);
    } catch (caughtError: any) {
      error.set(caughtError?.message || String(caughtError));
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
