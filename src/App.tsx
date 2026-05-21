import "./index.css";
import sbcbg from "./assets/sbcbg.avif";
import { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="scroll-smooth overflow-x-hidden bg-white">

      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:block bg-[#02133b] text-white text-sm">

        <div className="max-w-[1200px] mx-auto px-6 h-[58px] flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-10">

            <div className="flex items-center gap-3">
              <span className="text-[#ff5a36] text-lg">
                ☎
              </span>

              <p className="font-light tracking-wide">
                Call on: 09288 655 443
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#ff5a36] text-lg">
                🕒
              </span>

              <p className="font-light tracking-wide">
                Open Hours: Mon - Fri 8.00 am - 6.00 pm
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-8 text-[15px] font-light">

            <a href="#" className="hover:text-[#ff5a36] transition">
              Council
            </a>

            <a href="#" className="hover:text-[#ff5a36] transition">
              Vacancies
            </a>

            <a href="#" className="hover:text-[#ff5a36] transition">
              Complaints
            </a>

          </div>

        </div>

      </div>

      {/* ================= NAVBAR ================= */}
{/* ================= NAVBAR ================= */}
<header className="sticky top-0 z-[999] w-full bg-[#f7f7f7] shadow-sm">

  <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

    <div className="h-[85px] lg:h-[100px] flex items-center justify-between">

      {/* LOGO */}
      <div className="flex items-center gap-4 shrink-0">

        <div className="w-12 h-12 rounded-full bg-[#ff5a36] flex items-center justify-center text-white text-xl">
          🏛
        </div>

        <div>
          <h2 className="text-[#1d2b5c] font-bold text-xl leading-none">
            SIBUCO
          </h2>

          <p className="text-gray-500 text-xs">
            Municipality
          </p>
        </div>

      </div>

      {/* DESKTOP MENU */}
      <nav className="hidden xl:flex items-center gap-8">

        {[
          "Home",
          "Pages",
          "Department",
          "Event",
          "Blog",
          "Portfolio",
          "Contact",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`text-[17px] flex items-center gap-1 transition ${
              item === "Home"
                ? "text-[#ff5a36]"
                : "text-[#1d2b5c] hover:text-[#ff5a36]"
            }`}
          >
            {item}
            <span className="text-xs">⌄</span>
          </a>
        ))}

      </nav>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6">

        <button className="text-[#66708f] text-2xl hover:text-[#ff5a36] transition">
          ⌕
        </button>

        <button className="border border-gray-300 rounded-full px-4 xl:px-6 h-[50px] text-[#1d2b5c] text-[15px] font-light flex items-center gap-2">
          Eng
          <span className="text-xs">⌄</span>
        </button>

        <button className="border-2 border-[#2d6cff] text-[#2d6cff] h-[52px] xl:h-[58px] px-5 xl:px-8 text-[14px] xl:text-[16px] font-medium hover:bg-[#2d6cff] hover:text-white transition duration-300 whitespace-nowrap">
          Report an Issues
        </button>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="xl:hidden text-3xl text-[#1d2b5c]"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </div>

  </div>

  {/* MOBILE MENU */}
  <div
    className={`xl:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
      menuOpen ? "max-h-[500px] py-6" : "max-h-0"
    }`}
  >

    <div className="px-6 flex flex-col gap-5">

      {[
        "Home",
        "Pages",
        "Department",
        "Event",
        "Blog",
        "Portfolio",
        "Contact",
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-[#1d2b5c] hover:text-[#ff5a36] text-lg transition"
          onClick={() => setMenuOpen(false)}
        >
          {item}
        </a>
      ))}

      {/* MOBILE BUTTON */}
      <button className="mt-4 border-2 border-[#2d6cff] text-[#2d6cff] h-[52px] px-6 text-[15px] font-medium hover:bg-[#2d6cff] hover:text-white transition duration-300">
        Report an Issues
      </button>

    </div>

  </div>

</header>

      {/* ================= HERO ================= */}
      <section id="home" className="relative">

        {/* HERO IMAGE */}
{/* HERO IMAGE */}
<div
  className="relative min-h-[760px] bg-cover bg-center"
  style={{
    backgroundImage: `url(${sbcbg})`,
  }}
