import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
  @Input() groupName: string;
  @Input() groupDescription: string;
  @Input() disable: boolean;
  @Input() idName: string;
  constructor() { }

  ngOnInit() {
  }

}
