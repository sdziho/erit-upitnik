import { Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    //canActivate
    component: QuestionsComponent,
  },
];
