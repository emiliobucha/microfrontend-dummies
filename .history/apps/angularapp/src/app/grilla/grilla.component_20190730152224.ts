import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angularapp-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  laoding = true;

  constructor() { }

  ngOnInit() {
  
  }

  setTimeout(() => {
    this.loading = false;
  }, 3500);
}
