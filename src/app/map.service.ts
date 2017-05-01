import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class MapService {


	markers = [];
	// newLocationName: string = '';


	



	showOther(): void {
		console.log('show other')
	}

}