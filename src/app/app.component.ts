import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoBlog';
  ngOnInit(){
    document.getElementById('barraMenu')!.style.display='none';
  }

  mostrarOcultar(){
     if(document.getElementById('barraMenu')!.style.display=="none")
     {
      document.getElementById('barraMenu')!.style.display="block";
     }
    else
    {{
      document.getElementById('barraMenu')!.style.display="none";
      }}

}
ocultar(){
  document.getElementById('barraMenu')!.style.display="none";
}
}

