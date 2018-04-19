import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from "../../providers/storage/storage";

@Injectable()
export class DadosProvider {
  baseURI: string = "192.168.10.160";

  constructor(public http: HttpClient,
    public storage: StorageProvider) {
  }

  public hideForm: boolean = false;
  despesas(motorista: string,
    idViagem: string,
    despesas: string,
    data: string,
    valor: string,
    opcional?: boolean) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "despesas",
        "idViagem": idViagem,
        "despesas": despesas,
        "motorista": motorista,
        "data": data,
        "valor": valor
      },
      url: any = this.baseURI + "manage-data.php";


    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          // Se a requisição for um sucesso notifique o usuário
          this.hideForm = true;


        },
        (error: any) => {

          if (error.statusText == "OK") {
            console.log(error)
            this.storage.delete(this.storage.chaveDescricaoDespesa);
            this.storage.listaDescricaoDespesa = [];
          } else {

            if (opcional != true) {
              this.storage.adicionarDespesas()
            }
          }

        });
    } catch (error) {
      console.log('catch')
    }

  }
  senha: any[] = ["vazio"];
  login(usuario: string, senha: string) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "usuario": usuario, "senha": senha },
      url: any = this.baseURI + "login.php";


    try {
      console.log
      this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data: any) => {
          console.log(data)
          // Se a requisição for um sucesso notifique o usuário
          this.hideForm = true;
          this.senha = data

        },
        (error: any) => {

          console.log(error)

        });
    } catch (error) {
      console.log('catch')
    }


  }

  abastecimento(
    motorista: string,
    idViagem: string,
    data: string,
    tipoPagamento: string,
    odometro: string,
    litrosBomba1: string,
    litrosBomba2: string,
    posto: string,
    precoAbastecimento: string,
    opcional?: boolean

  ) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "abastecimento",
        "motorista": motorista,
        "idViagem": idViagem,
        "data": data,
        "tipoPagamento": tipoPagamento,
        "odometro": odometro,
        "litrosBomba1": litrosBomba1,
        "litrosBomba2": litrosBomba2,
        "posto": posto,
        "precoAbastecimento": precoAbastecimento,
      },
      url: any = this.baseURI + "manage-data.php";
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        if (error.statusText == "OK") {
          console.log("Inserido com sucesso")
          this.storage.delete(this.storage.chaveAbastecimento);
          this.storage.listaAbastecimento = [];
          console.log(error)
        } else {
          console.log('tratar erros');

          if (opcional != true) {
            this.storage.adicionarAbastecimento()
          }
        }
      });
  }

  arla(
    motorista: string,
    idViagem: string,
    posto: string,
    data: string,
    km: string,
    litros: string,
    preco: string,
    formaPagamento: string,
    opcional?: boolean

  ) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "arla",
        "motorista": motorista,
        "idViagem": idViagem,
        "posto": posto,
        "data": data,
        "km": km,
        "litros": litros,
        "preco": preco,
        "formaPagamento": formaPagamento

      },
      url: any = this.baseURI + "manage-data.php";
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // Se a requisição for um sucesso notifique o usuário
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        console.log(error)
        if (error.statusText == "OK") {
          console.log("Inserido com sucesso")
          this.storage.delete(this.storage.chaveArla);
          this.storage.listaArla = [];
        } else {
          if (opcional != true) {
            this.storage.adicionarArla()
          }
        }
      });
  }



  receitas(
    motorista,
    idViagem,
    fornecedorDestino,
    produto,
    tipoPagmt,
    opcional?: boolean
  ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "receitas",
        "idViagem": idViagem,
        "motorista": motorista,
        "fornecedorDestino": fornecedorDestino,
        "produto": produto,
        "tipoPagmt": tipoPagmt,
      },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // Se a requisição for um sucesso notifique o usuário
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        if (error.statusText == "OK") {
          console.log("Inserido com sucesso")
          this.storage.delete(this.storage.chaveReceitas);
          this.storage.listaReceitas = [];
        } else {
          console.log('tratar erros');
          if (opcional != true) {
            this.storage.adicionarReceitas()
          }
        }
      });
  }




}
