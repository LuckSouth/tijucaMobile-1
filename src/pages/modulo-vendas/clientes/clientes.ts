import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular'; 
import { FinanceiroPage } from '../clientes/venda/financeiro/financeiro';
import { PedidoPage } from '../clientes/venda/pedido/pedido';
import { InformacoesPage } from '../clientes/venda/informacoes/informacoes'; 

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html' 
})
 
export class ClientesPage {

  searchQuery: string = '';
  items: any[];
  cnpj: string[];
  id: string[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
    this.initializeItems();
  }

  

  initializeItems() {
    this.items = [{
      "nome_cliente": "Filipe Felipe Pinto",
      "cnpj": "44.417.978/0001-29",
      "limite": 500,
      "id_cliente": "1242"
    },
    {
      "nome_cliente": "Kevin Tomás da Rosa ",
      "cnpj": "93.378.768/0001-84",
      "limite": 1500,
      "id_cliente": "314"
    }, {
      "nome_cliente": "Elias Benício Kevin dos Santos ",
      "cnpj": "98.269.715/0001-49",
      "limite": 700,
      "id_cliente": "28452"
    },
   ]
  }

  e(item) {
    console.log(item)

  }
 

  getItems(ev: any) { 

    this.initializeItems(); 

    
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        if (items.nome_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.nome_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.id_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.id_cliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }

      })

    }
  }


  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({ 
      buttons: [


        {
          text: 'Informações',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(InformacoesPage);
            
          }},
          {
          text: 'Financeiro',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(FinanceiroPage);
          }},{  
          
          

        text: 'Incluir Pedido',
        handler: () => { 
          let actionSheet = this.actionSheetCtrl.create({
            title: 'Pedido',
      buttons: [
        {
          text: 'Ovos Comerciais',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(PedidoPage);
          }},

        {
          text: 'Frango Abatido',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(PedidoPage);
          }},

        {
          text: 'Queijo',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(PedidoPage);
          }},

        {
          text: 'Galinha Abatida',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(PedidoPage);
          }},

        {
          text: 'Cajuina',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(PedidoPage);
          }},{
            text: 'Cancelar',
            role: 'destructive'
          }
      ]});
      actionSheet.present();
        }




        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
 
}
