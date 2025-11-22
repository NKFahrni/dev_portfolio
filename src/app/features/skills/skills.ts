import { Component } from '@angular/core';
import { createSkillStore } from '../../shared/stores/skills';
import { SectionTitle } from '../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-skills',
  imports: [SectionTitle],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly store = createSkillStore();
}
