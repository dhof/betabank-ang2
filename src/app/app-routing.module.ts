import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'map', component: MapComponent },
	// { path: 'signup', component: UserComponent },
	// { path: 'login', component: UserComponent },
	// { path: 'logout', component: UserComponent },
	// { path: '/api/user', component: UserComponent },
	// { path: '/api/completedClimbs', component: UserComponent },
	// { path: '/api/locations', component: LocationComponent },
	// { path: '/api/walls', component: LocationComponent },
	// { path: '/api/problems', component: LocationComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
