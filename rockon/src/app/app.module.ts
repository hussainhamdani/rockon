import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// App extension
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes} from './resources/app.routes';
import { AppMainDeclarations } from './resources/app.main.declarations';


@NgModule({
  declarations: [
    AppComponent,
    AppMainDeclarations.AddUserAddressComponent,
    AppMainDeclarations.AddUserDetailsComponent,
    AppMainDeclarations.PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
