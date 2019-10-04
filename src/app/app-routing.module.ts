import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FaqComponent } from './faq/faq.component';



const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
