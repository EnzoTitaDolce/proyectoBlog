import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoAreasComponent } from './calculo-areas/calculo-areas.component';
import { EcuacionesDifComponent } from './ecuaciones-dif/ecuaciones-dif.component';
import { IntegralDefinidaComponent } from './integral-definida/integral-definida.component';
import { IntegralIndefinidaComponent } from './integral-indefinida/integral-indefinida.component';
import { MatricesComponent } from './matrices/matrices.component';
import { SistemasEcuacionesComponent } from './sistemas-ecuaciones/sistemas-ecuaciones.component';

const routes: Routes = [
  {path:'intindef', component:IntegralIndefinidaComponent},
  {path:'intdef', component:IntegralDefinidaComponent},
  {path:'calcarea', component:CalculoAreasComponent},
  {path:'ecdif', component:EcuacionesDifComponent},
  {path:'matrices', component:MatricesComponent},
  {path:'sisecu', component:SistemasEcuacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
