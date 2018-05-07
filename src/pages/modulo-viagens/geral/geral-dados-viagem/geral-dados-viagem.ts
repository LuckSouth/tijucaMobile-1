import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { RecuperarDadosProvider } from "../../../../providers/recuperar-dados/recuperar-dados";
import { StorageProvider } from "../../../../providers/storage/storage";

@IonicPage()
@Component({
  selector: 'geral-dados-viagem',
  templateUrl: 'geral-dados-viagem.html',
})
export class GeralDadosViagemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public recuperarDados: RecuperarDadosProvider, public storageProvider: StorageProvider) {
    this.recuperarDados.geral()
    this.dados = this.storageProvider.listaGeral
  } 

  dados: any[] = [];
  estagiario;
  senha;

  

}
