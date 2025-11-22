import { computed, signal } from '@angular/core';
import { JOURNEY_ENTRIES } from '../data/journey';
import { JourneyEntry } from '../models/journey-entry';

export function createJourneyStore() {
    const entries = signal<JourneyEntry[]>(JOURNEY_ENTRIES);

    const sortedEntries = computed(() =>
        [...entries()].sort((entryA, entryB) => entryA.from.localeCompare(entryB.from))
    );

    const currentEntry = computed(() =>
        entries().find(entry => entry.type === 'current') ?? null
    );

    return {
        entries,
        sortedEntries,
        currentEntry,
    };
}