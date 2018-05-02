import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation'; 

import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { MyApp } from './app.component'; 

import { PrincipalPage } from '../pages/principal/principal/principal';
import { ViagensPage } from '../pages/modulo-viagens/viagens/viagens';
import { VendasPage } from '../pages/modulo-vendas/vendas/vendas';
import { ReceitasPage } from '../pages/modulo-viagens/receitas/receitas/receitas';

import { GeralPage } from '../pages/modulo-viagens/geral/geral-page/geral-page';
import { GeralDadosViagemPage } from '../pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem';
import { GeralDadosMotoristaPage } from '../pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista';
import { DespesasPage } from '../pages/modulo-viagens/despesas/despesas/despesas';

import { AbastecimentoPagamentoPage } from '../pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento';
import { AbastecimentoBombasPage } from '../pages/modulo-viagens/abastecimento/abastecimento-bombas/abastecimento-bombas';
import { RotasAbastecimentoPage } from '../pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento';
 
import { RelatoriosPage } from '../pages/modulo-viagens/relatorios/relatorios-page/relatorios';
import { ReceitasRelatoriosPage } from '../pages/modulo-viagens/relatorios/receitas-relatorios/receitas-relatorios';
import { DespesasRelatoriosPage } from '../pages/modulo-viagens/relatorios/despesas-relatorios/despesas-relatorios';
import { AbastecimentoRelatoriosPage } from '../pages/modulo-viagens/relatorios/abastecimento-relatorios/abastecimento-relatorios';
import { ArlaRelatoriosPage } from '../pages/modulo-viagens/relatorios/arla-relatorios/arla-relatorios';

import { ArlaPagamentoPage } from '../pages/modulo-viagens/arla-32/arla-pagamento/arla-pagamento'; 
 
import { Camera } from "@ionic-native/camera";
import { FotoServicoProvider } from '../providers/foto-servico/foto-servico';
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers/storage/storage'
import { DadosProvider } from '../providers/dados/dados';
import { HttpClient, HttpClientModule } from "@angular/common/http"; 
 
import { EnviarProvider } from '../providers/enviar/enviar';

import { BrMaskerModule } from 'brmasker-ionic-3'; 
import { LoginPage } from '../pages/login/login';
import { RecuperarDadosProvider } from '../providers/recuperar-dados/recuperar-dados';
import { ClientesPage } from '../pages/modulo-vendas/clientes/clientes';
import { ProdutosPage } from '../pages/modulo-vendas/produtos/produtos';
import { PesquisasPage } from '../pages/modulo-vendas/pesquisas/pesquisas';
import { SincronizarPage } from '../pages/modulo-vendas/sincronizar/sincronizar';
import { PedidosPage } from '../pages/modulo-vendas/pedidos/pedidos';
import { TabelasPage } from '../pages/modulo-vendas/tabelas/tabelas';
import { SubprodutosPage } from '../pages/modulo-vendas/pesquisas/subpesquisas/subprodutos/subprodutos';
import { SupermercadosPage } from '../pages/modulo-vendas/pesquisas/subpesquisas/supermercados/supermercados';
import { FinanceiroPage } from '../pages/modulo-vendas/clientes/venda/financeiro/financeiro';
import { PedidoPage } from '../pages/modulo-vendas/clientes/venda/pedido/pedido';
import { InformacoesPage } from '../pages/modulo-vendas/clientes/venda/informacoes/informacoes';
import { DetalhePage } from '../pages/modulo-vendas/pedidos/visualizar/detalhe/detalhe';
@NgModule({ 
  declarations: [
    MyApp, 
    PrincipalPage,
    ViagensPage,
    VendasPage,
    ReceitasPage,  
    DespesasPage,
    GeralPage,
    AbastecimentoPagamentoPage,  
    AbastecimentoBombasPage,
    RotasAbastecimentoPage, 
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagamentoPage,
    RelatoriosPage,
    DespesasRelatoriosPage,
    ReceitasRelatoriosPage,
    ArlaRelatoriosPage,
    AbastecimentoRelatoriosPage, 
    LoginPage,
    ClientesPage, 
    PedidosPage,
    PesquisasPage,
    ProdutosPage, 
    SincronizarPage, 
    SubprodutosPage,
    SupermercadosPage,
    FinanceiroPage,
    PedidoPage,
    InformacoesPage,
    TabelasPage,
    DetalhePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CustomFormsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrMaskerModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    PrincipalPage,
    ViagensPage,
    VendasPage,
    ReceitasPage,  
    DespesasPage,
    GeralPage,
    AbastecimentoPagamentoPage,  
    RotasAbastecimentoPage,
    AbastecimentoBombasPage, 
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagamentoPage,
    RelatoriosPage,
    DespesasRelatoriosPage,
    ReceitasRelatoriosPage,
    ArlaRelatoriosPage,
    AbastecimentoRelatoriosPage, 
    LoginPage,
    ClientesPage, 
    PedidosPage,
    PesquisasPage,
    ProdutosPage, 
    SincronizarPage, 
    SubprodutosPage,
    SupermercadosPage,
    FinanceiroPage,
    PedidoPage,
    InformacoesPage,
    TabelasPage,
    DetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FotoServicoProvider,
    ScreenOrientation,
    StorageProvider,
    DadosProvider,
    HttpClient, 
    EnviarProvider,
    RecuperarDadosProvider
  ]
})
export class AppModule { }