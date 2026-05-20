import "./index.css";

const App = () => {
  return (
    <div className="scroll-smooth">

      {/* NAVBAR */}
      <header className="fixed w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-green-700">
            Sibuco Municipality
          </h1>

          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#about" className="hover:text-green-600">About</a>
            <a href="#tourism" className="hover:text-green-600">Tourism</a>
            <a href="#services" className="hover:text-green-600">Services</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 p-8 md:p-12 rounded-xl">
          <h2 className="text-4xl md:text-6xl font-bold">
            Welcome to Sibuco
          </h2>
          <p className="mt-4 text-lg">
            Discover nature, culture, and progress
          </p>

          <a
            href="#tourism"
            className="mt-6 inline-block bg-green-600 px-6 py-3 rounded-full hover:bg-green-700"
          >
            Explore Now
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          About Sibuco
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Sibuco is a coastal municipality known for its marine resources,
          cultural heritage, and growing eco-tourism industry. It continues to
          develop as a progressive and peaceful community in Zamboanga del Norte.
        </p>
      </section>

      {/* TOURISM */}
      <section id="tourism" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-10">
            Tourism Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                className="h-48 w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <h3 className="font-bold">Beaches</h3>
                <p className="text-sm text-gray-600">
                  White sand beaches and clear waters.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="h-48 w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <h3 className="font-bold">Mountains</h3>
                <p className="text-sm text-gray-600">
                  Scenic landscapes and hiking areas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
                className="h-48 w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <h3 className="font-bold">Culture</h3>
                <p className="text-sm text-gray-600">
                  Rich traditions and local heritage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-10">
          Government Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold">Business Permit</h3>
            <p className="text-sm text-gray-600">
              Apply and renew permits online.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold">Document Request</h3>
            <p className="text-sm text-gray-600">
              Request official documents easily.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-bold">Appointments</h3>
            <p className="text-sm text-gray-600">
              Book meetings with offices.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      {/* <section id="contact" className="bg-green-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="p-3 rounded text-black" placeholder="Name" />
            <input className="p-3 rounded text-black" placeholder="Email" />
            <textarea
              className="p-3 rounded text-black md:col-span-2"
              placeholder="Message"
            />
            <button className="bg-black px-6 py-3 rounded md:col-span-2 hover:bg-gray-800">
              Send Message
            </button>
          </div>
        </div>
      </section> */}

      {/* ☕ PREMIUM FOOTER (REPLACED) */}
      <footer className="bg-[#2b211d] text-[#e7d6c4] pt-14">

        {/* FEATURED STRIP */}
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-xs tracking-widest text-[#bfae9f] mb-4">
            FEATURED IN
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-[#cbb8a8] opacity-70">
            <span>Inc.</span>
            <span>Forbes</span>
            <span>Entrepreneur</span>
            <span>Mozilla</span>
            <span>MSN</span>
            <span>Business Insider</span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="font-bold text-lg text-white mb-4">
              About Sibuco
            </h3>
            <p className="text-sm text-[#cbb8a8] leading-relaxed">
              Coastal municipality known for marine resources, culture, and eco-tourism.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">Site Links</h3>
            <ul className="space-y-2 text-sm text-[#cbb8a8]">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">Government</h3>
            <ul className="space-y-2 text-sm text-[#cbb8a8]">
              <li>Business Permit</li>
              <li>Documents</li>
              <li>Appointments</li>
              <li>Emergency</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">Tourism</h3>
            <ul className="space-y-2 text-sm text-[#cbb8a8]">
              <li>Beaches</li>
              <li>Mountains</li>
              <li>Culture</li>
              <li>Events</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#3b2f2a] mt-12 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#a89280]">
            <p>© 2026 Sibuco Municipality. All rights reserved.</p>
            <p>Made with ❤️ for better digital services</p>
          </div>
        </div>

      </footer>

    </div>
  );
};

export default App;