import { Component, OnInit } from '@angular/core';

import { Category } from '../../shared/models/category';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  category: Array<Array<Category>>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = this.categoryService.category;
  }

}
 