import { Component, OnInit } from '@angular/core';
import { createMeetingsStore } from '../../../shared/stores/meetings';

@Component({
  selector: 'app-openf1-meetings',
  templateUrl: './meetings.html',
})
export class MeetingsComponent implements OnInit {
  public meetingsStore = createMeetingsStore();

  ngOnInit(): void {
    void this.meetingsStore.loadAll();
  }
}
