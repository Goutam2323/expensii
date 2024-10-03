import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface Expense {
  category: string;
  description: string;
  price: number;
  receipt: File | null;
}

@Component({
  selector: 'app-expense-log',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-log.component.html',
  styleUrls: ['./expense-log.component.css'],
})
export class ExpenseLogComponent {
  expenseForm: FormGroup;
  newCategoryForm: FormGroup;
  expenses: Expense[] = [];
  totalAmount: number = 0;
  categories: string[] = [
    'Food',
    'Transportation',
    'Entertainment',
    'Groceries',
  ];
  showAddCategory: boolean = false;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      receipt: [null],
    });

    this.newCategoryForm = this.fb.group({
      newCategory: ['', Validators.required],
    });
  }

  addExpense() {
    if (this.expenseForm.valid) {
      const newExpense: Expense = {
        ...this.expenseForm.value,
        receipt: this.expenseForm.get('receipt')?.value || null,
      };
      this.expenses.push(newExpense);
      this.totalAmount += newExpense.price;
      this.expenseForm.reset();
    }
  }

  handleReceiptUpload(event: any) {
    const file = event.target.files[0];
    this.expenseForm.patchValue({ receipt: file });
  }

  toggleAddCategory() {
    this.showAddCategory = !this.showAddCategory;
  }

  addNewCategory() {
    const categoryName = this.newCategoryForm.get('newCategory')?.value;
    if (categoryName) {
      this.categories.push(categoryName);
      this.newCategoryForm.reset(); // Clear the input field
      this.showAddCategory = false; // Hide the category input form
    }
  }

  removeExpense(index: number) {
    this.totalAmount -= this.expenses[index].price;
    this.expenses.splice(index, 1);
  }
}
