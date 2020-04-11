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
import { PrimaryComponent } from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactComponent } from './contact/contact.component';
import { RecComponent } from './rec/rec.component';
import { RecPrimaryComponent } from './rec/grades/rec-primary/rec-primary.component';
import { RecSecondaryComponent } from './rec/grades/rec-secondary/rec-secondary.component';
import { RecGeneralComponent } from './rec/grades/rec-general/rec-general.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ResourcesComponent } from './resources/resources.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  { path: 'events', component: PrimaryComponent },
  { path: 'mijalis', component: SecondaryComponent },
  {
    path: 'rec', component: RecComponent,
    children: [
      { path: '', component: RecGeneralComponent },
      { path: 'general', component: RecGeneralComponent },
      { path: 'primary', component: RecPrimaryComponent },
      { path: 'secondary', component: RecSecondaryComponent }]
  },
  { path: 'moreinfo', component: MoreinfoComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    SecondaryComponent,
    ContactComponent,
    RecComponent,
    RecPrimaryComponent,
    RecSecondaryComponent,
    RecGeneralComponent,
    MoreinfoComponent,
    ResourcesComponent,
    FaqComponent,
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
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MDBBootstrapModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
