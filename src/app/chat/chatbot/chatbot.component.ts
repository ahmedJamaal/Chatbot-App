import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Chatbot } from './chatbot.model';
import { Router } from '@angular/router';
import { ChattingService } from 'src/app/shared/chatting.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  chatbots: Chatbot[] = [
    new Chatbot("Sophie Cagney","speaker","","./././assets/chatbot/profile1.png"),
    new Chatbot("Jamel Halm","sales representive","","./././assets/chatbot/profile7.png"),
    new Chatbot("Suzann Grossi","customer service","","./././assets/chatbot/girl.png"),
    new Chatbot("John Michael","techincal support","","./././assets/chatbot/profile6.png")
  ];

  @Output() Bot:Chatbot;
  name:string=''
  sex:string=''
  closeResult: string;
  chattingBot:Chatbot;
  constructor(private router:Router ,
    private chattingService:ChattingService ,
    private modalService: NgbModal
    ) {}
 
  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(result==='Save click')
      {
        console.log('Save click');
        this.botWasSelected();
        
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  botWasSelected()
  {

    console.log(this.chattingBot);
    this.chattingService.chatting(this.chattingBot);
  }

  getChatBotData(bot:Chatbot)
  {
    this.chattingBot=bot; 
  }
}


  

