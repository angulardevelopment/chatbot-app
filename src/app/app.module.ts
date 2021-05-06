import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessageFormComponent, MessageItemComponent, MessageListComponent } from './chatbot/components';
import { DialogflowService } from './chatbot/services';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DialogflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
