import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-language-selector';

  ngOnInit() {
    console.log(VERSION);
  }
}
