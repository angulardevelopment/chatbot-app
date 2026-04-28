import { Component } from '@angular/core';
import { resource } from "@angular/core";
import { ChatbotComponent } from './chatbot/chatbot.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ChatbotComponent]
})
export class AppComponent {
  ngOnInit(){
 

  }

  async demo(){

const aiResponse = resource({
 loader: async ({ prompt }) => {
   const res = await fetch("/api/ai", {
     method: "POST",
     body: JSON.stringify({ prompt }),
     headers: { "Content-Type": "application/json" }
   });
   return res.json();
 }
});
  }
}
