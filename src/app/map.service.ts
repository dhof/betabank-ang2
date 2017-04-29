import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// import { Map } from './map';


@Injectable()
export class MapService {

// constructor(private map: Map) {}

	showMe(): void {
		console.log("hi")
	}

}