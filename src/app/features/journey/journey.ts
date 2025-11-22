import { Component } from '@angular/core';
import { createJourneyStore } from '../../shared/stores/journey';

@Component({
  selector: 'app-journey',
  imports: [],
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class Journey {
  readonly store = createJourneyStore();
}
