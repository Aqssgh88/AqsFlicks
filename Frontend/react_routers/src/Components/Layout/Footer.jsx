export const Footer = () => {
  return (
    <footer className="section-footer bg-gradient-to-r from-purple-800 via-black to-purple-800 text-gray-300 py-12 px-10">
    <div className="footer-container container mx-auto lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Content 1: Branding */}
      <div className="content_1">
        <h4 className="text-2xl font-bold text-yellow-400 mb-4">AqsFlicks</h4>
        <p className="text-sm mb-6">
          Welcome to AqsFlicks – Your favorite films and shows, just a tap away!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" className="w-32 opacity-80 hover:opacity-100 transition duration-300" />
      </div>
      
      {/* Content 2: Watching Links */}
      <div className="content_2">
        <h4 className="text-lg font-semibold text-yellow-400 mb-4">WATCHING</h4>
        <a href="#" className="block text-sm mb-2 hover:text-yellow-400 transition">New Releases</a>
        <a href="#" className="block text-sm mb-2 hover:text-yellow-400 transition">Top-Rated Movies</a>
        <a href="#" className="block text-sm mb-2 hover:text-yellow-400 transition">Family Movies</a>
        <a href="#" className="block text-sm mb-2 hover:text-yellow-400 transition">Popular TV Shows</a>
        <a href="#" className="block text-sm hover:text-yellow-400 transition">Exclusive Discounts</a>
      </div>
      
      {/* Content 3: Experience Links */}
      <div className="content_3">
        <h4 className="text-lg font-semibold text-yellow-400 mb-4">EXPERIENCE</h4>
        <a href="./contact.html" className="block text-sm mb-2 hover:text-yellow-400 transition">Contact Us</a>
        <a href="#" target="_blank" className="block text-sm mb-2 hover:text-yellow-400 transition">Payment Methods</a>
        <a href="#" target="_blank" className="block text-sm mb-2 hover:text-yellow-400 transition">Streaming Options</a>
        <a href="#" target="_blank" className="block text-sm hover:text-yellow-400 transition">Return & Exchange Policy</a>
      </div>
      
      {/* Content 4: Newsletter */}
      <div className="content_4">
        <h4 className="text-lg font-semibold text-yellow-400 mb-4">NEWSLETTER</h4>
        <p className="text-sm mb-6">
          Be the first to know about new movies, TV shows, sales & promos!
        </p>
        <div className="relative mb-4">
          {/* <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 bg-gray-800 text-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"/> */}
          <i className="bx bx-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
        <hr className="border-gray-700" />
        <a href="/contact" className="inline-block">
      <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
        Contact Us
      </button>
    </a>
      </div>
    </div>
  
    {/* Footer Design Credit */}
    <div className="f-design text-center mt-10">
    <p className="text-sm text-gray-500">Design and Code by Aqs</p>
    </div>
  </footer>
  
  );
};
