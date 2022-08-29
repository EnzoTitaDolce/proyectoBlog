import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-integral-definida',
  templateUrl: './integral-definida.component.html',
  styleUrls: ['./integral-definida.component.css']
})
export class IntegralDefinidaComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
   
  }

  deshabilitarClick(){
    document.oncontextmenu=ev=>{
      ev.preventDefault();
      alert("No se permite el click derecho");
    }
  }

}


