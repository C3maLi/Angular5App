import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  categories: Category[];

  getCategories() {
    this.categoryService.getCategories().subscribe(p => {
      this.categories = p;
    });
  }

  ngOnInit() {
    this.getCategories();
  }
}
