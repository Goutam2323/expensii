import { Routes } from '@angular/router';
import { SignInUpComponent } from './components/sign-in-up/sign-in-up.component';
import { ExpenseLogComponent } from './components/expense-log/expense-log.component';
export const routes: Routes = [
  {
    path: 'app-sign-in-up',
    component: SignInUpComponent,
  },
  {
    path: 'app-expense-log',
    component: ExpenseLogComponent,
  },
];
