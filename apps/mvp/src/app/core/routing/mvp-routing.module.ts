import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MvpLoginComponent } from './../../features/mvp-login/mvp-login.component';
import { AuditLogsComponent } from './../../features/mvp-audit/audit-logs/audit-logs.component';
import { AnomaliesComponent } from './../../features/mvp-anomalies/anomalies/anomalies.component';

const routes: Routes = [
    { path: 'login', component: MvpLoginComponent },
    { path: 'audit', component: AuditLogsComponent },
    { path: 'anomalies', component: AnomaliesComponent },
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