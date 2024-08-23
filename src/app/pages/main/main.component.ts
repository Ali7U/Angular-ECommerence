import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    ModalComponent,
    DialogModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  categories: Category[] = [];
  responsiveOptions: any[] | undefined;
  visible: boolean = false;
  description: string = '';
  stock: string = '';
  public cart: Product[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.categories = res;
    });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }

  showDialog(description: string, stock: string) {
    this.description = description;
    this.stock = stock;
    this.visible = true;
  }
  onModalDismiss() {
    this.visible = false;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

}
