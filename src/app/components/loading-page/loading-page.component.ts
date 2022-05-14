import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit, AfterViewChecked {



  constructor(private router: Router) { }
  ngAfterViewChecked(): void {
    interval
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
      let interval =
      setInterval(function(){
        clearInterval(interval);
        this.router.navigate(['/editar']);

      },3000); 

  }

}
