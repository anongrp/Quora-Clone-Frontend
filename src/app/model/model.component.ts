import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
})
export class ModelComponent implements OnInit {

  @ViewChild('backdrop') backdrop: ElementRef;
  @ViewChild('model_container') model_container: ElementRef;
  constructor(private modelServ: ModelService) { }

  ngOnInit() {
    this.modelServ.init(this.backdrop, this.model_container);
  }

  hide() {
    this.modelServ.hide();
  }

}
