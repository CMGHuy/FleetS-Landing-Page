import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfuLandingPageComponent } from "./ifu-landing-page/ifu-landing-page.component";
import { ChlLandingPageComponent } from "./chl-landing-page/chl-landing-page.component";
import { BlockPageComponent } from "./block-page/block-page.component";

const routes: Routes = [
  { path: 'ifu-landing-page', component: IfuLandingPageComponent },
  { path: 'chl-landing-page', component: ChlLandingPageComponent },
  { path: 'block-page',       component: BlockPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
