import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';

@Component({
	moduleId: module.id,
	selector: 'google-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
	markers = [];
	creationLock = true;
	newLocationName: string = '';

	constructor(private mapService: MapService) {}
 

	initMap(): void {
	 	const map = new google.maps.Map(document.getElementById('map'), {
	 		center	  : {lat: 40.0169753, lng: -105.2222925},
			zoom	  : 12,
			mapTypeId : google.maps.MapTypeId.TERRAIN
	 	});

	 	
 	        map.addListener('click', (event) => {
 		 		const position = { lat : event.latLng.lat(), lng : event.latLng.lng()}
 		 		this.createMarker(position, map, this.newLocationName)
 	        });
 	    

     //    marker.addListener('click', function(){
    	// $scope.setModal(marker.name);
    	// console.log($scope.currentModal);
	}


	ngOnInit(): void {
	 	this.initMap()
	}


	createMarker(position: position, map: map, name: name) {
		if (this.creationLock === false && this.newLocationName !== ''	) {
			const marker = new google.maps.Marker({
				position : { lat: position.lat, lng: position.lng},
	 			map : map,
	 			name: name,
	 		});
			this.markers.push({locationName: name, latLng: position});
			this.creationLock = true;
			this.newLocationName = "";
		}
	}


	allowNewLocation(): void {
		this.creationLock = false;
	}


	showMe(): void {
		console.log(this.creationLock);
		console.log(this.markers);
	}
}