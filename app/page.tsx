import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section - Unique Split Design */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <span className="text-green-400 text-sm font-semibold">Premium Wellness Experience</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                Find Your
                <span className="text-green-400"> Tranquility</span>
          </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Escape the everyday and immerse yourself in a world of relaxation. 
                Our expert therapists craft personalized experiences tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-green-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/50 group"
                >
                  Reserve Your Session
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:6303628219"
                  className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  630-362-8219
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-green-500/30">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
                  alt="Massage therapy"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating info card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">★</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">500+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Card-based Layout */}
      <section id="about" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
            <h2 className="text-5xl font-playfair font-bold text-slate-900 mt-2 mb-6">
              Your Wellness Journey Starts Here
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At AMassage, we believe in the transformative power of touch. Our skilled therapists combine 
              traditional techniques with modern approaches to deliver a truly exceptional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group relative bg-slate-50 p-8 rounded-2xl hover:bg-green-50 transition-all duration-300 border-2 border-transparent hover:border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Flexible Hours</h3>
              <p className="text-gray-600 mb-4">Open 7 days a week to fit your busy schedule</p>
              <div className="text-sm text-slate-900 font-semibold">
                Every Day: 10AM-9PM (CST)
              </div>
            </div>

            <div className="group relative bg-slate-50 p-8 rounded-2xl hover:bg-green-50 transition-all duration-300 border-2 border-transparent hover:border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 mb-4">Certified therapists with years of experience</p>
              <div className="text-sm text-green-600 font-semibold">
                Professional & Caring
              </div>
            </div>

            <div className="group relative bg-slate-50 p-8 rounded-2xl hover:bg-green-50 transition-all duration-300 border-2 border-transparent hover:border-green-500">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Prime Location</h3>
              <p className="text-gray-600 mb-4">Conveniently located in the heart of Lisle</p>
              <div className="text-sm text-slate-900 font-semibold">
                1600 Maple Ave, B3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-5xl font-playfair font-bold text-white mt-2 mb-6">
              Tailored Treatments for Every Need
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Swedish Massage */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/combomassage.jpg"
                  alt="Swedish Massage"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Swedish Massage</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The classic massage technique using gentle strokes to relax muscles and improve circulation. Perfect for stress relief and overall wellness.
                </p>
              </div>
            </div>

            {/* Deep Tissue */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/deeptissue.jpeg"
                  alt="Deep Tissue Massage"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Deep Tissue</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Targets chronic tension and knots in the deeper muscle layers. Ideal for athletes and those with chronic pain.
                </p>
              </div>
            </div>

            {/* Aromatherapy */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/aromatherapy.png"
                  alt="Aromatherapy"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Aromatherapy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enhanced with essential oils to boost mood, reduce anxiety, and promote deep relaxation through the power of scent.
                </p>
              </div>
            </div>

            {/* Hot Stone */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/hotstonemassage.jpg"
                  alt="Hot Stone Massage"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Hot Stone Therapy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Heated stones melt away tension and promote deeper muscle relaxation. A luxurious and deeply therapeutic experience.
                </p>
              </div>
            </div>

            {/* Couple Massage */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/couplesmassage.png"
                  alt="Couple Massage"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Couples Retreat</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Share the experience with someone special. Two therapists provide simultaneous massages in a private suite.
                </p>
              </div>
            </div>

            {/* Four Hands */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/fourhandsmassage.webp"
                  alt="Four Hands Massage"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Four Hands</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Two therapists working in harmony create a uniquely immersive and deeply relaxing massage experience.
                </p>
              </div>
            </div>

            {/* Japanese Shiatsu */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/shiatsu.webp"
                  alt="Japanese Shiatsu Massage"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Japanese Shiatsu</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Traditional Japanese finger-pressure technique that balances energy flow and promotes natural healing throughout the body.
                </p>
              </div>
            </div>

            {/* Combo Massage */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/combomassage.jpg"
                  alt="Combo Massage"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Combo Treatment</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Blend multiple techniques for a customized session. Swedish, deep tissue, and reflexology combined to your needs.
                </p>
              </div>
            </div>

            {/* Foot Reflexology */}
            <div className="group bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 border border-green-500/20 hover:border-green-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/footmassage.webp"
                  alt="Foot Reflexology"
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Foot Reflexology</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pressure-point therapy on feet to promote healing throughout the body. Improves circulation and releases tension.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-green-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/50"
            >
              Book Your Treatment
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - Masonry Style */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Gallery</span>
            <h2 className="text-5xl font-playfair font-bold text-slate-900 mt-2 mb-6">
              A Glimpse Into Tranquility
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Step into our serene environment designed for your ultimate relaxation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
                  alt="Gallery 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800"
                  alt="Gallery 2"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=800"
                  alt="Gallery 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800"
                  alt="Gallery 4"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"
                  alt="Gallery 5"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 italic text-sm">
            *Placeholder images - Replace with your own photos for the best results
          </p>
        </div>
      </section>

      {/* Reviews Section - Card Carousel Style */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-5xl font-playfair font-bold text-slate-900 mt-2 mb-6">
              Loved by Our Clients
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="flex text-green-500 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Absolutely phenomenal experience! The therapist was incredibly skilled and attentive to my needs. 
                I left feeling completely rejuvenated. This is now my go-to spot for self-care."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-bold text-slate-900">Sarah Martinez</div>
                  <div className="text-gray-500 text-sm">Regular Client</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="flex text-green-500 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "The hot stone massage was pure bliss! The atmosphere is so calming, and the staff really knows 
                what they're doing. I've been to many spas, and this is hands down one of the best."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-bold text-slate-900">Michael Thompson</div>
                  <div className="text-gray-500 text-sm">First-time Visitor</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="flex text-green-500 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "My partner and I had the couples massage and it was wonderful! They accommodated our schedules 
                perfectly and made us feel so comfortable. Definitely booking again soon!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  E
                </div>
                <div className="ml-4">
                  <div className="font-bold text-slate-900">Emily Chen</div>
                  <div className="text-gray-500 text-sm">Couples Treatment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Contact Form */}
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
              <h2 className="text-4xl font-playfair font-bold text-slate-900 mt-2 mb-6">
                Ready to Begin Your Wellness Journey?
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below or give us a call to schedule your appointment. 
                We look forward to serving you!
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-green-500 rounded-xl outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-green-500 rounded-xl outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-green-500 rounded-xl outline-none transition-colors"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-green-500 rounded-xl outline-none transition-colors"
                />
                
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-green-500 rounded-xl outline-none transition-colors resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side - Contact Info */}
            <div className="lg:pl-12">
              <div className="bg-slate-900 rounded-3xl p-10 text-white h-full">
                <h3 className="text-3xl font-playfair font-bold mb-8">Visit Us</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-green-400">Address</h4>
                      <p className="text-gray-300">
                        1600 Maple Ave, B3<br />
                        Lisle, IL 60532
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-green-400">Phone</h4>
                      <a href="tel:6303628219" className="text-gray-300 hover:text-green-400 transition-colors text-lg">
                        630-362-8219
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-green-400">Hours</h4>
                      <p className="text-gray-300">
                        Every Day<br />
                        10:00 AM - 9:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-700">
                  <Link
                    href="/booking"
                    className="flex items-center justify-center bg-green-500 text-slate-900 px-6 py-4 rounded-xl font-semibold hover:bg-green-400 transition-all group"
                  >
                    Book Appointment Online
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Your Journey to Wellness Awaits
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Take the first step towards relaxation and rejuvenation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-green-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition-all shadow-lg hover:shadow-green-500/50"
            >
              Book Your Session Now
            </Link>
            <a
              href="tel:6303628219"
              className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Call 630-362-8219
            </a>
          </div>
        </div>
      </section>
      </main>
  );
}
