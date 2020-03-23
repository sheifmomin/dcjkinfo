import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { PrePrimaryComponent } from './pre-primary/pre-primary.component';
import { PrimaryComponent } from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { GeneralComponent } from './general/general.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'primary',
    pathMatch: 'full'
  },
  { path: 'primary', component: PrimaryComponent },
  { path: 'secondary', component: SecondaryComponent },
  { path: 'general', component: GeneralComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PrePrimaryComponent,
    PrimaryComponent,
    SecondaryComponent,
    GeneralComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
