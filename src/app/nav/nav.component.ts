import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainComponent } from '../main/main.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  
})
export class NavComponent implements OnInit {

  constructor( private route: ActivatedRoute, ) { 
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.route = params['app-main'];
    });
  }
}
