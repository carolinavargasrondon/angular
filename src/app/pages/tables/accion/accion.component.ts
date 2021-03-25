import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.scss']
})

/**
 * Basic table component
 */
export class AccionComponente implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'subcaro' }, { label: 'caro', active: true }];
  }
}
