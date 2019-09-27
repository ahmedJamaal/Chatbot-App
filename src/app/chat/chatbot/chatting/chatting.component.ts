import { Component, OnInit, Input, EventEmitter, Output, Renderer2, ElementRef } from '@angular/core';
import { Chatbot } from '../chatbot.model';
import { Router } from '@angular/router';
import { ChattingService } from 'src/app/shared/chatting.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {
  user=[
    {imagePath:"././assets/users/user(3).png"},
    {imagePath:"././assets/users/user(4).png"}
  ];
  massage:string=''
  chat:string;
  event=new EventEmitter<Chatbot>();
  bot:Chatbot;

 constructor(private element: ElementRef ,
            private renderer: Renderer2 ,
            private chattingService:ChattingService) {
    
  }
  ngOnInit() {
    this.bot=this.chattingService.getChatbot();
    
    
  }
  chatting()
  {
    if(this.massage != '')
    {
    const elem=this.element.nativeElement.querySelector('.conversation');
    
    const p = this.renderer.createElement('p');
    const li = this.renderer.createElement('li');
    const img=this.renderer.createElement('img');
    
    this.renderer.setAttribute(img,"src",this.user[0].imagePath);

    this.renderer.appendChild(li,img);
   this.renderer.appendChild(li,p);
    this.renderer.addClass(li,'sent');
   
    const text = this.renderer.createText(this.massage);
   
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(elem, li);
    this.replaying(this.massage);
    this.massage='';
    }
  }
  replaying(massageInput:string)
  {
    
    var replayMassage=this.chattingService.replay(massageInput);
    const elem=this.element.nativeElement.querySelector('.conversation');
    
    const p = this.renderer.createElement('p');
    const li = this.renderer.createElement('li');
    const img=this.renderer.createElement('img');
    
    this.renderer.setAttribute(img,"src",this.bot.imagePath);

    this.renderer.appendChild(li,img);
   this.renderer.appendChild(li,p);
    this.renderer.addClass(li,'replies');
   
    const text = this.renderer.createText(replayMassage);
   
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(elem, li);

  }
 
}
