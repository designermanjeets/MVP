import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnomaliesModel, ANOMALIES_DATA, anomalyData, DeviationsModel, DEVIATION_DATA, DeviationsPopModel, DEVIATION_POP_DATA } from './_models/anomalies.models';
import { AnomaliesService } from './../_services/anomalies.service';
import * as moment from 'moment'
import { MatTabChangeEvent } from '@angular/material/tabs';

declare var ol: any;

@Component({
  selector: 'workspace-anomalies',
  templateUrl: './anomalies.component.html',
  styleUrls: ['./anomalies.component.scss']
})

export class AnomaliesComponent implements OnInit {

  chartData: any[];
  displayedColumns: string[] = [ 'Operator', 'Anomalies' ];
  dataSource = new MatTableDataSource<AnomaliesModel>();
  displayedColumnsDv: string[] = [ 'Operator', 'Deviations' ];
  dataSourceDv = new MatTableDataSource<DeviationsModel>();
  dataSourceDvPop = new MatTableDataSource<DeviationsPopModel>();
  tabIndex: number;

  
  latitude: number = 18.5204;
  longitude: number = 73.8567;
  map: any;

  constructor(
    private anomaliesService: AnomaliesService
  ) { }

  ngOnInit(): void {

    this.chartData = this.extractTrips(anomalyData);
    this.dataSource = new MatTableDataSource(ANOMALIES_DATA);
    this.dataSourceDv = new MatTableDataSource(DEVIATION_DATA);
    this.dataSourceDvPop = new MatTableDataSource(DEVIATION_POP_DATA);

    //MAP
    this.renderMap();

  }

  extractTrips(val) {
    const temp = [];
    // this.enTable = Object.keys(val)[0];
    val.TRIP.forEach(ele => {
      for (const item in ele) {
        if(Array.isArray(ele[item])) {
          ele[item].forEach((timeline, i) => {
            for (const el in timeline.timeline) {
              if(el) {
                const data = [];
                for (const ele2 in timeline.timeline[el]) {
                  if(ele2) {
                    const time = moment.utc(ele2, "HH:mm");
                    const name = time.format('LT');
                    data.push(Number(timeline.timeline[el][ele2]))
                  }
                }
                temp.push({'name': item, data});
              }
            }
          });
        }
      }
    });
    return temp;
  }

  checkForBrace(data) {
    return this.anomaliesService.getNegPosValue(data);
  }

  selectedTabChange($event: MatTabChangeEvent) {
    this.tabIndex = $event.index;
  }

  renderMap() {

    const markerSource = new ol.source.Vector();
    const url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
    'Specialty/ESRI_StateCityHighway_USA/MapServer';

    const markerStyle = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'https://openlayers.org/en/latest/examples/data/icon.png'
      }))
    });
    
    const mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });


    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
          source: markerSource,
          style: markerStyle,
        }),
        new ol.layer.Image({
          source: new ol.source.ImageArcGISRest({
            ratio: 1,
            params: {},
            url: url
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-85.000000, 50.000000]),
        zoom: 6
      })
    });

    function addMarker(lon, lat) {
      console.log('lon:', lon);
      console.log('lat:', lat);
    
      const iconFeatures = [];
    
      const iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326',
          'EPSG:3857')),
        name: 'Null Island',
        population: 4000,
        rainfall: 500
      });
    
      markerSource.addFeature(iconFeature);
    }

    this.map.on('click', function (args) {
      console.log(args.coordinate);
      const lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
      console.log(lonlat);
      addMarker(lonlat[0], lonlat[1]);
    });
  }

  setCenter() {
    const view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }

}
