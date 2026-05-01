import Link from 'next/link';

export const metadata = {
  title: 'Contact | AnyMediaWorks',
  description: 'Start a project. Let\'s build something wild.',
};

export default function ContactPage() {
  return (
    <main className="relative pt-0 lg:pt-48 pb-24 sm:pb-32 px-6 sm:px-10 lg:px-16 overflow-hidden bg-white">

      {/* ─── Premium Background Effects ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
      <div className="absolute top-[5%] right-[5%] opacity-[0.03] animate-[spin_30s_linear_infinite] z-0 pointer-events-none hidden md:block">
        <span className="material-symbols-outlined text-[45rem] font-light select-none">
          all_out
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto mt-20 sm:mt-24 lg:mt-0">

        {/* Hero Section */}
        <section className="mb-16 sm:mb-24 lg:mb-32 flex flex-col items-start">
          <h1 className="text-[16vw] sm:text-[15vw] lg:text-[12vw] leading-[0.85] font-black font-['League_Spartan'] uppercase tracking-[-0.05em] text-black w-full cursor-default">
            START A <br className="hidden sm:block" />
            <span className="sm:hidden"> </span> {/* Space for mobile where br is hidden */}

            {/* Animated Container for "PROJECT" */}
            <span className="relative inline-flex items-center group/proj mt-2 md:mt-2">
              <span className="transform group-hover/proj:-translate-y-2 group-hover/proj:-rotate-2 transition-transform duration-500 inline-block">
                PROJECT
              </span>
              {/* Hidden Arrow Icon that slides out smoothly on hover */}
              <span className="material-symbols-outlined text-red-600 opacity-0 group-hover/proj:opacity-100 transform -translate-x-12 group-hover/proj:translate-x-2 transition-all duration-500 text-[12vw] sm:text-[10vw] absolute left-[100%] hidden md:block pointer-events-none">
                arrow_forward
              </span>
            </span>
          </h1>

          <div className="mt-8 sm:mt-12 lg:mt-16 ml-2 sm:ml-16 lg:ml-32 transform -rotate-6 sm:-rotate-12 hover:-rotate-[10deg] hover:scale-105 transition-all duration-500 origin-left w-max max-w-[90vw]">
            <span className="font-script text-red-600 text-[8.5vw] sm:text-[7vw] lg:text-[6vw] leading-none whitespace-nowrap block drop-shadow-sm">
              Let's build something wild
            </span>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Form Section */}
          <section className="order-2 lg:order-1 mt-4 lg:mt-0">
            <form className="space-y-10 sm:space-y-12 lg:space-y-16">
              
              {/* 2-Column Grid for Text Inputs - Adjusted to md:grid-cols-2 for better tablet landscape/portrait rendering */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 lg:gap-12 lg:gap-x-16">
                
                {/* Name Field */}
                <div className="relative mt-2 sm:mt-0">
                  <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-5 lg:-top-6 left-0 text-zinc-500">
                    Name
                  </label>
                  <input
                    className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-lg sm:text-2xl lg:text-3xl uppercase placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 rounded-none"
                    placeholder="YOUR NAME"
                    type="text"
                    name="name"
                    required
                  />
                </div>

                {/* Business Name Field */}
                <div className="relative mt-2 md:mt-0">
                  <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-5 lg:-top-6 left-0 text-zinc-500">
                    Business Name
                  </label>
                  <input
                    className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-lg sm:text-2xl lg:text-3xl uppercase placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 rounded-none"
                    placeholder="BUSINESS NAME"
                    type="text"
                    name="businessName"
                  />
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-5 lg:-top-6 left-0 text-zinc-500">
                    Phone
                  </label>
                  <input
                    className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-lg sm:text-2xl lg:text-3xl uppercase placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 rounded-none"
                    placeholder="YOUR PHONE"
                    type="tel"
                    name="phone"
                    required
                  />
                </div>

                {/* WhatsApp Number Field */}
                <div className="relative">
                  <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-5 lg:-top-6 left-0 text-zinc-500">
                    WhatsApp Number
                  </label>
                  <input
                    className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-lg sm:text-2xl lg:text-3xl uppercase placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 rounded-none"
                    placeholder="WHATSAPP NUMBER"
                    type="tel"
                    name="whatsapp"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-5 lg:-top-6 left-0 text-zinc-500">
                    Email
                  </label>
                  <input
                    className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-lg sm:text-2xl lg:text-3xl uppercase placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 rounded-none overflow-hidden text-ellipsis"
                    placeholder="EMAIL ADDRESS"
                    type="email"
                    name="email"
                    required
                  />
                </div>

                {/* City Field */}
                <div className="relative">
                  <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-5 lg:-top-6 left-0 text-zinc-500">
                    City
                  </label>
                  <input
                    className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-lg sm:text-2xl lg:text-3xl uppercase placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 rounded-none"
                    placeholder="YOUR CITY"
                    type="text"
                    name="city"
                    required
                  />
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative pt-2">
                <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-3 lg:-top-4 left-0 text-zinc-500">
                  Select Services
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-base sm:text-xl lg:text-3xl uppercase text-black placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 rounded-none appearance-none cursor-pointer pr-10 lg:pr-12"
                    name="services"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="text-zinc-400">SELECT SERVICES</option>
                    <option value="Social Media Marketing" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Social Media Marketing</option>
                    <option value="WordPress Website Development" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">WordPress Website Development</option>
                    <option value="Google Ads" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Google Ads</option>
                    <option value="Social Media Ads" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Social Media Ads</option>
                    <option value="Google My Business" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Google My Business</option>
                    <option value="Content Marketing" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Content Marketing</option>
                    <option value="Video Marketing" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Video Marketing</option>
                    <option value="Corporate Branding" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Corporate Branding</option>
                    <option value="Search Engine Optimization" className="text-sm sm:text-base lg:text-lg normal-case font-body font-medium">Search Engine Optimization</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-2xl sm:text-3xl lg:text-4xl text-black">
                    arrow_drop_down
                  </span>
                </div>
              </div>

              {/* Project Details Field */}
              <div className="relative pt-2">
                <label className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest absolute -top-3 lg:-top-4 left-0 text-zinc-500">
                  Project Details
                </label>
                <textarea
                  className="w-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-black p-0 py-2 sm:py-3 lg:py-4 font-['League_Spartan'] font-black text-lg sm:text-2xl lg:text-3xl uppercase placeholder:text-zinc-300 focus:ring-0 focus:border-red-600 transition-colors duration-300 resize-none rounded-none"
                  placeholder="TELL US EVERYTHING"
                  rows="4"
                  name="details"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className="w-full sm:w-auto bg-black text-white px-8 sm:px-12 lg:px-16 py-5 lg:py-8 font-['League_Spartan'] font-black text-lg sm:text-xl lg:text-2xl uppercase tracking-tighter hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-3 sm:gap-4 group"
                type="submit"
              >
                SEND MESSAGE
                <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform text-xl sm:text-2xl">
                  arrow_forward
                </span>
              </button>
            </form>
          </section>

          {/* Information & Visuals Section */}
          <section className="flex flex-col justify-between order-1 lg:order-2">

            {/* Get In Touch Block */}
            <div className="mb-10 lg:mb-16">
              <h2 className="font-['League_Spartan'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black mb-3 sm:mb-4">
                Get in Touch
              </h2>
              <p className="font-body text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-zinc-600 border-l-4 border-red-600 pl-4 mb-8 sm:mb-10">
                Have a project in mind? Let’s talk.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {/* Email */}
                <div className="group flex items-center gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-zinc-400 group-hover:text-red-600 transition-colors">alternate_email</span>
                  <div className="overflow-hidden">
                    <p className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest text-zinc-400 mb-1">Email</p>
                    <a href="mailto:anymediaworks@gmail.com" className="text-base sm:text-xl lg:text-2xl font-['League_Spartan'] font-black lowercase tracking-tighter hover:text-red-600 transition-colors block truncate">
                      anymediaworks@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-center gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-zinc-400 group-hover:text-red-600 transition-colors">
                    phone_in_talk
                  </span>

                  <div>
                    <p className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest text-zinc-400 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+919288193688"
                      className="text-base sm:text-xl lg:text-2xl font-['League_Spartan'] font-black uppercase tracking-tighter hover:text-red-600 transition-colors"
                    >
                      +91&nbsp;9288193688
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-center gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-zinc-400 group-hover:text-red-600 transition-colors">location_on</span>
                  <div>
                    <p className="font-['League_Spartan'] font-black uppercase text-[10px] sm:text-xs tracking-widest text-zinc-400 mb-1">Location</p>
                    <p className="text-base sm:text-xl lg:text-2xl font-['League_Spartan'] font-black uppercase tracking-tighter text-black">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Branding Block */}
            <div className="mt-8 lg:mt-auto relative overflow-hidden group hidden sm:block">
              <div className="bg-zinc-100 w-full aspect-[4/3] relative border-4 border-black">
                <img
                  alt="Monochrome studio photography of architectural structure"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 grayscale group-hover:scale-105 transition-transform duration-700"
                  src="/images/contactus.jpeg"
                />
                <div className="absolute inset-0 bg-red-600 mix-blend-color opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 text-white z-10 drop-shadow-md pr-6">
                  <span className="font-script text-3xl sm:text-4xl lg:text-5xl leading-tight block">We're here to help you grow</span>
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>
    </main>
  );
}