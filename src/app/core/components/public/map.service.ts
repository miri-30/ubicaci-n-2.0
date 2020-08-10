import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MapService {

  constructor(private db: AngularFireDatabase ) {
    mapboxgl.accessToken = environment.mapAccessToken
  }
  getMarkers() {
    return this.db.list('/markers')
  }

  createMarker(data: GeoJson) {
    return this.db.list('/markers').push(data)
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove()
  }

}
