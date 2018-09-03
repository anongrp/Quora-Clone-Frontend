import {Component, OnInit} from '@angular/core';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit{
   data = {
    title: 'Who wrote the google search algorithm?',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earumodit voluptas\n' +
      '    eveniet in est aperiam, natus architecto illo ad vitae, aliquam nostrum? Minima,eius quae. Lorem ipsum, dolor sit\n' +
      '    amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earum odit voluptas eveniet in est aperiam,\n' +
      '    natus architecto illo ad vitae, aliquamnostrum? Minima, eius quae.',
    likes: 100,
    time: 'Asked 1 hr ago',
    usrName: 'UserName'
  };

   constructor(private model: ModelService) {

   }

  ngOnInit() {

  }

  openModel() {
    this.model.show();
  }
}
