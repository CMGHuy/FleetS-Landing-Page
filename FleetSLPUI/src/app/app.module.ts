import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule} from "@angular/material/expansion";
import { MatInputModule} from "@angular/material/input";
import { MatDialogModule} from "@angular/material/dialog";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChlLandingPageComponent } from './chl-landing-page/chl-landing-page.component';
import { IfuLandingPageComponent } from './ifu-landing-page/ifu-landing-page.component';
import { ReplacePipe } from './chl-landing-page/replace.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatIconModule } from "@angular/material/icon";
import { LoaderUploadFileComponent } from './loader-upload-file/loader-upload-file.component';
import { BlockPageComponent } from './block-page/block-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChlLandingPageComponent,
    IfuLandingPageComponent,
    ReplacePipe,
    ExpansionPanelComponent,
    AlertDialogComponent,
    LoaderUploadFileComponent,
    BlockPageComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    ClipboardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent]
})

export class AppModule { }
