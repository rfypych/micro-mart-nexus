
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

export const products: Product[] = [
  {
    id: '1',
    name: 'ESP32 DevKit V1',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    category: 'ESP Series',
    description: 'Mikrokontroler ESP32 dengan WiFi dan Bluetooth built-in. Ideal untuk proyek IoT dengan kebutuhan konektivitas wireless.',
    specifications: {
      chipset: 'Tensilica Xtensa LX6',
      memory: '520 KB SRAM',
      storage: '4MB Flash',
      connectivity: ['WiFi 802.11 b/g/n', 'Bluetooth 4.2', 'Classic Bluetooth'],
      voltage: '3.3V',
      pins: 30,
      dimensions: '55 x 28 x 13 mm',
      weight: '10g'
    },
    applications: [
      'Proyek IoT (Internet of Things)',
      'Smart Home Automation',
      'Monitoring Sensor Wireless',
      'Web Server',
      'Bluetooth Communication',
      'WiFi Mesh Networking'
    ],
    stock: 50,
    featured: true
  },
  {
    id: '2',
    name: 'ESP8266 NodeMCU',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
    category: 'ESP Series',
    description: 'Mikrokontroler ESP8266 dengan built-in WiFi module. Pilihan ekonomis untuk proyek IoT sederhana.',
    specifications: {
      chipset: 'Tensilica L106',
      memory: '160 KB RAM',
      storage: '4MB Flash',
      connectivity: ['WiFi 802.11 b/g/n'],
      voltage: '3.3V',
      pins: 30,
      dimensions: '58 x 31 x 13 mm',
      weight: '8g'
    },
    applications: [
      'WiFi Communication',
      'Simple IoT Projects',
      'Weather Station',
      'Remote Control via WiFi',
      'Data Logging',
      'LED Strip Controller'
    ],
    stock: 75,
    featured: true
  },
  {
    id: '3',
    name: 'Arduino Uno R3',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    category: 'Arduino',
    description: 'Mikrokontroler Arduino Uno R3 original dengan ATmega328P. Board paling populer untuk pembelajaran elektronika.',
    specifications: {
      chipset: 'ATmega328P',
      memory: '2KB SRAM',
      storage: '32KB Flash, 1KB EEPROM',
      connectivity: ['USB', 'ICSP'],
      voltage: '5V',
      pins: 14,
      dimensions: '68.6 x 53.4 mm',
      weight: '25g'
    },
    applications: [
      'Pembelajaran Elektronika',
      'Robotics Projects',
      'Sensor Interface',
      'Motor Control',
      'LED Matrix Display',
      'Home Automation'
    ],
    stock: 30,
    featured: true
  },
  {
    id: '4',
    name: 'Raspberry Pi 4 Model B 4GB',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    category: 'Raspberry Pi',
    description: 'Single Board Computer Raspberry Pi 4 dengan RAM 4GB. Komputer mini yang powerful untuk berbagai aplikasi.',
    specifications: {
      chipset: 'Broadcom BCM2711 Quad-core ARM Cortex-A72',
      memory: '4GB LPDDR4',
      storage: 'MicroSD Card',
      connectivity: ['WiFi 802.11ac', 'Bluetooth 5.0', 'Gigabit Ethernet', '2x USB 3.0', '2x USB 2.0'],
      voltage: '5V',
      pins: 40,
      dimensions: '85.6 x 56.5 mm',
      weight: '46g'
    },
    applications: [
      'Desktop Computer',
      'Media Center',
      'IoT Gateway',
      'AI/Machine Learning',
      'Retro Gaming',
      'Home Server'
    ],
    stock: 20,
    featured: true
  },
  {
    id: '5',
    name: 'Arduino Nano',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    category: 'Arduino',
    description: 'Arduino Nano compact dengan ATmega328P. Ukuran kecil dengan fungsionalitas lengkap.',
    specifications: {
      chipset: 'ATmega328P',
      memory: '2KB SRAM',
      storage: '32KB Flash, 1KB EEPROM',
      connectivity: ['Mini USB'],
      voltage: '5V',
      pins: 30,
      dimensions: '45 x 18 mm',
      weight: '7g'
    },
    applications: [
      'Wearable Electronics',
      'Compact Projects',
      'Breadboard Prototyping',
      'Sensor Networks',
      'Embedded Systems',
      'Drone Controller'
    ],
    stock: 40,
    featured: false
  },
  {
    id: '6',
    name: 'ESP32-CAM',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    category: 'ESP Series',
    description: 'ESP32 dengan modul kamera OV2640. Sempurna untuk proyek surveillance dan computer vision.',
    specifications: {
      chipset: 'ESP32-S',
      memory: '520KB SRAM + 4MB PSRAM',
      storage: '4MB Flash',
      connectivity: ['WiFi', 'Bluetooth'],
      voltage: '5V',
      pins: 16,
      dimensions: '40 x 27 x 4.5 mm',
      weight: '8g'
    },
    applications: [
      'Video Streaming',
      'Security Camera',
      'Time-lapse Photography',
      'Face Recognition',
      'Object Detection',
      'IoT Camera Projects'
    ],
    stock: 25,
    featured: false
  }
];

export const categories = [
  'Semua',
  'ESP Series',
  'Arduino',
  'Raspberry Pi',
  'Sensor',
  'Aksesoris'
];
