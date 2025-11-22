import { SkillLevel } from "../enums/skill-level";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

