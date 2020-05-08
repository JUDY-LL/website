import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ProjectComponent } from './project/project.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { ArticleComponent } from './article/article.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { PolicyComponent } from './policy/policy.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ProjectComponent,
    HeadComponent,
    FootComponent,
    ArticleComponent,
    MultiplePipe,
    PolicyComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
