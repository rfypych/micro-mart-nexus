
import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Rofikul Huda',
      role: 'Founder, Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Visioner utama MicroStore dengan pengalaman 8+ tahun di bidang embedded systems dan IoT development.'
    },
    {
      name: 'Saputra Pramahkota Hati',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Ahli strategi bisnis yang membantu mengembangkan ekosistem MicroStore dengan network yang luas.'
    },
    {
      name: 'Rizky Agil Wibowo',
      role: 'Administrator',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face',
      description: 'Mengelola operasional harian dan memastikan kelancaran sistem administrasi perusahaan.'
    },
    {
      name: 'Bagus Setiawan',
      role: 'Editor, Designer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
      description: 'Kreator konten dan desainer yang menciptakan pengalaman visual yang menarik untuk pelanggan.'
    },
    {
      name: 'Adira Putra Raihan',
      role: 'Supplier',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      description: 'Menjalin hubungan dengan supplier global untuk memastikan kualitas dan ketersediaan produk.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tentang MicroStore
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Penyedia terpercaya komponen mikrokontroler dan elektronika di Indonesia dengan komitmen 
              memberikan produk berkualitas tinggi dan pelayanan terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                MicroStore didirikan pada tahun 2020 dengan visi menjadi platform e-commerce terdepan 
                untuk komponen mikrokontroler di Indonesia. Kami memahami kebutuhan para maker, engineer, 
                dan hobbyist yang memerlukan komponen berkualitas untuk mewujudkan proyek-proyek inovatif mereka.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Dimulai dari sebuah toko kecil, kini kami telah melayani ribuan pelanggan di seluruh Indonesia 
                dengan katalog produk yang lengkap mulai dari ESP32, Arduino, Raspberry Pi, hingga berbagai 
                sensor dan aksesoris pendukung.
              </p>
              <p className="text-lg text-gray-700">
                Komitmen kami adalah memberikan produk original, harga kompetitif, dan layanan pelanggan 
                yang responsif untuk mendukung ekosistem IoT dan elektronika di Indonesia.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="About MicroStore"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tim Pendiri
            </h2>
            <p className="text-xl text-gray-600">
              Orang-orang hebat di balik kesuksesan MicroStore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {founder.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600">
              Prinsip yang menjadi fondasi dalam melayani pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Semua produk yang kami jual adalah original dan telah melalui quality control yang ketat.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Harga Kompetitif</h3>
              <p className="text-gray-600">
                Kami berkomitmen memberikan harga terbaik tanpa mengorbankan kualitas produk.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pelayanan Prima</h3>
              <p className="text-gray-600">
                Tim customer service yang berpengalaman siap membantu Anda 24/7.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pengiriman Cepat</h3>
              <p className="text-gray-600">
                Proses dan kirim pesanan dengan cepat ke seluruh Indonesia dengan packaging aman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-blue-100">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Produk Tersedia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Misi Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visi</h3>
                <p className="text-gray-700">
                  Menjadi platform e-commerce terdepan untuk komponen elektronika dan mikrokontroler 
                  yang mendukung inovasi teknologi di Indonesia.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Misi</h3>
                <p className="text-gray-700">
                  Menyediakan akses mudah dan terpercaya untuk komponen elektronika berkualitas tinggi 
                  dengan pelayanan terbaik bagi komunitas maker dan engineer Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
