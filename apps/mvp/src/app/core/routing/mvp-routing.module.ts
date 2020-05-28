import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MvpLoginComponent } from './../../features/mvp-login/mvp-login.component';

const routes: Routes = [
    { path: 'login', component: MvpLoginComponent },
    {
        path: 'dashboard',
        loadChildren: () => import('./../../features/mvp-dashboard/mvp-dashboard.module').then(m => m.MvpDashboardModule)
    },
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: MvpLoginComponent } // TODO:: PageNotFoundComponent
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class MVPRoutingModule { }