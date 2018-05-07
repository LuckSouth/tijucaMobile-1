import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubprecosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subprecos',
  templateUrl: 'subprecos.html',
})
export class SubprecosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }
items: any;
  
  initializeItems() {
    this.items = [{
      "produto": "914 - ASA DE FRANGO CONGELADA",
      "mercadinho": "40 - CENTERBOX JOAO XVIII",
      "observacao": "Motorista Erick"
    },
    {
      "produto": "736 - MOELA CONGELADA 500G",
      "mercadinho": " 40 - CENTERBOX JOAO XVIII",
      "observacao": ""
    },
    {
      "produto": "748 - FILEZINHO SASSAMI CONGELADO 500G",
      "mercadinho": " 40 - CENTERBOX JOAO XVIII",
      "observacao": ""
    },
    {
      "produto": "739 - ASA CONGELADA 500G",
      "mercadinho": " 40 - CENTERBOX JOAO XVIII",
      "observacao": ""
    }]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubprecosPage');
  }

}
