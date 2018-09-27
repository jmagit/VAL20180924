import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent } from './personas/personas.component';
import { BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent } from './blog/blog.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'inicio', component: HomeComponent},
  {path: 'demos', component: DemosComponent},
  {path: 'chisme/de/hacer/numeros', component: CalculadoraComponent},
  {path: 'personas', component: PersonasListComponent},
  {path: 'personas/add', component: PersonasAddComponent},
  {path: 'personas/:id/edit', component: PersonasEditComponent},
  {path: 'personas/:id', component: PersonasViewComponent},
  {path: 'personas/:id/:kk', component: PersonasViewComponent},
  {path: 'pepito/grillo', redirectTo: '/personas/2/pepito-grillo'},
  {path: 'blog', children: [
    {path: '', component: BlogListComponent},
    {path: 'add', component: BlogAddComponent},
    {path: ':id/edit', component: BlogEditComponent},
    {path: ':id', component: BlogViewComponent},
    {path: ':id/:kk', component: BlogViewComponent},
    ]},
  {path: 'config', loadChildren: './configuracion/configuracion.module#ConfiguracionModule'},
  {path: '404.html', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent},
];
