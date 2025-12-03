import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
   imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html'
})
export class Layout {

}
