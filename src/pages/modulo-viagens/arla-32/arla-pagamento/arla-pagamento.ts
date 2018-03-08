import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from '../../../../providers/dados/dados';
import { FotoServicoProvider } from '../../../../providers/foto-servico/foto-servico'; 


@IonicPage()
@Component({
  selector: 'arla-pagamento-page',
  templateUrl: 'arla-pagamento.html',
})
export class ArlaPagamentoPage {

  searchQuery: string = '';

  itemsPostos: string[];
  itemsFormasPagamento: string[];
  itemsFornecedores: string[]; 

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public dados: DadosProvider,
    public foto: FotoServicoProvider,
    public storageProvider: StorageProvider) {
 
      this.itemsFormasPagamento = this.storageProvider.listarFormasPagamento();
      this.itemsFornecedores = this.storageProvider.listarFornecedores();
 
  } 
  /* Recupera a data atual e converte para o tipo string */

  Data: string = new Date().toISOString();


  /* Verifica se o usuário inseriu os dados a todos os campos */
  valida() {

    if (
      //this.storageProvider.arla.tipoArla == "" ||
      this.storageProvider.arla.postoArla == "" ||
      this.storageProvider.arla.pagArla == "" ||
      this.storageProvider.arla.precoArla == "" ||
      this.storageProvider.arla.odometroArla == "" ||
      this.storageProvider.arla.litrosArla == ""
      //this.storageProvider.arla.Data == ""
    ) {
      return false;
    } else {
      return true;
    }
  }
  
  /* Envia os dados para o provider para serem tratados */
  salvar() {
    this.dados.arla(
      this.storageProvider.arla.motorista,
      this.storageProvider.arla.litrosArla,
      this.storageProvider.arla.litrosPrecoArla,
      this.storageProvider.arla.precoArla,
      this.storageProvider.arla.tipoArla,
      this.storageProvider.arla.postoArla,
      this.storageProvider.arla.dataArla,
      this.storageProvider.arla.km
    )
    this.navCtrl.pop(); 
    let toast = this.toastCtrl.create({
      message: 'Arla adicionada com sucesso',
      duration: 2000
    });
    toast.present();
  }
  /* Executa a função de Fotografar */
  mostrar() {
    this.foto.getFoto('picture');
  }

}
