import { SkillLevel } from '../enums/skill-level';
import { Skill } from '../models/skill';

export const toLevel = (percent: number): Skill['level'] => {
  if (percent >= 88) return SkillLevel.Expert;
  if (percent >= 75) return SkillLevel.Senior;
  if (percent >= 60) return SkillLevel.Developer;
  if (percent >= 45) return SkillLevel.Junior;
  return SkillLevel.Beginner;
};

export const levelToPercent = (level: SkillLevel) => {
  switch (level) {
    case SkillLevel.Beginner:
      return 30;
    case SkillLevel.Junior:
      return 50;
    case SkillLevel.Developer:
      return 70;
    case SkillLevel.Senior:
      return 85;
    case SkillLevel.Expert:
      return 95;
    default:
      return 50;
  }
};

export const levelLabel = (level: SkillLevel) => {
  switch (level) {
    case SkillLevel.Beginner:
      return 'Beginner';
    case SkillLevel.Junior:
      return 'Junior';
    case SkillLevel.Developer:
      return 'Developer';
    case SkillLevel.Senior:
      return 'Senior';
    case SkillLevel.Expert:
      return 'Expert';
    default:
      return '';
  }
};
