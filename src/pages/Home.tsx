import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Headphones, Zap, Star, TrendingUp } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useAdmin();
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" />
                <span>Platform Elektronik Terdepan</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Solusi Lengkap
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Mikrokontroler
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Dapatkan ESP32, ESP8266, Arduino, Raspberry Pi, dan komponen elektronik berkualitas tinggi dengan harga terbaik dan layanan terpercaya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/produk"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Jelajahi Produk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/tentang"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-blue-200 text-sm">Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-blue-200 text-sm">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                  alt="Mikrokontroler"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-gray-600 text-sm">Rating Pelanggan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Keunggulan Kami</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Mengapa Memilih MicroStore?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen memberikan pelayanan terbaik untuk semua kebutuhan elektronika Anda dengan standar kualitas internasional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Produk Original</h3>
              <p className="text-gray-600 leading-relaxed">
                Semua produk yang kami jual adalah original dan bergaransi resmi dari distributor terpercaya dengan sertifikat kualitas.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman Cepat</h3>
              <p className="text-gray-600 leading-relaxed">
                Proses pengiriman express ke seluruh Indonesia dengan packaging anti-statis dan tracking real-time untuk setiap pesanan.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Headphones className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Tim technical support yang berpengalaman siap membantu Anda kapan saja untuk konsultasi teknis dan troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full text-yellow-800 text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>Produk Pilihan</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Produk Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pilihan terbaik dari para engineer untuk memulai proyek elektronika impian Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/produk"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Lihat Semua Produk
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Siap Memulai <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Proyek Anda?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Dapatkan komponen mikrokontroler berkualitas tinggi dan mulai wujudkan ide kreatif Anda hari ini juga. Join ribuan engineer yang sudah mempercayai kami.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/produk"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5" />
                Mulai Belanja Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/kontak"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center"
              >
                Konsultasi Gratis
              </Link>
            </div>
            
            <div className="mt-12 text-blue-200 text-sm">
              ✓ Garansi Resmi  ✓ Pengiriman Gratis*  ✓ Support 24/7
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
