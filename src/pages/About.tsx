import React from 'react';
import { Shield, Award, Users, Clock, User, Eye, Target } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Rofikul Huda',
      role: 'Founder, Developer',
      description: 'Visioner utama MicroStore dengan pengalaman 8+ tahun di bidang embedded systems dan IoT development.'
    },
    {
      name: 'Saputra Pramahkota Hati',
      role: 'Co-Founder',
      description: 'Ahli strategi bisnis yang membantu mengembangkan ekosistem MicroStore dengan network yang luas.'
    },
    {
      name: 'Rizky Agil Wibowo',
      role: 'Administrator',
      description: 'Mengelola operasional harian dan memastikan kelancaran sistem administrasi perusahaan.'
    },
    {
      name: 'Bagus Setiawan',
      role: 'Editor, Designer',
      description: 'Kreator konten dan desainer yang menciptakan pengalaman visual yang menarik untuk pelanggan.'
    },
    {
      name: 'Adira Putra Raihan',
      role: 'Supplier',
      description: 'Menjalin hubungan dengan supplier global untuk memastikan kualitas dan ketersediaan produk.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
              Tentang MicroStore
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Penyedia terpercaya komponen mikrokontroler dan elektronika di Indonesia dengan komitmen 
              memberikan produk berkualitas tinggi dan pelayanan terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Cerita Kami
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  MicroStore didirikan pada tahun 2020 dengan visi menjadi platform e-commerce terdepan 
                  untuk komponen mikrokontroler di Indonesia. Kami memahami kebutuhan para maker, engineer, 
                  dan hobbyist yang memerlukan komponen berkualitas untuk mewujudkan proyek-proyek inovatif mereka.
                </p>
                <p>
                  Dimulai dari sebuah toko kecil, kini kami telah melayani ribuan pelanggan di seluruh Indonesia 
                  dengan katalog produk yang lengkap mulai dari ESP32, Arduino, Raspberry Pi, hingga berbagai 
                  sensor dan aksesoris pendukung.
                </p>
                <p>
                  Komitmen kami adalah memberikan produk original, harga kompetitif, dan layanan pelanggan 
                  yang responsif untuk mendukung ekosistem IoT dan elektronika di Indonesia.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                  alt="About MicroStore"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tim Pendiri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Orang-orang hebat di balik kesuksesan MicroStore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-300 transition-all duration-300">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {founder.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi dalam melayani pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kualitas Terjamin</h3>
              <p className="text-gray-600 leading-relaxed">
                Semua produk yang kami jual adalah original dan telah melalui quality control yang ketat.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Harga Kompetitif</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami berkomitmen memberikan harga terbaik tanpa mengorbankan kualitas produk.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pelayanan Prima</h3>
              <p className="text-gray-600 leading-relaxed">
                Tim customer service yang berpengalaman siap membantu Anda 24/7.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pengiriman Cepat</h3>
              <p className="text-gray-600 leading-relaxed">
                Proses dan kirim pesanan dengan cepat ke seluruh Indonesia dengan packaging aman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-xl text-blue-100 font-medium">Pelanggan Puas</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-xl text-blue-100 font-medium">Produk Tersedia</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-xl text-blue-100 font-medium">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Visi & Misi Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menjadi platform e-commerce terdepan untuk komponen elektronika dan mikrokontroler 
                yang mendukung inovasi teknologi di Indonesia.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menyediakan akses mudah dan terpercaya untuk komponen elektronika berkualitas tinggi 
                dengan pelayanan terbaik bagi komunitas maker dan engineer Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
