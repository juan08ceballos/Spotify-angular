import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { AuthPageComponent } from '@modules/auth/pages/auth-page/auth-page.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


const routes: Routes = [
 {
   path: 'auth', //ruta localhost path
   component: AuthPageComponent,
   loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
 },
 {
  path: '', //ruta localhost path
  component: HomePageComponent,
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  canActivate: [SessionGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
