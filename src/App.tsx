import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ChevronRight, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Globe,
  Award
} from 'lucide-react';
import { SLIDES, COVER_IMAGE, LOGO_URL } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#hero' },
    { name: 'Chương trình', href: '#slides' },
    { name: 'Quy trình', href: '#slides' },
    { name: 'Đăng ký', href: '#register' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="Lika Education Logo" 
            className="w-12 h-12 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>LIKA EDUCATION</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#register"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Tư vấn ngay
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#register"
                  className="block w-full text-center bg-brand-primary text-white px-4 py-3 rounded-lg font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Đăng ký tư vấn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={COVER_IMAGE} 
          alt="Kyung Hee University" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/70 via-brand-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-brand-accent rounded-full">
              Tuyển sinh 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 text-balance">
              Chương trình Tuyển sinh & Định hướng <span className="text-brand-secondary italic">Du học Hàn Quốc</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              Viện Đào tạo Quản trị Kinh doanh Sau đại học - Trường Đại học Kyung Hee. Khởi đầu hành trình MBA đẳng cấp quốc tế tại xứ sở Kim Chi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#register" 
                className="group bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-brand-accent hover:text-white shadow-xl"
              >
                Đăng ký tư vấn
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#slides" 
                className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 backdrop-blur-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Xem chi tiết
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/20 pt-8"
          >
            <div className="text-white">
              <div className="text-2xl font-bold mb-1">Top 6</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">Đại học tại Hàn</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold mb-1">AACSB</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">Chứng nhận toàn cầu</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">Hỗ trợ hồ sơ</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const SlideSection = () => {
  return (
    <section id="slides" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">Thông tin chi tiết chương trình</h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Khám phá toàn bộ nội dung chương trình đào tạo, lịch tuyển sinh và các chính sách học bổng hấp dẫn tại Kyung Hee University.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {SLIDES.map((url, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
            >
              <div className="relative">
                <img 
                  src={url} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-primary/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                  {index + 1} / {SLIDES.length}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MiddleCTA = () => {
  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Bạn quan tâm đến chương trình?</h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Đừng bỏ lỡ cơ hội trở thành sinh viên của một trong những ngôi trường đẹp nhất Seoul. Đội ngũ tư vấn của Lika sẽ liên hệ hỗ trợ bạn ngay!
        </p>
        <a 
          href="#register" 
          className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold/90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          Đăng ký ngay
          <ArrowRight size={24} />
        </a>
      </div>
    </section>
  );
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    birthYear: '',
    need: 'Du học tiếng'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Họ tên quá ngắn';
    }

    const phoneRegex = /^(0|84)(3|5|7|8|9)([0-9]{8})$/;
    if (!formData.phone) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ (VD: 0912345678)';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không đúng định dạng';
    }

    if (formData.birthYear) {
      const year = parseInt(formData.birthYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1950 || year > currentYear) {
        newErrors.birthYear = `Năm sinh phải từ 1950 - ${currentYear}`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

    try {
      // 1. Log to our internal API (works in AI Studio / Full-stack)
      fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {});

      // 2. Send to Google Sheets
      if (GOOGLE_SHEET_URL) {
        // Using URLSearchParams is often more reliable for Google Apps Script with no-cors
        const params = new URLSearchParams();
        params.append('fullName', formData.fullName);
        params.append('phone', formData.phone);
        params.append('email', formData.email || '');
        params.append('birthYear', formData.birthYear || '');
        params.append('need', formData.need);
        params.append('timestamp', new Date().toLocaleString('vi-VN'));

        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString()
        });
        console.log("Request sent to Google Sheets");
      } else {
        console.error("VITE_GOOGLE_SHEET_URL is missing!");
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-50 border border-green-100 p-12 rounded-3xl"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-200">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Đăng ký thành công!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Cảm ơn bạn đã quan tâm. Đội ngũ chuyên gia của Lika Education sẽ liên hệ với bạn qua số điện thoại <strong>{formData.phone}</strong> trong vòng 24h tới.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-brand-primary font-bold hover:underline"
            >
              Gửi đăng ký khác
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">Bắt đầu hành trình của bạn ngay hôm nay</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Điền thông tin vào form bên cạnh, chúng tôi sẽ tư vấn lộ trình du học tối ưu nhất dựa trên hồ sơ và nguyện vọng của bạn.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Đại diện chính thức</h4>
                <p className="text-gray-500">Lika là đại diện tuyển sinh chính thức của Viện GSA - Kyung Hee tại Việt Nam.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Tư vấn chuyên sâu</h4>
                <p className="text-gray-500">Định hướng lộ trình 1:1, tối ưu cơ hội nhận học bổng lên đến 50%.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên *</label>
              <input 
                type="text" 
                placeholder="Nguyễn Văn A"
                className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-brand-primary'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({...formData, fullName: e.target.value});
                  if (errors.fullName) setErrors({...errors, fullName: ''});
                }}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại *</label>
                <input 
                  type="tel" 
                  placeholder="09xx xxx xxx"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-brand-primary'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    if (errors.phone) setErrors({...errors, phone: ''});
                  }}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Năm sinh (Optional)</label>
                <input 
                  type="number" 
                  placeholder="200x"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.birthYear ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-brand-primary'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                  value={formData.birthYear}
                  onChange={(e) => {
                    setFormData({...formData, birthYear: e.target.value});
                    if (errors.birthYear) setErrors({...errors, birthYear: ''});
                  }}
                />
                {errors.birthYear && <p className="text-red-500 text-xs mt-1 font-medium">{errors.birthYear}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email (Optional)</label>
              <input 
                type="email" 
                placeholder="example@gmail.com"
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-brand-primary'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                value={formData.email}
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: ''});
                }}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nhu cầu tư vấn</label>
              <select 
                className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white`}
                value={formData.need}
                onChange={(e) => setFormData({...formData, need: e.target.value})}
              >
                <option>Du học tiếng</option>
                <option>Du học đại học</option>
                <option>Chương trình MBA</option>
                <option>Tư vấn chung</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-100 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? 'Đang xử lý...' : (
                <>
                  Đăng ký tư vấn ngay
                  <Send size={18} />
                </>
              )}
            </button>
            <p className="text-center text-xs text-gray-400">
              Bằng cách đăng ký, bạn đồng ý với chính sách bảo mật của Lika Education.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Lika Education Logo" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif font-bold text-2xl tracking-tight">LIKA EDUCATION</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Đại diện tuyển sinh chính thức của Viện GSA - Trường Đại học Kyung Hee tại Việt Nam. Chuyên gia định hướng lộ trình du học cao cấp.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Liên hệ</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-accent" />
                <span>038.8383.789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-accent" />
                <span>info@duhoclika.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-brand-accent" />
                <span>www.duhoclika.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Địa chỉ</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Cơ sở đào tạo Hà Nội:</p>
                  <p>Trường Cao đẳng Nghề Công nghiệp Hà Nội</p>
                  <p className="text-sm">Địa chỉ: 131 Thái Thịnh, Đống Đa, Hà Nội</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Chi nhánh Lika Nghệ An:</p>
                  <p className="text-sm">Địa chỉ: 20 Lê Hồng Phong, TP. Vinh, Nghệ An</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Phòng hợp tác Việt Nam - Hàn Quốc - Lika Kinh Bắc:</p>
                  <p>Trường Cao đẳng Công nghiệp Bắc Ninh</p>
                  <p className="text-sm">Địa chỉ: 499 Hàn Thuyên, TP. Bắc Ninh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Lika Education. All rights reserved. Designed for Kyung Hee University Admissions.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="antialiased selection:bg-brand-primary/30">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <SlideSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
