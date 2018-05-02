import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViagensPage } from '../../modulo-viagens/viagens/viagens';
import { StorageProvider } from "../../../providers/storage/storage";
import { VendasPage } from "../../modulo-vendas/vendas/vendas";
import { AlertController } from "ionic-angular";
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public storageProvider: StorageProvider,
    public alertCtrl: AlertController,

  ) {
  }



  permissaoViagens //= this.storageProvider.listaLogin[0].viagens;
  permissaoVendas //= this.storageProvider.listaLogin[0].vendas;
  // Os modulos abaixo nem sequer começaram a ser projetados, logo todos estarão desabilitados

  permissaoCaixa = 0;
  permissaoCheque = 0;
  permissaofabrica = 0;
  permissaoSuporte = 0;


  linkViagens() {
    if (this.storageProvider.listaLogin[0].viagens == 1) {
      this.navCtrl.push(ViagensPage);
    } else {
      let alerta = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Você não tem permissão para acessar esse módulo',
        buttons: ['Ok']
      });
      alerta.present();
    }
  }

  linkVendas() {

    if (this.storageProvider.listaLogin[0].vendas == 1) {
      this.navCtrl.push(VendasPage);
    } else {
      let alerta = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Você não tem permissão para acessar esse módulo',
        buttons: ['Ok']
      });
      alerta.present();
    }
  }

  a;

  logout() {
    this.storageProvider.delete(this.storageProvider.chaveLogin);
    this.storage.clear()
    this.navCtrl.pop()
  }

  verificaPermissao() {

    if (this.permissaoViagens != 1) {
      this.a = document.getElementById('viagem').setAttribute("class", "disabled");
    }
    if (this.permissaoVendas != 1) {
      this.a = document.getElementById('vendas').setAttribute("class", "disabled");
    }
    if (this.permissaoCaixa != 1) {
      this.a = document.getElementById('caixa').setAttribute("class", "disabled");
    }
    if (this.permissaoCheque != 1) {
      this.a = document.getElementById('cheque').setAttribute("class", "disabled");
    }
    if (this.permissaofabrica != 1) {
      this.a = document.getElementById('fabrica').setAttribute("class", "disabled");
    }
    if (this.permissaoSuporte != 1) {
      this.a = document.getElementById('suporte').setAttribute("class", "disabled");
    }
  }

  ionViewDidEnter() {

    console.log('Vi' + this.storageProvider.listaLogin[0].viagens + " ve" + this.storageProvider.listaLogin[0].vendas)
    this.permissaoViagens = this.storageProvider.listaLogin[0].viagens;
    this.permissaoVendas = this.storageProvider.listaLogin[0].vendas;
    this.verificaPermissao()
  }
} 