import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { EmpresasComponent } from './components/our-clients/empresas/empresas.component';
import { PersonasComponent } from './components/our-clients/personas/personas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-clients', component: OurClientsComponent, 
    children: [
      { path: 'empresas', component: EmpresasComponent },
      { path: 'personas', component: PersonasComponent }
    ]
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: QuienesSomosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }