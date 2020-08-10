import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBoxComponent } from './core/components/public/map-box/map-box.component';
import { AngularFireModule } from '@angular/fire/';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { FormsModule } from '@angular/forms'
import { MapService } from './core/components/public/map.service';

@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirePerformanceModule,
    AngularFireAnalyticsModule,
    FormsModule,
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
