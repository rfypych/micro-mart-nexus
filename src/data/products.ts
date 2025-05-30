
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
