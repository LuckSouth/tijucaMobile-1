import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
  items: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems()
  }
  
  initializeItems() {
    this.items = [{
      "nome": "A22 - Frango Congelado 1.7 Encaixado",
      "preco": "R$ 5,00",
      "qtd": "200 KG",
      "id_produto": "1"
    },
    {
      "nome": "A22 - Ovo inddasdsas asdfasfas safasfaws asfsagsa wustrial 6 ",
      "preco": "R$ 6,60",
      "qtd": "2500 bd",
      "id_produto": "2"
    }]
  }

  e(item) {
    console.log(item)

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        if (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.preco.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.preco.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.qtd.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.qtd.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        
      })

    }
  }


}
