import { Injectable, Input } from '@angular/core';
import { Chatbot } from '../chat/chatbot/chatbot.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChattingService {
  @Input() chatbot:Chatbot;
  constructor(private router:Router) { }

  getChatbot(){
    return this.chatbot;
  }
  setChatbot(chatbot:Chatbot){
    this.chatbot=chatbot;
  }

  chatting(data:Chatbot)
  {
    
    this.setChatbot(data);
    this.router.navigateByUrl('chat/:'+data.name); 
  }
  welcomeMassage(name:string , sex:string)
  {
    if(sex==='male')
    {
      return 'Hello Mr '+name;
    }
    else
    {
      return 'Hello Mrs '+name;
    }
  }
  replay(input:string)
  {
    return 'hello humman';
  }
}
