import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../../shared/models/category';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.less']
})
export class CategoryPageComponent implements OnInit {

    @Input() categoryIcon: Category;
  constructor() { }

  ngOnInit() {
  }

}
 