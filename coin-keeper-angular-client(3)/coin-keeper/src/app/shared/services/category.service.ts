import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category = [
    [{ id: 1, name: 'Income', icon: 'https://img.icons8.com/ios/50/000000/money-bag-filled.png', amount: '500', currency: 'UAH' }],
    [{ id: 2, name: 'Cash', icon: 'https://img.icons8.com/office/50/000000/money.png', amount: '500', currency: 'UAH' }, 
     { id: 3, name: 'Bank', icon: 'https://img.icons8.com/office/50/000000/money.png', amount: '0', currency: 'UAH' }],
    [{ id: 4, name: 'Food', icon: 'https://img.icons8.com/ios/50/000000/hamburger.png', amount: '50', currency: 'UAH' }, 
     { id: 5, name: 'Transport', icon: 'https://img.icons8.com/ultraviolet/50/000000/tour-bus.png', amount: '20', currency: 'UAH' }]
  ];

}
