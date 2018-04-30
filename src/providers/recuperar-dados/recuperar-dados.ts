import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from '../../providers/storage/storage';
import { SERVIDOR } from "../../util";


@Injectable()
export class RecuperarDadosProvider {

  public hideForm: boolean = false;

  constructor(
    public http: HttpClient,
    public storageProvider: StorageProvider) {
  }

  AtualizaClientes(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "id": this.storageProvider.listaLogin[0].id
      },
      url: any = SERVIDOR + "vendas-clientes.php";

    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarClientes(data);
          this.hideForm = true;
          console.log(data)
        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }


  postos(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {},
      url: any = SERVIDOR + "postos-combustiveis.php";

    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarPostos(data);
          this.hideForm = true;
        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }


  fornecedores(atributo: string, tabela: string, ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
      },
      url: any = SERVIDOR + "fornecedores.php";


    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarFornecedores(data);
          this.hideForm = true;
        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }

  dados = [];
  geral() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
      },
      url: any = SERVIDOR + "geral.php";


    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarGeral(data);
          this.hideForm = true;
        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }
  }





  produtos(atributo: string, tabela: string, ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "atributo": atributo,
        "tabela": tabela
      },
      url: any = SERVIDOR + "produtos.php";

    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarProdutos(data);
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;


        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }

  formasPagamento(atributo: string, tabela: string, ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "atributo": atributo,
        "tabela": tabela
      },
      url: any = SERVIDOR + "formas-pagamento.php";

    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarformasPagamento(data);
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;


        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }


  despesas(atributo: string, tabela: string, ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "atributo": atributo,
        "tabela": tabela
      },
      url: any = SERVIDOR + "despesas.php";

    try {
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          this.storageProvider.atualizarDespesas(data);
          // If the request was successful notify the user
          // console.log(data)
          this.hideForm = true;


        },
        (error: any) => {
          console.log(error);

        });
    } catch (error) {
      console.log('catch')
    }

  }
}
