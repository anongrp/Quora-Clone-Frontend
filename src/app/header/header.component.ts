import { Component, OnInit } from '@angular/core';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private model: ModelService) { }

  ngOnInit() {
  }

  openModel() {
    this.model.show();
  }
}
