import React from "react";

function Contents() {
    return(
<div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-16 text-center">
            We work with India's largest companies--helping several become global champions--and with smaller,
            dynamic ones looking to mobilize change and <a href="#" className="text-blue-600 underline">accelerate sustainable and inclusive growth</a>. We partner
            with government leaders to help drive growth and build capabilities. Our insights are shaped by leading
            industry experts, cutting-edge digital and analytics tools, and our decades of experience serving the
            world's largest corporations.
          </p>

          <h2 className="text-2xl font-bold text-center mb-12 text-black">OUR IMPACT</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-r border-gray-300 last:border-r-0">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">30+</h3>
              <p className="text-xl mb-2 text-black">years in India,</p>
              <p className="text-sm text-gray-600">opening our first office in Mumbai in 1992</p>
            </div>
            <div className="border-r border-gray-300 last:border-r-0">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">900+</h3>
              <p className="text-xl mb-2 text-black">engagements</p>
              <p className="text-sm text-gray-600">completed since 2017</p>
            </div>
            <div className="border-r border-gray-300 last:border-r-0">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">850+</h3>
              <p className="text-xl mb-2 text-black">partners and consultants</p>
              <p className="text-sm text-gray-600">across four locations</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mt-16 text-black">FEATURED INSIGHTS</h2>
        </div>
        <div className=" md:flex-row">
      {/* Top section / Left section on larger screens */}
      <div className=" w-10/12 ml-24 p-8 bg-white hover:shadow-xl">
        <div className="mb-8">
            <div className=" flex flex-row">
            <img
          src="/vite.svg"
          alt="City skyline"
          className="w-full h-64 object-cover rounded-lg"
        />

          <p className="text-lg text-black text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">India Ahead &gt;</h2>
            As India crosses 75 years of independence, governments, businesses
            and local communities are looking ahead to create sustainable, inclusive
            growth and opportunities to fulfil the country's true potential. Browse
            key insights in this collection of interviews, reports and multimedia
            content.
          </p>
            </div>
       
        </div>
      
      </div>

      {/* Bottom section / Right section on larger screens */}
      <div className="w-full my-10 bg-gray-900 text-white p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-bold mb-4">Creating value beyond the hype</h2>
          <p className="text-xl mb-8">
            Let's deliver on the promise of technology from strategy to scale.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full inline-flex items-center">
            Get started
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex justify-end mt-8">
          <div className="relative w-64 h-48">
            <div className="absolute right-0 top-0 w-32 h-24 bg-blue-600 flex items-center justify-center text-2xl font-bold">
              Never
            </div>
            <div className="absolute right-16 top-12 w-32 h-24 bg-green-500 flex items-center justify-center text-2xl font-bold">
              just
            </div>
            <div className="absolute right-0 bottom-0 w-48 h-24 bg-cyan-400 flex items-center justify-center text-2xl font-bold">
              tech
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
}

export default Contents;