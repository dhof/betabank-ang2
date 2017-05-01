import { Component } from '@angular/core';



@Component({
	moduleId: module.id,
  	selector: 'app-root',
  	template: `
	<nav>
		<a routerLink="/login" routerLinkActive="active">LogIn</a>
		<a routerLink="/profile" routerLinkActive="active">profile</a>
		<a routerLink="/map" routerLinkActive="active">Map</a>
	</nav>
	<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
}
