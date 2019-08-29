import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string = "Jéssica";
  cor = "danger";

  humor = "sad";

checked_humor = false;


  constructor() {}

  trocarCor():void{
    console.log('Chamou trocarCor!');
    if (this.cor == "danger") {
    this.cor = "success";
    }
    else if (this.cor == "success") {
      this.cor = "warning";
      }
     else if (this.cor == "warning") {
        this.cor = "primary";
        }
    else{
      this.cor = "danger";
    }
  }
mudaHumor(): void {
  console.log('Chamou mudaHumor!');
  this.checked_humor = !this.checked_humor;
  if (this.checked_humor == true){
    this.humor = "happy";
  }else{
    this.humor = "sad"
  }
}
}