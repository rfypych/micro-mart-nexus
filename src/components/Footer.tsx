import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-lg">
                  <Cpu className="h-6 w-6" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl blur opacity-30"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  MicroStore
                </span>
                <span className="text-xs text-gray-400 -mt-1">Electronics Hub</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Toko online terpercaya untuk semua kebutuhan mikrokontroler dan komponen elektronik Anda dengan kualitas terbaik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/produk" className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">Jl. Pahlawan No. 123, Ngawi</span>
                  <br />
                  <span className="text-gray-400 text-xs">Jawa Timur, Indonesia</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-green-500/20 p-2 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">+62 878-5062-9480</span>
                  <br />
                  <span className="text-gray-300 text-sm">+62 856-0760-0007</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-gray-300 text-sm">info@microstore.com</span>
                  <br />
                  <span className="text-gray-300 text-sm">support@microstore.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Jam Operasional
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 group">
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Clock className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Senin - Jumat</p>
                  <p className="text-gray-400 text-xs">09:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-orange-500/20 p-2 rounded-lg group-hover:bg-orange-500/30 transition-colors duration-300">
                  <Clock className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Sabtu</p>
                  <p className="text-gray-400 text-xs">09:00 - 15:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-gray-500/20 p-2 rounded-lg group-hover:bg-gray-500/30 transition-colors duration-300">
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Minggu</p>
                  <p className="text-gray-400 text-xs">Tutup</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} MicroStore. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
};

export default Footer;
