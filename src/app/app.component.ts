import { Component } from '@angular/core';

import { MapService } from './map.service';

@Component({
	moduleId: module.id,
  	selector: 'app-root',
  	template: `
	<h1>{{title}}</h1>
	<nav>
		<a routerLink="/map" routerLinkActive="active">Map</a>
	</nav>
	<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BetaBank!';

  constructor(private mapService: MapService) {}


  show(): void {
  	this.mapService.showMe()
  }
}
