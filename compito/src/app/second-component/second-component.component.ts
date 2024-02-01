import { Component } from '@angular/core';
import { ThirdComponentComponent } from '../third-component/third-component.component';
import { FourthComponentComponent } from '../fourth-component/fourth-component.component';

@Component({
  selector: 'second-component',
  standalone: true,
  imports: [ThirdComponentComponent, FourthComponentComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  Nome=["Nome1","Nome2"]
  Descrizione =[" descrizione1", "descrizione2"]
}
