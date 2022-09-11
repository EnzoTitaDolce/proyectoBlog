import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { IntegralIndefinidaComponent } from './integral-indefinida/integral-indefinida.component';
import { IntegralDefinidaComponent } from './integral-definida/integral-definida.component';
import { CalculoAreasComponent } from './calculo-areas/calculo-areas.component';
import { EcuacionesDifComponent } from './ecuaciones-dif/ecuaciones-dif.component';
import { MatricesComponent } from './matrices/matrices.component';
import { SistemasEcuacionesComponent } from './sistemas-ecuaciones/sistemas-ecuaciones.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavBarComponent,
    FooterComponent,
    IntegralIndefinidaComponent,
    IntegralDefinidaComponent,
    CalculoAreasComponent,
    EcuacionesDifComponent,
    MatricesComponent,
    SistemasEcuacionesComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
