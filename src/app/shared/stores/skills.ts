import { signal, computed } from '@angular/core';
import { SkillGroup } from '../models/skill';
import { SKILLS } from '../data/skill';
import { levelToPercent, levelLabel } from '../utils/skill-utils';

export function createSkillStore() {
	const groups = signal<SkillGroup[]>(SKILLS);

	const allSkills = computed(() => groups().flatMap(g => g.skills));

	return {
		groups,
		allSkills,
		levelToPercent,
		levelLabel,
	};
}