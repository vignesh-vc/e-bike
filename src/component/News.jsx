function News(){
    return(<>
    <div class="bg-gradient-to-t from-purple-200 via-purple-50 to-purple-50 py-20 px-4 font-[sans-serif]">
      <div class="max-w-4xl w-full mx-auto text-center">
        <h2 class="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 leading-[45px]">Subscribe Our Newsletter</h2>
        <p class="text-base text-gray-600">Stay updated with our latest news and exclusive offers. Join our community today!</p>

        <div class="mt-12 bg-white flex items-center sm:p-4 p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
          <input type="email" placeholder="Enter your email" class="w-full bg-transparent py-4 px-2 text-gray-800 text-base border-none outline-none" />
          <button class="bg-gray-700 hover:bg-black text-white text-base font-semibold py-4 px-4 sm:px-8 rounded-xl focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </>)
}
export default News