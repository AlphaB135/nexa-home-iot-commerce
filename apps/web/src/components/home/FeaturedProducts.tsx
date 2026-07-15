import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ESP32-S3 DevKit',
    slug: 'esp32-s3-devkit',
    description: 'High-performance dual-core micro-controller with support for Wi-Fi and BLE 5.',
    price: 299,
    stock: 50,
    categoryId: 'mcu',
    images: [],
    specs: {},
    rating: 5.0,
    reviewsCount: 48,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '2',
    name: 'DHT22 Temp & Humidity Sensor',
    slug: 'dht22-sensor',
    description: 'High accuracy capacitive sensor to monitor ambient temperature and relative humidity.',
    price: 89,
    stock: 120,
    categoryId: 'sensor',
    images: [],
    specs: {},
    rating: 4.8,
    reviewsCount: 32,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '3',
    name: '4CH Optocoupler Relay Module',
    slug: 'relay-4ch',
    description: 'Optocoupler isolated 4-channel relay board suitable for home automation switching.',
    price: 149,
    stock: 30,
    categoryId: 'actuator',
    images: [],
    specs: {},
    rating: 4.9,
    reviewsCount: 19,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '4',
    name: 'OLED Display Module 0.96"',
    slug: 'oled-096',
    description: 'Sleek I2C 128x64 graphic screen display with high readability for telemetry feeds.',
    price: 119,
    stock: 80,
    categoryId: 'display',
    images: [],
    specs: {},
    rating: 4.7,
    reviewsCount: 25,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '5',
    name: 'ESP32-CAM HD Module',
    slug: 'esp32-cam',
    description: 'Integrated dev board equipped with OV2640 camera, TF card slot, and LED flash.',
    price: 259,
    stock: 4,
    categoryId: 'camera',
    images: [],
    specs: {},
    rating: 4.8,
    reviewsCount: 86,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '6',
    name: 'DC-DC Buck Converter 5V 3A',
    slug: 'buck-5v',
    description: 'Highly efficient step-down voltage regulator module converting input voltages.',
    price: 79,
    stock: 200,
    categoryId: 'power',
    images: [],
    specs: {},
    rating: 4.6,
    reviewsCount: 54,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '7',
    name: 'LoRa SX1276 Node Module',
    slug: 'lora-sx1276',
    description: 'Long-range telemetry wireless transceiver board operating on 915MHz frequency.',
    price: 349,
    stock: 15,
    categoryId: 'wireless',
    images: [],
    specs: {},
    rating: 5.0,
    reviewsCount: 14,
    createdAt: '',
    updatedAt: ''
  },
  {
    id: '8',
    name: 'Smart Plug Matter & Thread',
    slug: 'smart-plug-matter',
    description: 'Next-generation smart power plug featuring Matter support and Thread networking.',
    price: 499,
    stock: 63,
    categoryId: 'smarthome',
    images: [],
    specs: {},
    rating: 4.9,
    reviewsCount: 63,
    createdAt: '',
    updatedAt: ''
  }
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Featured Hardware Modules</h2>
            <p className="text-slate-500 text-xs sm:text-sm">High quality micro-controllers, sensors, and actuators for your IoT ecosystem.</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-505 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all self-start md:self-auto">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
