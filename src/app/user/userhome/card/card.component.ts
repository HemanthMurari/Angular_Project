import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  types = ['All', 'Dairy products', 'Fats, Oils, Shortenings', 'Meat, Poultry', 'Fish, Seafood', 'Vegetables','Fruits','Breads, cereals, fastfood,grains','Soups','Desserts, sweets','Jams, Jellies','Seeds and Nuts','Drinks,Alcohol, Beverages',];
  selected = 'All';
  prodlist: any;
  constructor(ps: ProductService) {
    ps.getProducts().subscribe({
      next: (data: any) => (this.prodlist = data),
      error: () => (this.prodlist = []),
    });
  }

}
