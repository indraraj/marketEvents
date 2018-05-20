import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LandingComponentComponent } from './components/landing-component/landing-component.component';
import { IncidentComponentComponent } from './components/incident-component/incident-component.component';
import { DetailComponentComponent } from './components/detail-component/detail-component.component';

const appRoutes: Routes = [
    { path: 'home', component: LandingComponentComponent },
    { path: 'incident', component: IncidentComponentComponent },
    { path: 'detail', component: DetailComponentComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes,
      { enableTracing: true }) ],
    exports: [
        RouterModule
     ]
  })
  export class RoutingModule {}
