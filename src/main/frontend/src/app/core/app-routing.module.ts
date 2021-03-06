import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChannelProfileComponent} from './channel-profile/channel-profile.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'app', component: HomeComponent},
  {path: 'app/profile/:id', component: ChannelProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

