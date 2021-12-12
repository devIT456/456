import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OneComponent } from './one/one.component';
import { PhraseComponent } from './phrase/phrase.component';
import { UnComponent } from './un/un.component';
import { ZeroComponent } from './zero/zero.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'one',component:OneComponent},
  {path:'redirect',redirectTo:'',pathMatch:'full'},
  {path:'array',children:[
		{path:'0',component:ZeroComponent},
		{path:'1',component:UnComponent},
	]},
  {path:'profil/:integer/:string',component:PhraseComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
