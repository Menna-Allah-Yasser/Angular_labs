import { Component } from '@angular/core';

interface Product {
  id: number;
  title: string;
  stock: number;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone:false
})
export class Products {

  products: Product[] = [
  {
    id: 1,
    title: 'iPhone 15 Pro',
    stock: 25,
    category: 'Electronics',
    price: 999,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24',
    stock: 18,
    category: 'Electronics',
    price: 899,
    image: 'https://images.samsung.com/is/image/samsung/assets/global/galaxy-s24/gallery/galaxy-s24-5g-phantom-black.png'
  },
  {
    id: 3,
    title: 'Nike Air Max',
    stock: 50,
    category: 'Shoes',
    price: 120,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/0a2c64db-ec9e-4fe3-b3a2-f5db13cf0bc0/nike-air-max-90-shoes.png'
  },
  {
    id: 4,
    title: 'Adidas Ultra boost',
    stock: 35,
    category: 'Shoes',
    price: 180,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ultraboost-light-shoes.jpg'
  },
  {
    id: 5,
    title: 'MacBook Pro M3',
    stock: 12,
    category: 'Electronics',
    price: 1999,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-14-m3-hero-202310'
  },
  {
    id: 6,
    title: 'Sony WH-1000XM5',
    stock: 40,
    category: 'Electronics',
    price: 399,
    image: 'https://m.media-amazon.com/images/I/61bU2dJcFhL._AC_SL1500_.jpg'
  },
  {
    id: 7,
    title: 'Levi\'s 501 Jeans',
    stock: 60,
    category: 'Clothing',
    price: 89,
    image: 'https://lsco.scene7.com/is/image/lsco/005010114-front-pdp.jpg'
  },
  {
    id: 8,
    title: 'Nike Dri-FIT Shirt',
    stock: 75,
    category: 'Clothing',
    price: 35,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/65dc45eb-0076-4931-a991-9314b1a1eacf/nike-dri-fit-shirt.png'
  }
];


  categories: string[] = ['Electronics', 'Shoes', 'Clothing'];

  filterValues = {
    category: '',
    title: '',
    maxPrice: null as number | null
  };

  displayValues = {
    category: '',
    title: '',
    maxPrice: null as number | null
  };

  updateFilterDisplay(): void {
    this.displayValues = { ...this.filterValues };
  }

  getStockClass(stock: number): string {
    if (stock < 20) return 'text-danger';
    if (stock < 40) return 'text-warning';
    return 'text-success';
  }
}
