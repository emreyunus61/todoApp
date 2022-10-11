import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

 {
    path : '', component : HomeComponent
 },

 {
   path : 'about', component : AboutComponent
},

//**  böyle bir sayfa yok anlamındna
{
 path : '**', component : NotFoundComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
