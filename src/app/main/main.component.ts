import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  showPopup: boolean = false;

  constructor(
    private router: Router, 
    ) {

  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = this.showPopup;
  }
  redirectToLoginPage(){
    console.log('logging out...')
  }

 
}
