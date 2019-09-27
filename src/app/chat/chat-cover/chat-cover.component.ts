import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-chat-cover',
  templateUrl: './chat-cover.component.html',
  styleUrls: ['./chat-cover.component.css']
})
export class ChatCoverComponent implements OnInit {
  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit() {
    var ctx = this.canvas.nativeElement.getContext('2d');
    var w = this.canvas.nativeElement.width;
    var h = this.canvas.nativeElement.height;
  
  
    var flakes = [];
  
    function snowfall () {
      ctx.clearRect(0, 0, w, h);
      addFlake();
      snow();
    };
  
    function addFlake () {
      var x = Math.ceil(Math.random() * w);
      var s = Math.ceil(Math.random() * 4);
      flakes.push({"x": x, "y": 0, "s": s});
    };
  
    function snow () {
      for (var i = 0; i < flakes.length; i++) {
        var flake = flakes[i];
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.arc(flake.x, flakes[i].y+=flake.s/2, flake.s/2, 0, 2 * Math.PI);
        ctx.fill();
        if(flakes[i].y > h){
          flakes.splice(i, 1);
        }
      };
    };
  
    setInterval(snowfall, 20);
  }

  


  
}
