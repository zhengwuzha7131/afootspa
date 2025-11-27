import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-300">
            Choose your preferred service and time to begin your wellness journey
          </p>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-green-500/10">
            <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-8 text-center">
              Schedule Your Session
            </h2>
            
            {/* Square Appointments Iframe */}
            <div className="w-full min-h-[800px] bg-slate-50 rounded-2xl overflow-hidden">
              <iframe
                src="https://square.site/appointments/buyer/widget/zn0txdr6dkh5j8/LH4BBRGRCK6DJ"
                width="100%"
                height="800"
                frameBorder="0"
                title="Book an Appointment"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">Call to Book</h3>
              <a href="tel:6303628219" className="text-green-600 hover:text-green-700 text-lg font-semibold">
                630-362-8219
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Speak with us directly for personalized service
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">Open Daily</h3>
              <p className="text-slate-900 font-semibold">Every Day: 10AM-9PM (CST)</p>
              <p className="text-gray-600 text-sm mt-2">
                Flexible hours to fit your schedule
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-2">Find Us</h3>
              <p className="text-slate-900 font-semibold">1600 Maple Ave, B3</p>
              <p className="text-slate-900 font-semibold">Lisle, IL 60532</p>
              <p className="text-gray-600 text-sm mt-2">
                Convenient location in Lisle
              </p>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mt-16 bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-playfair font-bold mb-8 text-center">
              Our Premium Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💆</span>
                </div>
                <div className="text-sm font-semibold">Swedish</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💪</span>
                </div>
                <div className="text-sm font-semibold">Deep Tissue</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌸</span>
                </div>
                <div className="text-sm font-semibold">Aromatherapy</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="text-sm font-semibold">Hot Stone</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👫</span>
                </div>
                <div className="text-sm font-semibold">Couples</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✋</span>
                </div>
                <div className="text-sm font-semibold">Four Hands</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🙏</span>
                </div>
                <div className="text-sm font-semibold">Shiatsu</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-sm font-semibold">Combo</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🦶</span>
                </div>
                <div className="text-sm font-semibold">Reflexology</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/#services" className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center group">
                Explore All Services
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-green-50 border-2 border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              📝 Before Your Appointment
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">What to Expect:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Arrive 5-10 minutes early to relax</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Avoid heavy meals 1-2 hours before</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Communicate your preferences and concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Wear comfortable clothing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">After Your Session:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Drink plenty of water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Take it easy for the rest of the day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Some soreness the next day is normal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Schedule regular sessions for best results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
