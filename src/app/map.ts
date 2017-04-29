import { Component, OnInit } from '@angular/core';

// export class Map {
// 	// id: number;
// 	// name: string;
// 	const map = window.mapInit = function() {
// 		const map = new google.maps.Map(document.getElementById("map"), {
// 			center	  : {lat: 40.0169753, lng: -105.2222925},
// 			zoom	  : 12,
// 			mapTypeId : google.maps.MapTypeId.TERRAIN
// 		})
// 	}
// }])
// }

export class GoogleMap {
	const map = new google.maps.Map(document.getElementById("map"), {
		center	  : {lat: 40.0169753, lng: -105.2222925},
		zoom	  : 12,
		mapTypeId : google.maps.MapTypeId.TERRAIN
	}) 
}