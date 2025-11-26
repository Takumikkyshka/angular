import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-collapse',
  imports: [],
  templateUrl: './collapse.html',
  styleUrl: './collapse.css',
})
export class Collapse {

  isShown = signal(false)

  @Input({required: true}) title?: string
  @Input({required: true}) text?: string
  toggleIsShown(){

    this.isShown.set(!this.isShown())

  }

  

}
