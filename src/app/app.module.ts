import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// AJOUTEZ CETTE LIGNE (pour FormsModule et CommonModule)
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    NavComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,      // AJOUTÉ : Pour le pipe 'date' et 'ngClass'
    AppRoutingModule,
    FormsModule,       // AJOUTÉ : Pour corriger l'erreur [(ngModel)]
    ReactiveFormsModule // GARDÉ : Pour votre userForm
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }