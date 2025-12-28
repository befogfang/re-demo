"use client";

import React from 'react';
import { SiteConfig } from '@/types';

export default function AgencyTemplate({ config }: { config: SiteConfig }) {
    return (
        <div className="font-display text-[#111418] bg-[#f6f7f8] dark:bg-[#101922] dark:text-white overflow-x-hidden min-h-screen">
            {/* Dynamic Theme Color Injection */}
            <style jsx global>{`
        :root {
          --color-primary: ${config.themeColor};
        }
        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .border-primary { border-color: var(--color-primary); }
        .ring-primary { --tw-ring-color: var(--color-primary); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            {/* Top Navigation */}
            <header
                className="sticky top-0 z-50 w-full border-b border-[#f0f2f4] dark:border-[#2a3642]"
                style={{ backgroundColor: config.headerBg }} // Use config for header bg
            >
                <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1440px] mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">apartment</span>
                        </div>
                        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                            {config.brandName || "SK Properties"}
                        </h2>
                    </div>
                    <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                        <nav className="flex items-center gap-6">
                            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors"
                                href="#">Buy</a>
                            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors"
                                href="#">Rent</a>
                            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors"
                                href="#">Commercial</a>
                            <a className="text-[#111418] text-sm font-medium hover:text-primary transition-colors"
                                href="#">Blog</a>
                        </nav>
                        <button
                            className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:opacity-90 text-white text-sm font-bold transition-colors">
                            <span className="truncate">List Your Property</span>
                        </button>
                    </div>
                    {/* Mobile Menu Icon */}
                    <button className="md:hidden text-[#111418]">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${config.heroImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuDNcOLPxLpr7zu7FXGp1cCAgH90ZdI_aIwTD6TU1zrwusnQuoccganNA4Elkqd8JyNQG0mxQR551glO8Lsla7cSvkQKIG3D4BYUaZ5LRgWH5-oUpSyq1GyZIIKbGagM4F5DpFKuPDeGbhiXll06S5mp4gNQEY4B6gmozmrfYs3F3Qm56-PlQbxDcrIMgUE7rRUgncPsGVGkBEJ8IuF7_rUBq1o3Z8GIf91V-0hcTmve_J-Ki-GTO7qhOTArN0fE1OUU3q6a9qSFLmg"}')`
                }}
            >
                <div className="container mx-auto px-4 py-12 flex flex-col items-center gap-8 z-10 w-full max-w-4xl text-center">
                    {/* Hero Text */}
                    <div className="space-y-4">
                        <h1
                            className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md"
                            dangerouslySetInnerHTML={{ __html: config.heroTitle || "Find Your Perfect Home in <br class='hidden md:block' /> the Heart of Delhi" }}
                        />
                        <p className="text-gray-100 text-base md:text-lg font-medium drop-shadow-sm max-w-2xl mx-auto">
                            {config.heroSubtitle || "Trusted by 10,000+ students, families, and professionals across the capital."}
                        </p>
                    </div>

                    {/* Search Component Box */}
                    <div className="w-full bg-white dark:bg-[#1a2632] rounded-xl shadow-2xl overflow-hidden p-2 md:p-6 mt-4 text-left">
                        {/* Tabs */}
                        <div className="flex border-b border-[#f0f2f4] dark:border-[#2a3642] mb-4 gap-6 px-2 overflow-x-auto">
                            <button className="flex items-center gap-2 border-b-[3px] border-primary pb-3 px-1 text-primary">
                                <span className="material-symbols-outlined text-[20px]">key</span>
                                <span className="text-sm font-bold">Rent</span>
                            </button>
                            <button
                                className="flex items-center gap-2 border-b-[3px] border-transparent pb-3 px-1 text-gray-500 dark:text-gray-400 hover:text-[#111418] dark:hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[20px]">real_estate_agent</span>
                                <span className="text-sm font-bold">Buy</span>
                            </button>
                            <button
                                className="flex items-center gap-2 border-b-[3px] border-transparent pb-3 px-1 text-gray-500 dark:text-gray-400 hover:text-[#111418] dark:hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[20px]">storefront</span>
                                <span className="text-sm font-bold">Commercial</span>
                            </button>
                        </div>
                        {/* Search Input & Button */}
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400">search</span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-3 py-3 border-none rounded-lg bg-[#f6f7f8] dark:bg-[#2a3642] text-[#111418] dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Search Location (e.g. Mukherjee Nagar, Dwarka)" type="text" />
                            </div>
                            <button
                                className="bg-primary hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                                <span>Search</span>
                            </button>
                        </div>
                        {/* Chips */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            <button className="flex items-center gap-1 bg-[#f0f2f4] dark:bg-[#2a3642] px-3 py-1.5 rounded-full text-xs font-medium text-[#111418] dark:text-gray-200 hover:bg-gray-200 transition-colors">
                                <span>Budget</span>
                                <span className="material-symbols-outlined text-[16px]">expand_more</span>
                            </button>
                            <button className="flex items-center gap-1 bg-[#f0f2f4] dark:bg-[#2a3642] px-3 py-1.5 rounded-full text-xs font-medium text-[#111418] dark:text-gray-200 hover:bg-gray-200 transition-colors">
                                <span>BHK Type</span>
                                <span className="material-symbols-outlined text-[16px]">expand_more</span>
                            </button>
                            <button className="flex items-center gap-1 bg-[#f0f2f4] dark:bg-[#2a3642] px-3 py-1.5 rounded-full text-xs font-medium text-[#111418] dark:text-gray-200 hover:bg-gray-200 transition-colors">
                                <span className="material-symbols-outlined text-[16px] text-green-600">train</span>
                                <span>Near Metro</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 space-y-20">

                {/* Personas / Categories */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white mb-2">Browse by Lifestyle</h2>
                        <p className="text-gray-500 dark:text-gray-400">Curated options tailored to your specific needs</p>
                    </div>
                    <div className="flex overflow-x-auto pb-4 gap-4 sm:gap-6 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 snap-x snap-mandatory no-scrollbar">
                        {/* Static Cards for Demo - in a real app these would be dynamic too */}
                        <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-shrink-0 snap-center group cursor-pointer relative overflow-hidden rounded-xl h-64 md:h-80">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMSDPrQIdBtsKjSr3j0DO82xwuvgCmUFzIdibcChtyBha9ujCBbHq2AjiH9Zin9vqn2bYOL-rDF6idWik2-It_PxWFvs5WfBIEkx1g1_4A-Rr9WeyYeP_npmDxcZnu97LV9p1j413s6rkE_acbNuKLRMgouI-PvmK1tLqFseQJwAy1RS52qegkEVLfWvGurj68i5FvaLkVYAlyKsBpu3uYl4LO-fFR5b10vdPEXwx_07OpkUIyytAUJMKW-0q41eME25Bzj0I7pwc" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                                <span className="material-symbols-outlined text-white mb-2 text-3xl">school</span>
                                <h3 className="text-white text-xl font-bold">Students</h3>
                                <p className="text-gray-200 text-sm mt-1 mb-3">Near campus &amp; coaching hubs</p>
                            </div>
                        </div>
                        <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-shrink-0 snap-center group cursor-pointer relative overflow-hidden rounded-xl h-64 md:h-80">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIltcf5aLLxzY8iNS4OxdGZ4MdXMH8Y6RWRKBriqFhsToEFhteIOoEpLis1hVjdgnIQL94J97oqpZd-Y-QU3FTlmLny6goQUyJE1jYijGDsT9kIxUrcuYNd3pNwNv5Rqrl1JNPaFGB2qYXPfBWXf0s0YMvchxAaIFg_JgYpRUH3-kWoBIApwPgHnXiXiQNKGuDDtOat5XZgsUyZvzw0TI7PVH4orX23Kihs2he-jmWSBpPBOLSW9cj2pbT-fYx-HpIXqTmly90o0Y" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                                <span className="material-symbols-outlined text-white mb-2 text-3xl">work</span>
                                <h3 className="text-white text-xl font-bold">Professionals</h3>
                                <p className="text-gray-200 text-sm mt-1 mb-3">Studios &amp; shared flats</p>
                            </div>
                        </div>
                        <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-shrink-0 snap-center group cursor-pointer relative overflow-hidden rounded-xl h-64 md:h-80">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmAYZIGXZp95TbLsSVk_L2o8mGhYrXtAV5ZNJqC7jOKKLXYETgcC4AlMM3XjJN0qAZBE7qbbDZoV6ULRBZyJOLtARMiTW1K8wR8gdIxNvirg3HhXDJSV25lRWNosY9c0Xt2m7QQWe41jEDEVar9I5p8ApIbCgamkJNmfCUfrLN_Y6UDzqcFcosDTca9kzK63Dc7n3gR397aBYbgMOYWdn4V2NVXE9ymaiWWh4m_zYzomxg74bu5sY6Bq5P_JeMOKJVB3CanRfs5g" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                                <span className="material-symbols-outlined text-white mb-2 text-3xl">family_restroom</span>
                                <h3 className="text-white text-xl font-bold">Families</h3>
                                <p className="text-gray-200 text-sm mt-1 mb-3">Spacious homes</p>
                            </div>
                        </div>
                        <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-shrink-0 snap-center group cursor-pointer relative overflow-hidden rounded-xl h-64 md:h-80">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBety62JLzVEmoaS8-0OjoJVtpURI93V2BR3CGhqGFpvepuiAf_BlKnL_k0V2109kuyLxjhrL8k84-N7ak1vZEMUdPv0i2ZXuXx2YLZyvvfrLPFIlXPk-re65SxC87_5dAg2c656CL1JMMLy60iTuzmaPgJ6MX942V5TLtgF90Fym1qf3gtnlt_kMFFw-Q8C0hsqkyb0-QQAG5QHL9YgpKIM-iUS5-LmsUuzGpsZ_xldPnhMrJDZEOLZpDKrSclhW14PFkkMYLJU_Q" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                                <span className="material-symbols-outlined text-white mb-2 text-3xl">store</span>
                                <h3 className="text-white text-xl font-bold">Commercial</h3>
                                <p className="text-gray-200 text-sm mt-1 mb-3">Offices</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Featured Listings */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white">Featured Properties</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">Handpicked listings across Delhi's top locations</p>
                        </div>
                        <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                            View All Listings <span className="material-symbols-outlined">arrow_right_alt</span>
                        </button>
                    </div>
                    <div className="flex overflow-x-auto pb-4 gap-4 md:gap-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 snap-x snap-mandatory no-scrollbar">
                        {/* Listing 1 */}
                        <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-shrink-0 snap-center bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden shadow-sm border border-[#f0f2f4] dark:border-[#2a3642] group hover:shadow-lg transition-all">
                            <div className="relative h-56 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCph0liwVGfDLJWY-OOs3aj5HF-eHE__uavt18ajs5ex6LIM1bSs02Ni5fp_xZzpffw7c1U03mBBx9FwU2hgX2Jw58EketgXITTg0EAhItXzg4RsEK0X-5mRytpLRHY9qZ8pXH_-nHvKs8uJttY3RjNvg4kqWJAeYa9UL5vovVKFEzWrmAvktfrarUWNiJRLkAiZae77RY49lmK7nbYj2C1ayLLQmy7KVPFkL5JA6JY11mMzFJIo4brW_fLfTjKGomkrbQF9wySj_g" alt="" />
                                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">VERIFIED</div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">3 BHK Luxury Floor</h3>
                                        <p className="text-gray-500 text-sm">GK I, South Delhi</p>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">RENT</span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-xl font-bold text-[#111418] dark:text-white">₹65,000<span className="text-sm font-normal text-gray-500">/mo</span></p>
                                    <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors">Book Visit</button>
                                </div>
                            </div>
                        </div>
                        {/* Listing 2 */}
                        <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-shrink-0 snap-center bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden shadow-sm border border-[#f0f2f4] dark:border-[#2a3642] group hover:shadow-lg transition-all">
                            <div className="relative h-56 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6iBjqf0rl6EX5aIwMTBtN10wc3nE13ZMPk1ld6tFVv5G6RrwRAB0p1Vin1Av7EYpLQK_hYZxvvDX3AUv9LCNYJnLjRDs_A-O_gInGcfjUM_Emi6ifCFg6qcH1c7A36j2ryqMybo-8U2E3sJMCjtnkWNdzRq6Zg4hQ8MxIWiE--UelhCzim8_N_pHnjzVaavEzAeruCYXNf_XHw5CvwslPTWs2ikPb-w-kGSm1uqlevvewG_3LYQNcqF2qvBC30SsijV55frQ2HRs" alt="" />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">Student Studio</h3>
                                        <p className="text-gray-500 text-sm">North Campus</p>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">RENT</span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-xl font-bold text-[#111418] dark:text-white">₹15,000<span className="text-sm font-normal text-gray-500">/mo</span></p>
                                    <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors">Book Visit</button>
                                </div>
                            </div>
                        </div>
                        {/* Listing 3 */}
                        <div className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 flex-shrink-0 snap-center bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden shadow-sm border border-[#f0f2f4] dark:border-[#2a3642] group hover:shadow-lg transition-all">
                            <div className="relative h-56 overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzuGT0o2erBt8WP8Mq318k4xC-H135sxufyHquAGt--RRZ7AvXuI5elUe22I-rVXUlLLzzLB5O5p_RzJyoVJr1svlHvimROt3q5DJ8eq2_WGt3iQEmrkA1KiyJXyS3ptcPmcBptYNPEwon5TxPpmoijmpl0LhGxSDmsiqn4hKhcyRempZkudQhIP-bDAWDrmvpm5apUrakPmTh43wIsQ-qFohR6P59fh11t7U7RNiXPk6cCUmFwhj2RJCpJxX2eBPPlpeDO_3YzYU" alt="" />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">2 BHK Appt</h3>
                                        <p className="text-gray-500 text-sm">Dwarka</p>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">BUY</span>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-xl font-bold text-[#111418] dark:text-white">₹45 Lakh</p>
                                    <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors">Enquire</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-[#eaf4fe] dark:bg-[#16202a] rounded-2xl p-8 md:p-12">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white mb-3">Why {config.brandName || "SK Properties"}?</h2>
                        <p className="text-gray-600 dark:text-gray-300">We make finding a home in the chaotic capital simple,
                            transparent, and brokerage-free for students.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1a2632] flex items-center justify-center text-primary shadow-sm mb-4">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">100% Verified</h3>
                            <p className="text-gray-500 text-sm">Personally visited by us.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1a2632] flex items-center justify-center text-primary shadow-sm mb-4">
                                <span className="material-symbols-outlined text-3xl">money_off</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Lowest Brokerage</h3>
                            <p className="text-gray-500 text-sm">Direct deals for students.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1a2632] flex items-center justify-center text-primary shadow-sm mb-4">
                                <span className="material-symbols-outlined text-3xl">support_agent</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Local Support</h3>
                            <p className="text-gray-500 text-sm">Offices in North & South Campus.</p>
                        </div>
                    </div>
                </section>

                {/* Locations / Map */}
                <section className="flex flex-col md:flex-row gap-8 bg-white dark:bg-[#1a2632] rounded-2xl border border-[#f0f2f4] dark:border-[#2a3642] overflow-hidden">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white mb-4">We cover the entire Capital</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">{config.address || "From North Campus to Gurgaon."}</p>
                            <button
                                onClick={() => window.open(config.mapUrl, '_blank')}
                                className="w-fit px-6 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Visit Nearest Office
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 min-h-[300px] bg-gray-200 relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0 w-full h-full border-0"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(config.address || "Delhi")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-[#1a2632] border-t border-[#f0f2f4] dark:border-[#2a3642] pt-16 pb-8">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                        <div className="max-w-xs">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">apartment</span>
                                </div>
                                <h2 className="text-xl font-bold">{config.brandName || "SK Properties"}</h2>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                                Simplifying real estate in India's capital. Whether you are a student, a family, or a business,
                                we have the space for you.
                            </p>
                            <div className="flex gap-4">
                                <a className="text-gray-400 hover:text-primary" href="#"><span
                                    className="material-symbols-outlined">thumb_up</span></a>
                                <a className="text-gray-400 hover:text-primary" href="#"><span
                                    className="material-symbols-outlined">chat_bubble</span></a>
                                <a className="text-gray-400 hover:text-primary" href="#"><span
                                    className="material-symbols-outlined">mail</span></a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
                            <div>
                                <h4 className="font-bold mb-4 text-[#111418] dark:text-white">Properties</h4>
                                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                    <li><a className="hover:text-primary" href="#">Buy House</a></li>
                                    <li><a className="hover:text-primary" href="#">Rent Flat</a></li>
                                    <li><a className="hover:text-primary" href="#">PG / Hostels</a></li>
                                    <li><a className="hover:text-primary" href="#">Commercial</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-[#111418] dark:text-white">Company</h4>
                                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                    <li><a className="hover:text-primary" href="#">About Us</a></li>
                                    <li><a className="hover:text-primary" href="#">Careers</a></li>
                                    <li><a className="hover:text-primary" href="#">Blog</a></li>
                                    <li><a className="hover:text-primary" href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-[#111418] dark:text-white">Support</h4>
                                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                    <li><a className="hover:text-primary" href="#">Help Center</a></li>
                                    <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                                    <li><a className="hover:text-primary" href="#">Legal</a></li>
                                    <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col md:flex-row justify-between items-center border-t border-[#f0f2f4] dark:border-[#2a3642] pt-8 gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} {config.brandName || "SK Properties"} Agency. All rights reserved.
                        </p>
                        <div className="text-xs text-gray-400 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">verified</span>
                            <span>RERA Registered: DEL-2023-9988</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Material Symbols Font */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </div>
    );
}
