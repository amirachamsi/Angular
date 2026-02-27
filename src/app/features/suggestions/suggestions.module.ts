import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Requis pour 'date' et 'ngClass'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Requis pour 'ngModel'
import { RouterModule } from '@angular/router'; // Requis pour 'routerLink'

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    SuggestionDetailsComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,          
    SuggestionsRoutingModule,
    FormsModule,           
    ReactiveFormsModule,   
    RouterModule           
  ]
})
export class SuggestionsModule { }