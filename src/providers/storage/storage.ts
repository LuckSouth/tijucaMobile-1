import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component';

@Injectable()
export class StorageProvider {

  page: MyApp;

  arrayAbastecimento = [];
  arrayArla = [];
  arrayDespesas = [];
  arrayReceitas = [];
  arrayRelatorio = [[]];
  arrayLogin = []


  clientes: any = {
    nome: "",
    cnpj: 1,
    limite: 1,
    id: 1
  }

  login: any = {
    id: 0,
    nome: "",
    vendas: 2,
    viagens: 2
  }



  //Dados despesas
  despesas = {
    motorista: "bino",
    id: 1,
    despesas: "",
    dataDespesas: "",
    valorDespesas: ""
  }

  //Dados Receitas
  receitas = {
    motorista: "bino",
    id: 2,
    fornecedorOrigem: "",
    fornecedorDestino: "",
    produto: "",
    tipoPagmt: "",
    idUnidadeMedida: "",
    idUnidadeBandeja: "",
    caixa: "",
    qntFaturado: "",
    qntDescarregado: "",
    valorUnitario: "",
    idSubUnidade: ""
  }


  //Dados arla
  arla = {
    motorista: "bino",
    id: 3,
    dataArla: "",
    postoArla: "",
    km: "",
    litrosArla: "",
    pagArla: "",
    precoArla: "",
  }




  //Dados abastecimento
  abastecimento = {
    motorista: "bino",
    id: 4,
    postoAbastecimento: "",
    dataAbastecimento: "",
    tipoPagmtAbastecimento: "",
    odometro: "",
    litrosBomb1: "",
    litrosBomb2: "",
    precoAbastecimento: "",
  }

  //Recuperar dados 
  listaAbastecimento: any[];
  listaArla: any[];
  listaDescricaoDespesa: any[];
  listaDespesa: any[];
  listaReceitas: any[];
  listaFornecedores: any[];
  listaProdutos: any[];
  listaFormasPagamento: any[];
  listaGeral: any[];
  listaPostos: any[];
  listaClientes: any[];
  listaLogin: any[]


  chaveClientes = "vendasClientes"

  chaveAbastecimento: string = "abastecimento";
  chaveArla: string = "arla";
  chaveDescricaoDespesa: string = "descricaoDespesas";
  chaveDespesa: string = "despesas";
  chaveReceitas: string = "receitas";
  chaveGeral: string = "geral"
  chaveFornecedores: string = "fornecedores";
  chaveProdutos: string = "produtos";
  chaveFormasPagamento: string = "formas_pagamento";
  chavePostos: string = "postos";
  chaveLogin: string = "login"

