import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { transform, fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';
import { Feature } from 'ol';
import { Point } from 'ol/geom';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  public map!: Map
  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: transform([18.08566411050217, 48.30917064851812], 'EPSG:4326', 'EPSG:3857'),
        zoom: 16, maxZoom: 20,
      }),
    });

    var markers = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'assets/icons/map.png',
        })
      })
    });
    this.map.addLayer(markers);
    setTimeout(() => this.map.updateSize(), 0);

    var marker = new Feature(new Point(fromLonLat([18.08566411050217, 48.30917064851812])));
    // @ts-ignore: Object is possibly 'null'.
    markers.getSource().addFeature(marker);
  }
}
