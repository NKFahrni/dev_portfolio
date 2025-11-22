import { signal, computed } from '@angular/core';
import { PROFILE } from '../data/profile';

export function createProfileStore() {
  const profileSignal = signal(PROFILE);

  const displayName = computed(() => profileSignal().name);
  const focusAreas = computed(() => profileSignal().focusAreas);

  return {
    profile: profileSignal,
    displayName,
    focusAreas,
  };
}