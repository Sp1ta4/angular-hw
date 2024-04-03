import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports:[CommonModule]
})
export class ProductComponent {
  @Input() product: IProduct;

  isOpen = false;
  toggleText(): void {
    this.isOpen = !this.isOpen;
  }
}