>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#02133b]/60"></div>

  {/* ARROWS */}
  <button className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white text-4xl opacity-60 hover:opacity-100 transition">
    ‹
  </button>

  <button className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white text-4xl opacity-60 hover:opacity-100 transition">
    ›
  </button>

  {/* CONTENT */}
  <div className="relative z-10 max-w-[1200px] mx-auto px-6 min-h-[760px] flex items-center">

    <div className="max-w-[620px]">

      <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] mb-6">
        Lovely & Romantic Province
        <span className="block">
          for Green Lovers
        </span>
      </h1>

      <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-[520px]">
        Every year 1 million people from worldwide
        don’t forget to visit here.
      </p>

      <button className="bg-[#ff5a36] hover:bg-[#e44b28] text-white px-8 h-[55px] font-semibold transition duration-300">
        Discover More
      </button>

    </div>

  </div>

</div>

        {/* RED SECTION */}
        <div className="bg-[#ff3b1d] pt-[90px] pb-10 relative">

          {/* FLOATING BOX */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[70px] w-full max-w-[950px] px-6">

            <div className="bg-white shadow-2xl">

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

                {[
                  "Your Government",
                  "Jobs and Employment",
                  "Business and Industry",
                  "Roads and Transport",
                  "Culture and Recreation",
                  "Justice, Safety and the Law",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="min-h-[160px] border-r border-b lg:border-b-0 last:border-r-0 border-gray-200 flex flex-col items-center justify-center text-center px-4 hover:bg-gray-50 transition"
                  >

                    <div className="text-[#ff5a36] text-3xl mb-4">
                      🏛
                    </div>

                    <p className="text-[#1d2b5c] text-[13px] leading-5 font-medium">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* BOTTOM TEXT */}
          <div className="mt-10 max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-6 text-center">

            <p className="text-white text-sm">
              The official guide to living, working,
              visiting and investing in the Sibuco.
            </p>

            <button className="bg-[#ff5a36] hover:bg-[#e44b28] text-white text-sm px-5 h-[42px] transition">
              Lets explore more
            </button>

          </div>

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}
<section className="bg-white py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="relative">

        <img
          src={sbcbg}
          alt="About Sibuco"
          className="w-full h-[550px] object-cover rounded-2xl shadow-2xl"
        />

        {/* SMALL FLOATING BOX */}
        <div className="absolute bottom-8 left-8 bg-white shadow-xl px-8 py-6 rounded-xl">

          <h3 className="text-4xl font-black text-[#ff5a36]">
            25+
          </h3>

          <p className="text-[#1d2b5c] font-medium">
            Years of Public Service
          </p>

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div>

        <p className="uppercase tracking-[4px] text-[#ff5a36] text-sm mb-4">
          About Sibuco
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1d2b5c] leading-tight mb-8">
          Building a stronger
          <span className="block">
            and progressive municipality
          </span>
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          The Municipality of Sibuco is committed to delivering
          transparent governance, quality public services,
          and sustainable development for every citizen.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Through innovation, leadership, and community
          participation, we continue to create opportunities,
          strengthen local programs, and improve the quality
          of life for future generations.
        </p>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">

          <div className="flex gap-4">

            <div className="w-14 h-14 bg-[#ffede8] rounded-full flex items-center justify-center text-2xl">
              🏛
            </div>

            <div>
              <h4 className="font-bold text-[#1d2b5c] mb-1">
                Transparent Governance
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                Open and accountable public service.
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-14 h-14 bg-[#ffede8] rounded-full flex items-center justify-center text-2xl">
              🌱
            </div>

            <div>
              <h4 className="font-bold text-[#1d2b5c] mb-1">
                Sustainable Growth
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                Programs focused on long-term progress.
              </p>
            </div>

          </div>

        </div>

        {/* BUTTON */}
        <button className="bg-[#ff5a36] hover:bg-[#e44b28] text-white px-8 h-[56px] rounded-lg font-semibold transition duration-300">
          Learn More
        </button>

      </div>

    </div>

  </div>

</section>

      {/* ================= Explore ================= */}
<section
  id="about"
  className="bg-[#f5f5f5] pt-28 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP SERVICES */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT TEXT */}
      <div>

        <p className="uppercase tracking-[4px] text-[#ff5a36] text-sm mb-4">
          Explore Municipality
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1d2b5c] leading-tight mb-6">
          Let’s explore local services,
          <span className="block">
            programs & initiatives.
          </span>
        </h2>

      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {[
          {
            title: "Service Departments",
            image:
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Visitors Guide",
            image:
              "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
          },
          {
            title: "Administrations",
            image:
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
          >

            <div className="h-[180px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="py-5 text-center">
              <h3 className="text-[#1d2b5c] font-semibold text-[15px]">
                {item.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </div>

    {/* SECOND ROW */}
    <div className="grid lg:grid-cols-2 gap-20 items-center py-28">

      {/* LEFT CONTENT */}
      <div>

        <p className="uppercase tracking-[4px] text-[#ff5a36] text-sm mb-4">
          Leadership
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1d2b5c] leading-tight mb-8">
          Meet the municipal leader
          <span className="block">
            serving the community
          </span>
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          The Municipality of Sibuco continues to strengthen
          governance, improve public services, and promote
          sustainable development for every citizen.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Through transparency, community engagement,
          and strategic initiatives, the local government
          ensures growth and opportunities for future generations.
        </p>

        {/* QUOTE */}
        <div className="border-l-4 border-[#ff5a36] pl-6 mb-10">
          <p className="text-[#1d2b5c] text-lg italic leading-relaxed">
            “Stand at the top of a cliff and jump off
            and build your wings on the way down.”
          </p>

          <p className="text-gray-500 mt-3 text-sm">
            — Provincial Mayor
          </p>
        </div>

        {/* BUTTON */}
        <button className="flex items-center gap-4 group">

          <div className="w-14 h-14 rounded-full bg-[#ff5a36] flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
            ▶
          </div>

          <div className="text-left">
            <p className="text-gray-500 text-sm">
              Video Intro
            </p>

            <p className="text-[#1d2b5c] font-semibold">
              About Our Municipality
            </p>
          </div>

        </button>

      </div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="relative flex justify-center">

        {/* MAIN IMAGE */}
        <div className="relative z-20">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-[420px] h-[520px] object-cover shadow-2xl"
          />
        </div>

        {/* SMALL IMAGE */}
        <div className="absolute -bottom-10 right-0 z-30 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="w-[220px] h-[180px] object-cover border-8 border-[#f5f5f5]"
          />
        </div>

        {/* DECORATION */}
        <div className="absolute -left-8 top-12 w-24 h-24 border-[12px] border-[#ff5a36] opacity-20 z-10"></div>

      </div>

    </div>

  </div>

  {/* STATS BAR */}
  <div className="bg-[#02133b] py-16 relative overflow-hidden">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {[
          {
            number: "32k",
            label: "Total People Lived in our province",
          },
          {
            number: "782.54",
            label: "Square kilometers region covers",
          },
          {
            number: "32%",
            label: "Private & domestic garden land",
          },
          {
            number: "6th",
            label: "Average costs of home ownership",
          },
        ].map((item, index) => (
          <div key={index}>

            <h3 className="text-white text-5xl font-bold mb-3">
              {item.number}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed max-w-[180px] mx-auto">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>



      {/* ================= TOURISM ================= */}
      <section id="tourism" className="bg-gray-100 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="mb-12">

            <p className="uppercase tracking-[4px] text-[#ff5a36] text-sm mb-2">
              Explore
            </p>

            <h2 className="text-4xl font-bold text-[#1d2b5c]">
              Tourism Highlights
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                className="h-64 w-full object-cover"
                alt=""
              />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2 text-[#1d2b5c]">
                  Beaches
                </h3>

                <p className="text-gray-600">
                  White sand beaches and crystal-clear waters perfect for relaxation.
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="h-64 w-full object-cover"
                alt=""
              />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2 text-[#1d2b5c]">
                  Mountains
                </h3>

                <p className="text-gray-600">
                  Scenic landscapes, fresh air, and hiking destinations.
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
                className="h-64 w-full object-cover"
                alt=""
              />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2 text-[#1d2b5c]">
                  Culture
                </h3>

                <p className="text-gray-600">
                  Rich traditions, festivals, and local heritage experiences.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="max-w-7xl mx-auto py-24 px-6">

        <p className="uppercase tracking-[4px] text-[#ff5a36] text-sm mb-2">
          Public Services
        </p>

        <h2 className="text-4xl font-bold text-[#1d2b5c] mb-12">
          Government Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition">
            <h3 className="font-bold text-2xl mb-4 text-[#1d2b5c]">
              Business Permit
            </h3>

            <p className="text-gray-600">
              Apply and renew permits online quickly and securely.
            </p>
          </div>

          <div className="p-8 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition">
            <h3 className="font-bold text-2xl mb-4 text-[#1d2b5c]">
              Document Request
            </h3>

            <p className="text-gray-600">
              Request official municipal documents anytime.
            </p>
          </div>

          <div className="p-8 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition">
            <h3 className="font-bold text-2xl mb-4 text-[#1d2b5c]">
              Appointments
            </h3>

            <p className="text-gray-600">
              Schedule meetings with municipal offices online.
            </p>
          </div>

        </div>

      </section>

      {/* ================= COUNCIL ================= */}
<section className="bg-[#f5f5f5] py-28">

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-16">

      <p className="uppercase tracking-[4px] text-[#ff5a36] text-sm mb-3">
        Leadership
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#1d2b5c] mb-4">
        Meet Province Council
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
        The  council leads community programs,
        governance initiatives, and public service
        improvements for the municipality.
      </p>

    </div>

    {/* COUNCIL GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          name: "Joel Ventura",
          role: "Mayor",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Absar Caril",
          role: "Vice Mayor",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Al-al Naing",
          role: "Councilor",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Kadija Payao",
          role: "Councilor",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((member, index) => (
        <div
          key={index}
          className="bg-white shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300"
        >

          {/* IMAGE */}
          <div className="overflow-hidden h-[320px]">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* INFO */}
          <div className="p-6">

            <h3 className="text-[#1d2b5c] text-xl font-bold mb-2">
              {member.name}
            </h3>

            <p className="text-[#ff5a36] text-sm mb-5">
              {member.role}
            </p>

            <div className="space-y-2 text-gray-500 text-sm">

              <p>
                ✉ district@sbcgov.com
              </p>

              <p>
                ☎ (+63) 900 123 4567
              </p>

            </div>

          </div>

        </div>
      ))}

    </div>


  </div>

</section>

{/* ================= FOOTER ================= */}
<footer className="bg-[#071c4d] text-gray-300 pt-20">

  {/* TOP NAV */}
  <div className="border-b border-white/10 pb-8 mb-16">

    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">

      {/* MENU */}
      <div className="flex flex-wrap items-center gap-8 text-sm">

        {[
          "About Us",
          "Services",
          "Events",
          "News",
          "Contact",
          "Portfolio",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="hover:text-[#ff5a36] transition"
          >
            {item}
          </a>
        ))}

      </div>

      {/* SOCIAL */}
      <div className="flex items-center gap-4">

        <p className="text-sm">
          Connect With Us
        </p>

        <div className="flex gap-3">

          {["f", "t", "ig", "▶"].map((icon, index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#ff5a36] hover:border-[#ff5a36] transition cursor-pointer text-sm"
            >
              {icon}
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

  {/* MAIN FOOTER */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-14 pb-20">

    {/* ABOUT */}
    <div>

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-full bg-[#ff5a36] flex items-center justify-center text-white text-xl">
          🏛
        </div>

        <h3 className="text-3xl font-light text-white">
          
        </h3>

      </div>

      <div className="space-y-3 text-sm leading-relaxed">

        <p>
          Brgy Jatian, Sibuco
          Zamboanga , Philippines
        </p>

        <p>
          🕒 Opening Hours:
          Mon - Fri 8:00 am - 6:00 pm
        </p>

        <p>
          ☎ Phone: 09288 655 443
        </p>

        <p>
          ✉ Email: mjdev@gmail.com
        </p>

      </div>

    </div>

    {/* SERVICES */}
    <div>

      <h3 className="text-white font-bold text-xl mb-6">
        Service Request
      </h3>

      <ul className="space-y-4 text-sm">

        {[
          "Apply for a Province Job",
          "Request a 911 Service",
          "Get a Booking Permit",
          "Building Permits",
          "Online Birth Certificate",
          "Trade License",
        ].map((item, index) => (
          <li
            key={index}
            className="hover:text-[#ff5a36] transition cursor-pointer"
          >
            › {item}
          </li>
        ))}

      </ul>

    </div>

    {/* LINKS */}
    <div>

      <h3 className="text-white font-bold text-xl mb-6">
        Useful Links
      </h3>

      <ul className="space-y-4 text-sm">

        {[
          "Our Blog",
          "Our History",
          "Documentation",
          "Environmental",
          "Province Gallery",
          "Departments",
        ].map((item, index) => (
          <li
            key={index}
            className="hover:text-[#ff5a36] transition cursor-pointer"
          >
            › {item}
          </li>
        ))}

      </ul>

    </div>

    {/* NEWSLETTER */}
    <div>

      <h3 className="text-white font-bold text-xl mb-6">
        News & Updates
      </h3>

      <p className="text-sm leading-relaxed mb-6">
        The latest government updates,
        events, and resources delivered
        straight to your inbox.
      </p>

      <div className="flex overflow-hidden">

        <input
          type="email"
          placeholder="Your Email"
          className="flex-1 h-[52px] px-4 text-sm bg-white text-black outline-none"
        />

        <button className="bg-[#ff5a36] hover:bg-[#e44b28] px-6 text-sm font-semibold text-white transition">
          SUBSCRIBE
        </button>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="bg-[#031238] py-6">

    <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">

      © https://github.com/muhajirpayao - 2026. All Rights Reserved.

    </div>

  </div>

</footer>



    </div>
  );
};

export default App;