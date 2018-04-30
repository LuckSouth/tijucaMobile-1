import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeProduto()
  }

  produto: any;

  initializeProduto() {
    this.produto = [{
      "numero": "377799",      
      "codigo": "673408",      
      "cliente": "Edvaldo Viera da Silva",
      "cod_cliente": "21350",
      "mensagem": "Motorista Erick",
      "status": "RECEBIDO", 
      "valor_pedido": "R$ 208,32",
      "valor_total": "R$ 208,32",
      "data": "27/04/2018", 
      "data_entrega": "29/04/2018",
      "data_vencimento": "05/05/2018"
    }]
  } 

}
