import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// App extension
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes} from './resources/app.routes';
import { AppMainDeclarations } from './resources/app.main.declarations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewDetailsComponent } from './resources/main-components/review-details/review-details.component';
import { UserStoreActionsService } from './services/actions/user-store.actions.service';


@NgModule({
  declarations: [
    AppComponent,
    AppMainDeclarations.UserAddressComponent,
    AppMainDeclarations.UserDetailsComponent,
    AppMainDeclarations.PageNotFoundComponent,
    ReviewDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ UserStoreActionsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
