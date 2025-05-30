
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specifications: {
    chipset?: string;
    memory?: string;
    storage?: string;
    connectivity?: string[];
    voltage?: string;
    pins?: number;
    dimensions?: string;
    weight?: string;
  };
  applications: string[];
  stock: number;
  featured: boolean;
}

export const categories = [
  'Semua',
  'ESP Series',
  'Arduino',
  'Raspberry Pi',
  'Sensor',
  'Aksesoris'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'ESP32 DevKit V1',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    category: 'ESP Series',
    description: 'Mikrokontroler ESP32 dengan WiFi dan Bluetooth built-in untuk proyek IoT',
    specifications: {
      chipset: 'ESP32-WROOM-32',
      memory: '520KB SRAM',
      storage: '4MB Flash',
      connectivity: ['WiFi', 'Bluetooth'],
      voltage: '3.3V',
      pins: 30
    },
    applications: ['IoT Projects', 'Smart Home', 'Sensor Networks'],
    stock: 25,
    featured: true
  },
  {
    id: '2',
    name: 'Arduino Uno R3',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop',
    category: 'Arduino',
    description: 'Papan pengembangan Arduino klasik dengan ATmega328P',
    specifications: {
      chipset: 'ATmega328P',
      memory: '32KB Flash',
      voltage: '5V',
      pins: 14
    },
    applications: ['Learning', 'Prototyping', 'Automation'],
    stock: 30,
    featured: true
  },
  {
    id: '3',
    name: 'Raspberry Pi 4 Model B',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'Raspberry Pi',
    description: 'Single board computer dengan performa tinggi untuk proyek kompleks',
    specifications: {
      chipset: 'Broadcom BCM2711',
      memory: '4GB LPDDR4',
      connectivity: ['WiFi', 'Bluetooth', 'Ethernet'],
      voltage: '5V'
    },
    applications: ['Mini PC', 'Media Center', 'Server'],
    stock: 15,
    featured: true
  },
  {
    id: '4',
    name: 'DHT22 Temperature Sensor',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    category: 'Sensor',
    description: 'Sensor suhu dan kelembaban digital dengan akurasi tinggi',
    specifications: {
      voltage: '3.3-5V',
      dimensions: '15.1×25×7.7mm'
    },
    applications: ['Weather Station', 'Environmental Monitoring'],
    stock: 50,
    featured: true
  }
];
