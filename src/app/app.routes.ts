import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProjectsComponent} from './projects/projects.component';

export const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'AboutMe',  component: AboutMeComponent},
  {path:'Projects',   component: ProjectsComponent}
];
