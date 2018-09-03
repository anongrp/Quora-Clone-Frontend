import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-answer-view',
  templateUrl: './answer-view.component.html',
  styleUrls: ['./answer-view.component.css']
})
export class AnswerViewComponent implements OnInit {
  data = {
    title: 'Who wrote the google search algorithm?',
    likes: 100,
    time: 'Asked 1 hr ago',
    usrName: 'UserName',
    answers: [
      {
        writerName: 'WriterName',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur assumenda consequuntur, itaque laudantium magnam maxime natus nemo omnis, quod repellat sit voluptate! Ex ipsum, neque perspiciatis quis vero vitae?',
        likes: 100,
        time: '01/01/0000'
      },
      {
        writerName: 'WriterName',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse fugit id magni nesciunt nisi perspiciatis provident recusandae? Asperiores consectetur et explicabo facere officiis optio quos unde. Exercitationem, itaque quae?',
        likes: 200,
        time: '01/01/0000'
      }
    ]
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        console.log(param['id']);
      }
    );
  }

}
