import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './main/inicio/inicio.component';
import { ApoyanosComponent } from './main/apoyanos/apoyanos.component';
import { RecursosComponent } from './main/recursos/recursos.component';
import { QuienesomosComponent } from './main/quienesomos/quienesomos.component';
import { NotfoundComponent } from './main/notfound/notfound.component';
import { UneteComponent } from './main/unete/unete.component';
import { ContactanosComponent } from './main/contactanos/contactanos.component';
import { AprendeComponent } from './main/aprende/aprende.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'apoyanos', component: ApoyanosComponent },
  { path: 'quienesomos', component: QuienesomosComponent },
  { path: 'aprende', component: AprendeComponent },
  { path: 'unete', component: UneteComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
