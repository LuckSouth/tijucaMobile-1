import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados';
import { RecuperarDadosProvider } from "../../../../providers/recuperar-dados/recuperar-dados";

@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})


export class DespesasPage {
  data: void;
  abastecimentoPendente;
  arlaPendente;
  despesasPendente;
  receitasPendente;
  searchQuery: string = '';
  itemsFornecedores: string[];
  itemsFormasPagamento: string[];
  fornecedores;
  itemsDescricaoDespesa: string[];



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider,
    public recuperarDados: RecuperarDadosProvider) {
    this.itemsDescricaoDespesa = this.storageProvider.listarDescricaoDespesa();

    this.recuperarDados.geral()
    this.informacoes = this.storageProvider.listaGeral[0].idMotorista
    storageProvider.despesas.dataDespesas = new Date().toISOString();
      
  }

  informacoes: any[] = [];


  /* Recupera a data atual e converte para o tipo string */


  /* Verifica se o usuário inseriu os dados a todos os campos */
  valida() {
    if (
      //this.storageProvider.despesas.despesas == "" ||  
      this.storageProvider.despesas.valorDespesas == "") {
      return false
    } else {
      return true
    }
  }


  /* Envia os dados para o provider para serem tratados */
  salvar() {
    this.dados.despesas(
      this.storageProvider.listaGeral[0].idMotorista,
      this.storageProvider.listaGeral[0].idViagem,
      this.storageProvider.despesas.despesas,
      this.storageProvider.despesas.dataDespesas,
      this.storageProvider.despesas.valorDespesas
    );
    this.navCtrl.pop();

    let toast = this.toastCtrl.create({
      message: 'Despesa adicionada com sucesso',
      duration: 2000
    });
    toast.present();
  }

}
