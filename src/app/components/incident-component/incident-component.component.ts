import { Component, OnInit } from '@angular/core';
import { ComponentsInteractionService } from '../../services/interaction/components-interaction.service';


@Component({
  selector: 'app-incident-component',
  templateUrl: './incident-component.component.html',
  styleUrls: ['./incident-component.component.css']
})
export class IncidentComponentComponent implements OnInit {

  constructor(private interaction: ComponentsInteractionService) {

  }

  ngOnInit() {
  }

  eventClicked(value: string) {
  this.interaction.passedValue(value);
    // console.log(value);
  }
}
