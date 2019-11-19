import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosListComponent } from './videos-list/videos-list.component'

// Create the custom url path
const routes: Routes = [
    { path: '', redirectTo:'/videos', pathMatch:'full'} ,
    { path: 'videos', component: VideosListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
