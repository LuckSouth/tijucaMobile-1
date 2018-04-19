import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { ViagensPage } from '../../modulo-viagens/viagens/viagens'; 
import { StorageProvider } from "../../../providers/storage/storage";
import { VendasPage } from "../../modulo-vendas/vendas/vendas";
import { AlertController } from "ionic-angular";
import { LoginPage } from "../../../pages/login/login";

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
     constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public storageProvider: StorageProvider,
      public alertCtrl: AlertController,
    ) {
  } 

  permissaoViagens = this.storageProvider.listaLogin[0].viagens;
  permissaoVendas = this.storageProvider.listaLogin[0].vendas;


  linkViagens() {
    if(this.storageProvider.listaLogin[0].viagens == 1){
    this.navCtrl.push(ViagensPage);
    }else{
      let alerta = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Você não tem permissão para acessar esse módulo',
        buttons: ['Ok']
      });
      alerta.present();
    }
  }

  linkVendas() {

    if(this.storageProvider.listaLogin[0].vendas == 1){
      this.navCtrl.push(VendasPage);
      }else{
        let alerta = this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Você não tem permissão para acessar esse módulo',
          buttons: ['Ok']
        });
        alerta.present();
      }
  }


  logout(){
    this.storageProvider.delete(this.storageProvider.chaveLogin);
    this.navCtrl.push(LoginPage)
  }
}
