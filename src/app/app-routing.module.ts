import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map.component';
import { LogInComponent } from './logIn.component';
import { ProfileComponent } from './profile.component';




const appRoutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'map', component: MapComponent },
	{ path: 'profile', component: ProfileComponent },	
	// { path: 'signup', component: UserComponent },
	{ path: 'login', component: LogInComponent },
	// { path: 'logout', component: UserComponent },
	// { path: '/api/user', component: UserComponent },
	// { path: '/api/completedClimbs', component: UserComponent },
	{ path: 'api/locations', component: MapComponent },
	{ path: 'api/walls', component: MapComponent },
	{ path: 'api/problems', component: MapComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
