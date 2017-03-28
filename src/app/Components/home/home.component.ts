import {Component, OnInit, ElementRef} from '@angular/core';
import {GetWklySalesService} from "../../Services/get-wkly-sales.service";
import 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  map;
  items = [];
  storeData;
  sumAvgWklySales=0;
  storeLocs =
    {'C001097':{marker:null,storeName:'TORONTO-PROMENADE',latLng:L.latLng(43.8067096,-79.4524759)},'C001328':{marker:null,storeName:'BURLINGTON',latLng:L.latLng(43.3259299,-79.8221605)},
    'C001022':{marker:null,storeName:'GUELPH',latLng:L.latLng(43.5194326,-80.236036)},'C001016':{marker:null,storeName:'OSHAWA',latLng:L.latLng(43.8924655,-78.8812018)},
    'C001093':{marker:null,storeName:'HAMILTON-LIMERIDGE',latLng:L.latLng(43.2190871,-79.8606729)},'C001322':{marker:null,storeName:'FAIRVIEW',latLng:L.latLng(43.7768716,-79.3462799)},
    'C001013':{marker:null,storeName:'KITCHENER',latLng:L.latLng(43.423702,-80.4375684)},'C001088':{marker:null,storeName:'TORONTO-NEWMARKET',latLng:L.latLng(44.0562891,-79.4878338)},
    'C001049':{marker:null,storeName:'BRAMALEA',latLng:L.latLng(43.7158617,-79.7239372)},'C001034':{marker:null,storeName:'PICKERING',latLng:L.latLng(43.8357555,-79.0843075)},
    'C001323':{marker:null,storeName:'ERIN MILLS',latLng:L.latLng(43.5571542,-79.711927)}, 'C001033':{marker:null,storeName:'BRANTFORD',latLng:L.latLng(43.169989,-80.2398063)},
    'C001308':{marker:null,storeName:'SCARBOROUGH 2',latLng:L.latLng(43.7761297,-79.2597903)},'C001321':{marker:null,storeName:'OAKVILLE',latLng:L.latLng(43.4615453,-79.6891721)}};
  constructor(private salesService:GetWklySalesService,private elRef:ElementRef){
    console.log( (window.screen.height) + "px");
  }
  getWklySales(itemId){
    if(itemId === "")
      return;
    let self = this;
    self.map.closePopup();
    Object.keys(self.storeLocs).map((loc)=>{
      if(self.storeLocs[loc].marker.getPopup()!== 'undefined'){
        self.storeLocs[loc].marker.closePopup();
        self.storeLocs[loc].marker.unbindPopup();
      }
    });
    this.salesService.getWklySalesFor(itemId).then((data)=>{
      self.sumAvgWklySales =0;
      console.log(data);
      this.storeData = data.items;
      data.items.map((doc)=>{
        self.sumAvgWklySales+=doc['AvgWklyUnitSales'];
        if(self.storeLocs[doc['store']].marker.getPopup() !== 'undefined'){
          self.storeLocs[doc['store']].marker.unbindPopup();
        }
        self.storeLocs[doc['store']].marker.bindPopup('<b>'+self.storeLocs[doc['store']].storeName+'</b><br/>'+
          doc['item_id']+'<br/>AvgWklyUnitSales : '+doc['AvgWklyUnitSales'].toString(),{'autoClose':false}).openPopup();
      });
    });
  }

  ngOnInit() {
    //this.salesService.getItemIds().then((items)=> this.items = items.itemIds);
    this.elRef.nativeElement.querySelector('#map').style.height = (window.screen.height) + "px";
  }
  ngAfterViewInit(){
    L.Icon.Default.imagePath = 'assets/images/';
    this.map = L.map('map',{closePopupOnClick: false})
      .setView([43.620170616189924,-79.66598510742189], 8);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:13,
      minZoom:8,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    this.addStorePinsToMap();
  }
  addStorePinsToMap(){
    this.storeLocs['C001097'].marker = L.marker(this.storeLocs['C001097'].latLng).addTo(this.map);//CF Promenade
    this.storeLocs['C001328'].marker = L.marker(this.storeLocs['C001328'].latLng).addTo(this.map);//Burlington
    this.storeLocs['C001022'].marker = L.marker(this.storeLocs['C001022'].latLng).addTo(this.map);//Guelph
    this.storeLocs['C001016'].marker = L.marker(this.storeLocs['C001016'].latLng).addTo(this.map);//Oshawa
    this.storeLocs['C001093'].marker = L.marker(this.storeLocs['C001093'].latLng).addTo(this.map);//Hamilton*/
    this.storeLocs['C001322'].marker = L.marker(this.storeLocs['C001322'].latLng).addTo(this.map);//Fairview
    this.storeLocs['C001013'].marker = L.marker(this.storeLocs['C001013'].latLng).addTo(this.map);//Kitchener //FairView Park Mall
    this.storeLocs['C001088'].marker = L.marker(this.storeLocs['C001088'].latLng).addTo(this.map);//Toronto NewMarket
    this.storeLocs['C001049'].marker = L.marker(this.storeLocs['C001049'].latLng).addTo(this.map);//Bramalea
    this.storeLocs['C001034'].marker = L.marker(this.storeLocs['C001034'].latLng).addTo(this.map);//Pickering
    this.storeLocs['C001323'].marker = L.marker(this.storeLocs['C001323'].latLng).addTo(this.map);//Erin mills
    this.storeLocs['C001033'].marker = L.marker(this.storeLocs['C001033'].latLng).addTo(this.map);//BRANTFORD
    this.storeLocs['C001308'].marker = L.marker(this.storeLocs['C001308'].latLng).addTo(this.map);//SCARBOROUGH 2
    this.storeLocs['C001321'].marker = L.marker(this.storeLocs['C001321'].latLng).addTo(this.map);//Oakville
  }
}
