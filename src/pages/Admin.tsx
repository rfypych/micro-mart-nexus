
import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Plus, Edit, Trash2, Upload, LogOut } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { Product } from '../data/products';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../components/ui/table';

const Admin = () => {
  const { isAuthenticated, login, logout, products, addProduct, updateProduct, deleteProduct } = useAdmin();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    image: '',
    category: 'ESP Series',
    customCategory: '',
    description: '',
    stock: 0,
    featured: false,
    specifications: {
      chipset: '',
      memory: '',
      storage: '',
      connectivity: '',
      voltage: '',
      pins: 0,
      dimensions: '',
      weight: ''
    },
    applications: ''
  });

  const defaultImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setLoginError('');
      setPassword('');
    } else {
      setLoginError('Password salah!');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine final category
    const finalCategory = formData.category === 'custom' ? formData.customCategory : formData.category;
    
    // Process connectivity - split by comma if it's a string
    const connectivityArray = formData.specifications.connectivity 
      ? formData.specifications.connectivity.split(',').map(item => item.trim()).filter(item => item !== '')
      : [];

    // Process applications - split by line breaks
    const applicationsArray = formData.applications
      ? formData.applications.split('\n').map(item => item.trim()).filter(item => item !== '')
      : [];

    // Clean up the specifications - remove empty values
    const cleanedSpecifications = Object.fromEntries(
      Object.entries({
        ...formData.specifications,
        connectivity: connectivityArray
      }).filter(([key, value]) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        }
        return value !== '' && value !== 0;
      })
    );

    const productData = {
      ...formData,
      category: finalCategory,
      image: formData.image || defaultImage,
      applications: applicationsArray,
      specifications: cleanedSpecifications
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: 0,
      image: '',
      category: 'ESP Series',
      customCategory: '',
      description: '',
      stock: 0,
      featured: false,
      specifications: {
        chipset: '',
        memory: '',
        storage: '',
        connectivity: '',
        voltage: '',
        pins: 0,
        dimensions: '',
        weight: ''
      },
      applications: ''
    });
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleEdit = (product: Product) => {
    const isCustomCategory = !['ESP Series', 'Arduino', 'Raspberry Pi', 'Sensor', 'Aksesoris'].includes(product.category);
    
    setFormData({
      name: product.name,
      price: product.price,
      image: product.image,
      category: isCustomCategory ? 'custom' : product.category,
      customCategory: isCustomCategory ? product.category : '',
      description: product.description,
      stock: product.stock,
      featured: product.featured,
      specifications: {
        chipset: product.specifications.chipset || '',
        memory: product.specifications.memory || '',
        storage: product.specifications.storage || '',
        connectivity: Array.isArray(product.specifications.connectivity) 
          ? product.specifications.connectivity.join(', ') 
          : product.specifications.connectivity || '',
        voltage: product.specifications.voltage || '',
        pins: product.specifications.pins || 0,
        dimensions: product.specifications.dimensions || '',
        weight: product.specifications.weight || ''
      },
      applications: product.applications.join('\n')
    });
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      deleteProduct(id);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 animate-fade-in">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
              <Lock className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">Masukkan password untuk mengakses panel admin</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  placeholder="Masukkan password admin"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {loginError && (
                <p className="text-red-600 text-sm mt-1">{loginError}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Masuk ke Admin Panel
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 mt-2">Kelola produk dan inventori</p>
          </div>
          <div className="flex space-x-4">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah Produk
            </Button>
            <Button
              onClick={logout}
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Product Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
            </h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Produk
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Harga (IDR)
                  </label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="ESP Series">ESP Series</option>
                    <option value="Arduino">Arduino</option>
                    <option value="Raspberry Pi">Raspberry Pi</option>
                    <option value="Sensor">Sensor</option>
                    <option value="Aksesoris">Aksesoris</option>
                    <option value="custom">Kategori Custom</option>
                  </select>
                </div>

                {formData.category === 'custom' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Kategori Custom
                    </label>
                    <Input
                      value={formData.customCategory}
                      onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                      placeholder="Masukkan nama kategori"
                      required={formData.category === 'custom'}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stok
                  </label>
                  <Input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL Gambar (kosongkan untuk gambar default)
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setFormData({ ...formData, image: defaultImage })}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Default
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Specifications Section */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Spesifikasi Teknis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Chipset
                      </label>
                      <Input
                        value={formData.specifications.chipset}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, chipset: e.target.value }
                        })}
                        placeholder="ESP32-WROOM-32"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Memory
                      </label>
                      <Input
                        value={formData.specifications.memory}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, memory: e.target.value }
                        })}
                        placeholder="520KB SRAM"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Storage
                      </label>
                      <Input
                        value={formData.specifications.storage}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, storage: e.target.value }
                        })}
                        placeholder="4MB Flash"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Connectivity (pisahkan dengan koma)
                      </label>
                      <Input
                        value={formData.specifications.connectivity}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, connectivity: e.target.value }
                        })}
                        placeholder="WiFi, Bluetooth, Ethernet"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Voltage
                      </label>
                      <Input
                        value={formData.specifications.voltage}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, voltage: e.target.value }
                        })}
                        placeholder="3.3V"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pins
                      </label>
                      <Input
                        type="number"
                        value={formData.specifications.pins}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, pins: parseInt(e.target.value) || 0 }
                        })}
                        placeholder="30"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dimensions
                      </label>
                      <Input
                        value={formData.specifications.dimensions}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, dimensions: e.target.value }
                        })}
                        placeholder="55 x 28 x 13 mm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight
                      </label>
                      <Input
                        value={formData.specifications.weight}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          specifications: { ...formData.specifications, weight: e.target.value }
                        })}
                        placeholder="10g"
                      />
                    </div>
                  </div>
                </div>

                {/* Applications Section */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aplikasi & Kegunaan (satu per baris)
                  </label>
                  <textarea
                    value={formData.applications}
                    onChange={(e) => setFormData({ ...formData, applications: e.target.value })}
                    rows={5}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Proyek IoT (Internet of Things)&#10;Smart Home Automation&#10;Monitoring Sensor Wireless"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Produk Unggulan</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Batal
                </Button>
                <Button type="submit">
                  {editingProduct ? 'Update Produk' : 'Tambah Produk'}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Daftar Produk ({products.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Gambar</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Harga</TableHead>
                  <TableHead>Stok</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{formatPrice(product.price)}</TableCell>
                    <TableCell>{product.stock} unit</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {product.featured && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Unggulan
                          </span>
                        )}
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          product.stock > 0 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.stock > 0 ? 'Tersedia' : 'Habis'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
