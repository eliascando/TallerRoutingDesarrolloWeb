import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { EmpresasComponent } from './components/our-clients/empresas/empresas.component';
import { PersonasComponent } from './components/our-clients/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    OurClientsComponent,
    ContactUsComponent,
    QuienesSomosComponent,
    EmpresasComponent,
    PersonasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
