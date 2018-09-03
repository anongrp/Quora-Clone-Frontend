import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuestionsComponent} from './questions/questions.component';
import {AnswersComponent} from './answers/answers.component';
import {FeedComponent} from './feed/feed.component';
import {AnswerViewComponent} from './answer-view/answer-view.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full'},
  { path: 'feed', component: FeedComponent},
  { path: 'question', component: QuestionsComponent},
  { path: 'answer', component: AnswersComponent},
  { path: 'feed/answers/:id', component: AnswerViewComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
