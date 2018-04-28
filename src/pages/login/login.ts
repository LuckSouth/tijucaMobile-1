import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Storage } from '@ionic/storage/es2015/storage';
import { StorageProvider } from '../../providers/storage/storage';
import { DadosProvider } from "../../providers/dados/dados";
import { AlertController } from 'ionic-angular';
import { VendasPage } from '../modulo-vendas/vendas/vendas';

import { EnviarProvider } from "../../providers/enviar/enviar";
import { RecuperarDadosProvider } from '../../providers/recuperar-dados/recuperar-dados';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PrincipalPage } from '../principal/principal/principal';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  data: void;
  abastecimentoPendente;
  arlaPendente;
  despesasPendente;
  receitasPendente;

  searchQuery: string = '';
  itemsFornecedores: string[];
  itemsProdutos: string[];
  itemsFormasPagamento: string[];
  itemsPostos: string[];
  fornecedores;


  public itens: Array<any> = [];


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public http: HttpClient,
    public dados: DadosProvider,
    public enviar: EnviarProvider,
    public alert: AlertController,
    public recuperarDados: RecuperarDadosProvider,
    public alertCtrl: AlertController
  ) {
    // this.recuperarDados.fornecedores('nome', 'produtos');
    // this.recuperarDados.produtos('nome', 'produtos');
    // this.recuperarDados.formasPagamento('nome', 'produtos');
    // this.recuperarDados.geral();
    // this.recuperarDados.despesas('nome', 'produtos');
    // this.recuperarDados.postos();
    // this.recuperarDados.AtualizaClientes();
  }
  // senha = 'a';

  // logado(usuario, senha) {   

  //   return new Promise((resolve, reject) => {

  //     this.dados.login(usuario, senha)
  //     this.a = this.dados.senha
  //     if (this.a[0].senha == this.senha) {
  //       this.arlaPendente = this.storageProvider.tamanhoArla();
  //       this.abastecimentoPendente = this.storageProvider.tamanhoAbastecimento();
  //       this.despesasPendente = this.storageProvider.tamanhoDespesas();
  //       this.receitasPendente = this.storageProvider.tamanhoReceitas();
  //       this.enviar.enviar();

  //         this.itemsFornecedores = this.storageProvider.listarFornecedores();
  //         this.fornecedores = this.itemsFornecedores;  
  //         this.viagensPage()


  //     }
  //     if(this.a[0].senha != this.senha){
  //       console.log("Didn't work")

  //   this.arlaPendente = this.storageProvider.tamanhoArla();
  //   this.abastecimentoPendente = this.storageProvider.tamanhoAbastecimento();
  //   this.despesasPendente = this.storageProvider.tamanhoDespesas();
  //   this.receitasPendente = this.storageProvider.tamanhoReceitas();
  //   this.enviar.enviar();

  //     }
  //   })
  // }

  private baseURI: string = "http://192.168.10.160/";
  public hideForm: boolean = false;

  erroLogin() {
    let alerta = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi possivel logar no momento, favor teste sua conexão ou tente mais tarde',
      buttons: ['Ok']
    });
    alerta.present();
  }

  loginCorreto(dados) {

    let alerta = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Login realizado com sucesso',
      buttons: ['Ok']
    });
    alerta.present();

    this.storageProvider.atualizarLogin(dados)

    if (this.storageProvider.listaLogin[0].viagens == 1) {
      this.recuperarDados.fornecedores('nome', 'produtos');
      this.recuperarDados.produtos('nome', 'produtos');
      this.recuperarDados.formasPagamento('nome', 'produtos');
      this.recuperarDados.geral();
      this.recuperarDados.despesas('nome', 'produtos');
      this.recuperarDados.postos();
    }

    if (this.storageProvider.listaLogin[0].vendas == 1) {

      this.recuperarDados.AtualizaClientes();
    }

    this.storageProvider.retornaLogin()
    this.navCtrl.push(PrincipalPage)

  }

  verificarLogin(usuario, senha) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "usuario": usuario,
        "senha": senha,
      },
      url: any = this.baseURI + "login.php";


    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {

          console.log(data)
          try {

            console.log(data[0].nomeValidado)

            if (data[0].nomeValidado == true) {
              if (data[0].senhaValidada == true) {
                this.loginCorreto(data)
                console.log(this.storageProvider.listaLogin[0].viagens)
              } else {

                  let alerta = this.alertCtrl.create({
                    title: 'Falha',
                    subTitle: 'Senha incorreta',
                    buttons: ['Ok']
                  });
                  alerta.present();
              }

            } else {
              let alerta = this.alertCtrl.create({
                title: 'Falha',
                subTitle: 'Verifique o nome de usuário',
                buttons: ['Ok']
              });
              alerta.present();
            }

            // if (data.real[0].senha == data.suposto) {
            //   this.loginCorreto(data.real)
            // } else {
            //   let alerta = this.alertCtrl.create({
            //     title: 'Falha',
            //     subTitle: 'Senha incorreta',
            //     buttons: ['Ok']
            //   });
            //   alerta.present();
            // }

            this.hideForm = true;
          } catch (error) {

            console.log(error)

            // let alerta = this.alertCtrl.create({
            //   title: 'Falha',
            //   subTitle: 'Verifique o nome de usuário',
            //   buttons: ['Ok']
            // });
            // alerta.present();

          }
        },
          (error: any) => {
            console.log(error)
            this.erroLogin()

          });
    }
    catch (error) {
      console.log('catch')
      this.erroLogin()

    }
  }





}

