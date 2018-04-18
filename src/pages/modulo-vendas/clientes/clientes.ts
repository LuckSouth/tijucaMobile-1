import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FinanceiroPage } from '../clientes/venda/financeiro/financeiro';
import { PedidoPage } from '../clientes/venda/pedido/pedido';
import { InformacoesPage } from '../clientes/venda/informacoes/informacoes';
import { StorageProvider } from "../../../providers/storage/storage";
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
    public alertCtrl: AlertController,
    public storage: StorageProvider) {
    this.initializeItems();
  }



  initializeItems() {

    this.items = this.storage.listaClientes
  }

  e(item) {
    console.log(item)
  }


  getItems(ev: any) {

    this.initializeItems();


    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        if (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.codigoCliente.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.codigoCliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
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

          }
        },
        {
          text: 'Financeiro',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(FinanceiroPage);
          }
        }, {



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
                  }
                },

                {
                  text: 'Frango Abatido',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                },

                {
                  text: 'Queijo',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                },

                {
                  text: 'Galinha Abatida',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                },

                {
                  text: 'Cajuina',
                  role: 'destructive',
                  handler: () => {
                    this.navCtrl.push(PedidoPage);
                  }
                }, {
                  text: 'Cancelar',
                  role: 'destructive'
                }
              ]
            });
            actionSheet.present();
          }


        }, {
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