  constructor(private storage: Storage) {

    this.storage.ready().then(() => {
      this.storage.get(this.chaveClientes).then((registros) => {
        if (registros) { this.listaClientes = registros; } else { this.listaClientes = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveLogin).then((registros) => {
        if (registros) { this.listaLogin = registros; } else { this.listaLogin = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveReceitas).then((registros) => {
        if (registros) { this.listaReceitas = registros; } else { this.listaReceitas = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveDescricaoDespesa).then((registros) => {
        if (registros) { this.listaDescricaoDespesa = registros; } else { this.listaDescricaoDespesa = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveArla).then((registros) => {
        if (registros) { this.listaArla = registros; } else { this.listaArla = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveFornecedores).then((registros) => {
        if (registros) { this.listaFornecedores = registros; } else { this.listaFornecedores = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveProdutos).then((registros) => {
        if (registros) { this.listaProdutos = registros; } else { this.listaProdutos = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveFormasPagamento).then((registros) => {
        if (registros) { this.listaFormasPagamento = registros; } else { this.listaFormasPagamento = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chavePostos).then((registros) => {
        if (registros) { this.listaPostos = registros; } else { this.listaPostos = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveGeral).then((registros) => {
        if (registros) { this.listaGeral = registros; } else { this.listaGeral = []; }
      });
    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveAbastecimento).then((registros) => {
        if (registros) { this.listaAbastecimento = registros; } else { this.listaAbastecimento = []; }
      });
    });


    this.storage.ready().then(() => {
      this.storage.get(this.chaveDespesa).then((registros) => {
        if (registros) { this.listaDespesa = registros; } else { this.listaDespesa = []; }
      });
    });

  }

  // Retorna a lista
  listarArla() {
    return this.listaArla;
  }
  listarGeral() {
    return this.listaGeral;
  }
  listarAbastecimento() {
    return this.listaAbastecimento;
  }
  listarReceitas() {
    return this.listaReceitas;
  }
  listarDespesas() {
    return this.listaDespesa;
  }
  listarClientes() {
    return this.listaClientes
  }
  listarLogin() {
    return this.login
  }



  // Recuperar dados
  listarFornecedores() {
    return this.listaFornecedores;
  }

  listarProdutos() {
    return this.listaProdutos;
  }

  listarFormasPagamento() {
    return this.listaFormasPagamento;
  }

  listarDescricaoDespesa() {
    return this.listaDescricaoDespesa;
  }

  listarPostos() {
    return this.listaPostos;
  }



  /*Retorna tamanho do storage para ser exibido na tela inicial */

  tamanhoAbastecimento() {
    this.arrayAbastecimento = this.listarAbastecimento()
    return this.arrayAbastecimento.length
  }

  tamanhoArla() {
    this.arrayArla = this.listarArla()
    return this.arrayArla.length
  }
  tamanhoDespesas() {
    this.arrayDespesas = this.listarDespesas()
    return this.arrayDespesas.length
  }
  tamanhoReceitas() {
    this.arrayReceitas = this.listarReceitas()
    return this.arrayReceitas.length
  }






  /* Esse metodo provavelmente nunca é chamado, verficar se está sendo usado, caso contrario excluir */
  recuperaTamanho() {
    this.storage.length().then(result => {
      console.log(result)
      return result
    });

  }


  adicionarClientes() {
    this.storage.ready().then(() => {
      this.listaClientes.push(this.clientes);
      this.storage.set(this.chaveClientes, this.listaClientes);
    });
  }

  // Adicionar Despesas
  adicionarDespesas() {
    this.storage.ready().then(() => {
      this.listaDespesa.push(this.despesas);
      this.storage.set(this.chaveDespesa, this.listaDespesa);
    });

  }

  // Adicionar o registro à lista, e persistir ela no BD através do método SET
  adicionarReceitas() {
    this.storage.ready().then(() => {
      this.listaReceitas.push(this.receitas);
      this.storage.set(this.chaveReceitas, this.listaReceitas);
    });
  }
  // Adicionar Arla
  adicionarArla() {
    this.storage.ready().then(() => {
      this.listaArla.push(this.arla);
      this.storage.set(this.chaveArla, this.listaArla);
    });
  }


  adicionarAbastecimento() {
    this.storage.ready().then(() => {
      this.listaAbastecimento.push(this.abastecimento);
      this.storage.set(this.chaveAbastecimento, this.listaAbastecimento);
    });
  }


  // 1º vai ser o "Storage" que quer atualizar -- 2º os "Dados" que vai chegar do formulário
  // Atualizar determinados registros

  atualizarLogin(dados) {
    this.storage.set(this.chaveLogin, dados);
  }

  atualizarPostos(postos) {
    this.storage.set(this.chavePostos, postos);
  }

  atualizarFornecedores(fornecedores) {
    this.storage.set(this.chaveFornecedores, fornecedores);
  }

  atualizarProdutos(produtos) {
    this.storage.set(this.chaveProdutos, produtos);
  }

  atualizarformasPagamento(formasPagamento) {
    this.storage.set(this.chaveFormasPagamento, formasPagamento);
  }

  atualizarDespesas(descricaoDespesas) {
    this.storage.set(this.chaveDescricaoDespesa, descricaoDespesas); // Aqui parece está correto
  }

  atualizarGeral(dados) {
    this.storage.set(this.chaveGeral, dados);
  }

  atualizarClientes(dados) {
    this.storage.set(this.chaveClientes, dados);
  }

  delete(id) {
    return this.storage.remove(id).
      then(() => true)
  }

  retornaLogin(): any {
    this.storage.ready().then(() => {
      this.storage.get(this.chaveLogin).then((registros) => {
        if (registros) { this.listaLogin = registros; } else { this.listaLogin = []; }
      });
    });

      console.log('Atualizado')
  }
 
}
