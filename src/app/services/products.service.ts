import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Product } from '../interfaces/products'; // Adjust the path if needed
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Category[]> {
    const categories: any[] = [
      {
        id: 1,
        name: 'Electronics',
        products: [
          {
            id: 101,
            name: 'Smartphone',
            description: 'High-end smartphone with advanced features.',
            price: 799.99,
            stock: 50,
            images: [
              'https://images.unsplash.com/photo-1519619091416-f5d7e5200702?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
            variants: [
              {
                color: 'Black',
                storage: '128GB',
                price: 799.99,
                sku: 'SPH128-BLK',
              },
            ],
            specifications: {
              display: '6.5 inch OLED',
              battery: '4000mAh',
            },
          },
          {
            id: 102,
            name: 'Laptop',
            description: 'Lightweight laptop with high performance.',
            price: 1299.99,
            stock: 30,
            images: [
              'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
            variants: [
              {
                color: 'Silver',
                storage: '512GB SSD',
                price: 1299.99,
                sku: 'LAP512-SLV',
              },
            ],
            specifications: {
              display: '14 inch Retina',
              battery: '10 hours',
            },
          },
        ],
      },
      {
        id: 2,
        name: 'Home Appliances',
        products: [
          {
            id: 201,
            name: 'Refrigerator',
            description: 'Double-door refrigerator with inverter technology.',
            price: 899.99,
            stock: 20,
            images: [
              'https://images.unsplash.com/photo-1716193696093-9c54b6a290e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmVmcmlnZXJhdG9yfGVufDB8fDB8fHww',
            ],
            variants: [
              {
                color: 'Silver',
                capacity: '300L',
                price: 899.99,
                sku: 'REF300-SLV',
              },
            ],
            specifications: {
              energyRating: '5 Star',
              warranty: '10 years',
            },
          },
          {
            id: 202,
            name: 'Washing Machine',
            description: 'Front-load washing machine with smart features.',
            price: 749.99,
            stock: 15,
            images: [
              'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D',
            ],
            variants: [
              {
                capacity: '7kg',
                price: 749.99,
                sku: 'WM7KG',
              },
            ],
            specifications: {
              spinSpeed: '1200 RPM',
              energyRating: '4 Star',
            },
          },
        ],
      },
      {
        id: 3,
        name: 'Video Games',
        products: [
          {
            id: 301,
            name: 'Playstation 5',
            description:
              'Open-world action-adventure game with immersive storyline.',
            price: 559.99,
            stock: 100,
            images: [
              'https://images.unsplash.com/photo-1709587797077-7a2c94411514?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
            variants: [
              {
                platform: 'PlayStation 5',
                price: 559.99,
                sku: 'AAG-PS5',
              },
            ],
            specifications: {
              genre: 'Action-Adventure',
              releaseDate: '2023-11-10',
              rating: 'Mature',
            },
          },
          {
            id: 302,
            name: 'Xbox series s',
            description:
              'Realistic sports simulation game with multiplayer support.',
            price: 449.99,
            stock: 75,
            images: [
              'https://images.unsplash.com/photo-1604586362304-e75dda43b915?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHx4Ym94fGVufDB8fDB8fHww',
            ],
            variants: [
              {
                platform: 'Xbox series s',
                price: 449.99,
                sku: 'SG-PS5',
              },
            ],
            specifications: {
              genre: 'Sports',
              releaseDate: '2024-01-15',
              rating: 'Everyone',
            },
          },
        ],
      },
      {
        id: 4,
        name: 'Sports',
        products: [
          {
            id: 401,
            name: 'ball',
            description:
              'High-quality football for professional and recreational use.',
            price: 29.99,
            stock: 100,
            images: [
              'https://plus.unsplash.com/premium_photo-1714573001991-d428d7d8822d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb3RiYWxsc3xlbnwwfHwwfHx8MA%3D%3Dg',
            ],
            variants: [
              {
                size: 'Size 5',
                price: 29.99,
                sku: 'FB-S5',
              },
              {
                size: 'Size 4',
                price: 24.99,
                sku: 'FB-S4',
              },
            ],
            specifications: {
              material: 'Synthetic Leather',
              weight: '410-450 grams',
            },
          },
          {
            id: 402,
            name: 'Basketball',
            description:
              'Durable basketball suitable for indoor and outdoor play.',
            price: 39.99,
            stock: 80,
            images: [
              'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D',
            ],
            variants: [
              {
                size: '7',
                price: 39.99,
                sku: 'BK-S7',
              },
              {
                size: '6',
                price: 34.99,
                sku: 'BK-S6',
              },
            ],
            specifications: {
              material: 'Rubber',
              weight: '567-650 grams',
            },
          },
        ],
      },
      {
        id: 5,
        name: 'Sports & Outdoors',
        products: [
          {
            id: 501,
            name: 'Running Shoes',
            description:
              'Lightweight running shoes with excellent cushioning and support.',
            price: 79.99,
            stock: 60,
            images: [
              'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzJTIwcnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D',
            ],
            variants: [
              {
                color: 'Black',
                size: '10',
                price: 79.99,
                sku: 'RS-BLK-10',
              },
              {
                color: 'White',
                size: '11',
                price: 84.99,
                sku: 'RS-WHT-11',
              },
            ],
            specifications: {
              material: 'Mesh and Synthetic',
              sole: 'Rubber',
              weight: '250 grams per shoe',
            },
          },
          {
            id: 502,
            name: 'Tent',
            description: 'Durable and waterproof tent suitable for camping.',
            price: 149.99,
            stock: 25,
            images: [
              'https://images.unsplash.com/photo-1546747646-5a738a5e1e7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlbnR8ZW58MHx8MHx8fDA%3D',
            ],
            variants: [
              {
                capacity: '4-person',
                price: 149.99,
                sku: 'TENT4',
              },
            ],
            specifications: {
              material: 'Polyester',
              weight: '2.5 kg',
            },
          },
        ],
      },
    ];

    return of(categories); // Return an Observable with the static data
  }

  flattenProducts(data: { categories: Category[] }): Product[] {
    return data.categories.flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        categoryId: category.id,
        categoryName: category.name,
      }))
    );
  }
}
