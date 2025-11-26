import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-collapse',
  imports: [],
  templateUrl: './collapse.html',
  styleUrl: './collapse.css',
})
export class Collapse {

  isShown = signal(false)

  toggleIsShown(){

    this.isShown.set(!this.isShown())

  }

  

}
