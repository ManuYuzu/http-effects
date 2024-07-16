import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers } from './store/app.reducers';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { EffectsModule } from '@ngrx/effects';
import { EffectsList } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    UsersModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( EffectsList ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
