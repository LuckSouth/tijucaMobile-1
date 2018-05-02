import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupermercadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supermercados',
  templateUrl: 'supermercados.html',
})
export class SupermercadosPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }
  
  initializeItems() {
    this.items = [{
      "codigo": "18805",
      "nome": "FRANGOLANDIA",
      "endereco": "CE-040",
      "local": "Eusébio"
    },
    {
      "codigo": "B767",
      "nome": " Jals",
      "endereco": "Mister Hull",
      "local": "Antônio Bezerra"
    },
    {
      "codigo": "21214853412534125431241988",
      "nome": "Super Mercados R. B. Maga523e41254412545215844 12lhães",
      "endereco": "Rua Coronel Antonio Botdasfdsafasfelho Sousa542141254412544125441254",
      "local": "Centro523q5447564554w7 75we4s575dx554ys554ty78455"
    },
    {
      "codigo": "C680",
      "nome": "Super Portugal",
      "endereco": "Rua Bragança 87418",
      "local": "Granja Portugal"
    }]
  }


  e(item) {
    console.log(item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupermercadosPage');
  }

}
