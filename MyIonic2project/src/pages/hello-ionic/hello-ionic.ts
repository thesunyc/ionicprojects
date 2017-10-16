import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})


export class HelloIonicPage {
  public map:any;
  constructor(public navCtrl: NavController, public navParams: NavParams){}

  ionViewDidLoad() {
    console.log('Loading Amap');
    this.loadMap();
  }

  loadMap() {
    let newMap = this.map = new BMap.Map("map");    
    newMap.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  
    newMap.addControl(new BMap.MapTypeControl());   
    newMap.setCurrentCity("北京");          
    newMap.enableScrollWheelZoom(true); 
  }
}
