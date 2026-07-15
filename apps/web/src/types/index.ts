export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'ADMIN' | 'CUSTOMER';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  stock: number;
  categoryId: string;
  categoryName?: string;
  images: string[];
  specs: Record<string, string>;
  rating: number;
  reviewsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  total: number;
  items: OrderItem[];
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
  paymentMethod: 'PROMPTPAY' | 'CREDIT_CARD' | 'COD';
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
}
