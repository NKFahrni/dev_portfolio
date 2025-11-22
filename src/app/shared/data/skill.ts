import { SkillLevel } from '../enums/skill-level';
import { SkillGroup, Skill } from '../models/skill';
import { toLevel } from '../utils/skill-utils';

export const SKILLS: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'Angular', level: SkillLevel.Expert },
      { name: 'TypeScript', level: SkillLevel.Developer  },
      { name: 'HTML & CSS', level: SkillLevel.Expert  },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Cloud',
    skills: [
      { name: 'C# / .NET', level: SkillLevel.Developer },
      { name: 'Azure Functions', level: SkillLevel.Developer  },
      { name: 'SQL', level: SkillLevel.Junior },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    skills: [
      { name: 'Git', level: SkillLevel.Senior  },
      { name: 'CI/CD', level: SkillLevel.Developer  },
      { name: 'Testing', level: SkillLevel.Junior },
    ],
  },
];
