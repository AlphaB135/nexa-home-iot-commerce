export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'ADMIN' | 'CUSTOMER';
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
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
  images: string[];
  specs: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product?: Product;
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
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product?: Product;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}
