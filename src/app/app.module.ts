import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ComponentsComponent } from './layouts/main-layout/components/components.component';
import { NavbarComponent } from './layouts/main-layout/components/navbar/navbar.component';
import { BannerComponent } from './layouts/main-layout/components/banner/banner.component';
import { FooterComponent } from './layouts/main-layout/components/footer/footer.component';
import { InicioComponent } from './main/inicio/inicio.component';
import { ApoyanosComponent } from './main/apoyanos/apoyanos.component';
import { QuienesomosComponent } from './main/quienesomos/quienesomos.component';
import { UneteComponent } from './main/unete/unete.component';
import { NotfoundComponent } from './main/notfound/notfound.component';
import { HeaderComponent } from './main/inicio/components/header/header.component';
import { InfoComponent } from './main/inicio/components/info/info.component';
import { ExploraComponent } from './main/inicio/components/explora/explora.component';
import { EspeciesComponent } from './main/inicio/components/especies/especies.component';
import { EquipoComponent } from './main/inicio/components/equipo/equipo.component';
import { ContactanosComponent } from './main/contactanos/contactanos.component';
import { FormularioComponent } from './main/contactanos/components/formulario/formulario.component';
import { HeaderContactComponent } from './main/contactanos/components/header-contact/header-contact.component';
import { HeaderQuienesomosComponent } from './main/quienesomos/components/header-quienesomos/header-quienesomos.component';
import { CardsComponent } from './main/quienesomos/components/cards/cards.component';
import { VisionMisionComponent } from './main/quienesomos/components/vision-mision/vision-mision.component';
import { AsesoresComponent } from './main/quienesomos/components/asesores/asesores.component';
import { EntidadesComponent } from './main/quienesomos/components/entidades/entidades.component';
import { HistoriaComponent } from './main/quienesomos/components/historia/historia.component';
import { AprendeComponent } from './main/aprende/aprende.component';
import { NotaComponent } from './main/aprende/components/nota/nota.component';
import { RecursosComponent } from './main/aprende/components/recursos/recursos.component';
import { RecursosInfantilesComponent } from './main/aprende/components/recursos-infantiles/recursos-infantiles.component';
import { NotiblogsComponent } from './main/aprende/components/notiblogs/notiblogs.component';
import { HistoriaSomosComponent } from './main/aprende/components/historia-somos/historia-somos.component';
import { HeaderUneteComponent } from './main/unete/components/header-unete/header-unete.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    MainLayoutComponent,
    ComponentsComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    InicioComponent,
    ApoyanosComponent,
    QuienesomosComponent,
    UneteComponent,
    NotfoundComponent,
    HeaderComponent,
    InfoComponent,
    ExploraComponent,
    EspeciesComponent,
    EquipoComponent,
    ContactanosComponent,
    FormularioComponent,
    HeaderContactComponent,
    HeaderQuienesomosComponent,
    CardsComponent,
    VisionMisionComponent,
    AsesoresComponent,
    EntidadesComponent,
    HistoriaComponent,
    AprendeComponent,
    NotaComponent,
    RecursosComponent,
    RecursosInfantilesComponent,
    NotiblogsComponent,
    HistoriaSomosComponent,
    HeaderUneteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
