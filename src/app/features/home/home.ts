import { Component, inject } from '@angular/core';
import { createProfileStore } from '../../shared/stores/profile';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public profileStore = createProfileStore();
}
