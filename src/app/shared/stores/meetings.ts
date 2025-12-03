import { signal, inject } from '@angular/core';
import { OpenF1Service } from '../services/openf1.service';
import { Meeting, Meetings } from '../models/meeting';

export function createMeetingsStore() {
  const service = inject(OpenF1Service);

  const meetings = signal<Meetings>([]);
  const loading = signal(false);
  const error = signal<string | null>(null);
  const recentMeetings = signal<Meetings>([]);

  async function loadAll() {
    loading.set(true);
    error.set(null);
    try {
      const result = await service.getMeetings();
      meetings.set(result || []);
      // optionally populate recentMeetings with first few on initial load (no-op)
    } catch (caughtError: any) {
      error.set(caughtError?.message || String(caughtError));
    } finally {
      loading.set(false);
    }
  }

  function recordVisitedMeeting(meeting: Meeting) {
    const existing = recentMeetings().filter(m => m.meeting_key !== meeting.meeting_key);
    const updated = [meeting, ...existing].slice(0, 4);
    recentMeetings.set(updated);
  }

  return {
    meetings,
    loading,
    error,
    recentMeetings,
    loadAll,
    recordVisitedMeeting,
  };
}
