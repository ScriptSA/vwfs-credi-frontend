import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SysMsgrComponent } from './shared/sys-msgr/sys-msgr.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule  } from '@angular/common/http';
import { AppConfig, ConfigModule } from './app.config';
import { CustomCapitalizePipe } from './shared/pipes/custom-capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SysMsgrComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],

  providers: [SysMsgrComponent, AppConfig,ConfigModule.init()],
  bootstrap: [AppComponent]
})
export class AppModule { }
