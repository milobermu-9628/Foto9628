import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product1, ProductosService} from '../../services/products';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  productList: Product1[] = [];

  constructor(private productsService: ProductosService) {
    this.productList = this.productsService.getProducts();
  }

}
