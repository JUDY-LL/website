import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {ContentComponent} from './content/content.component';
import { ArticleComponent } from './article/article.component';
import { PolicyComponent } from './policy/policy.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {path: '', redirectTo: '/project', pathMatch: 'full'},
  {path: 'project', component: ProjectComponent},
  {path: 'content', component: ContentComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'plan', component: PlanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
