import { Component, inject } from '@angular/core';
import { createProfileStore } from '../../shared/stores/profile';
import { SectionTitle } from '../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-home',
  imports: [SectionTitle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public profileStore = createProfileStore();
}
