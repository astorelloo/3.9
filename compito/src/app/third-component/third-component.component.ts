import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { runInThisContext } from 'vm';
@Component({
  selector: 'third-component',
  standalone: true,
  imports: [MatProgressBarModule,MatButtonModule],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
  x: number =0;
  contLike(){
     if(this.x<33){
        return "primary";
     }else if(this.x >=33 && this.x<66){
        return"accent";
     }else{
      return "warn"
     }
  }
  constructor(){
    this.x = Math.floor(Math.random()*100);
    this.contLike();
  }
  clickBottone(){
    this.x = this.x +1;
    this.contLike();
  }

}
