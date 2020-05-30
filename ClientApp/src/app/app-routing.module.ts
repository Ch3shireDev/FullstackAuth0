import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class AppRoutingModule {}
