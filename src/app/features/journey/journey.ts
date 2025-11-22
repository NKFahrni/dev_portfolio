import { Component } from '@angular/core';
import { createJourneyStore } from '../../shared/stores/journey';
import { SectionTitle } from '../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-journey',
  imports: [SectionTitle],
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class Journey {
  readonly store = createJourneyStore();
}
