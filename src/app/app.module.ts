import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import {AppRoutesModule} from './app.routes.module';
import {FeedComponent} from './feed/feed.component';
import {AnswersComponent} from './answers/answers.component';
import {QuestionsComponent} from './questions/questions.component';
import {FeedItemComponent} from './feed/feed-item/feed-item.component';
import {AnswerComponent} from './answers/answer/answer.component';
import {QuestionComponent} from './questions/question/question.component';
import {ModelComponent} from './model/model.component';
import {ModelService} from './model.service';
import {AnswerViewComponent} from './answer-view/answer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    AnswersComponent,
    AnswerComponent,
    QuestionsComponent,
    QuestionComponent,
    FeedItemComponent,
    ModelComponent,
    AnswerViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
