function Test() {
  return (<>
    <div class="my-4 font-[sans-serif] max-w-6xl max-md:max-w-lg mx-auto">
      <div class="md:mb-28 mb-12 text-center">
        <h2 class="text-gray-800 text-3xl font-extrabold">What our happy customer say</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6 relative">
        <div
          class="bg-gradient-to-tr from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] max-w-[65%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
        </div>

        <div class="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="https://readymadeui.com/profile_2.webp" class="w-10 h-10 rounded-full" />
            <h4 class="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">John Doe</h4>
            <p class="mt-0.5 text-xs text-gray-600"></p>
          </div>
          <div class="mt-4">
            <p class="text-gray-600 text-sm leading-relaxed">I’ve had my e-bike for a few months now, and it’s been a fantastic investment. It's lightweight, making it easy to carry upstairs, and it rides smoothly on various terrains. The stylish design always gets compliments, and it’s truly eco-friendly!</p>
          </div>
        </div>

        <div class="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="https://readymadeui.com/profile_3.webp" class="w-10 h-10 rounded-full" />
            <h4 class="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Mark Adair</h4>
            <p class="mt-0.5 text-xs text-gray-600"></p>
          </div>
          <div class="mt-4">
            <p class="text-gray-600 text-sm leading-relaxed">The e-bike is a game-changer for weekend adventures. It's powerful enough to handle steep hills effortlessly, and the durable build gives me confidence on rough trails. Plus, it’s eco-friendly, so I feel good about reducing my carbon footprint.</p>
          </div>
        </div>

        <div class="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
          <div>
            <img src="https://readymadeui.com/profile_4.webp" class="w-10 h-10 rounded-full" />
            <h4 class="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">Simon Konecki</h4>
            <p class="mt-0.5 text-xs text-gray-600"></p>
          </div>
          <div class="mt-4">
            <p class="text-gray-600 text-sm leading-relaxed">This e-bike has completely changed my daily commute. It's efficient, reliable, and the battery life is incredible. I love how I can easily switch between pedal assist and full electric mode depending on my energy levels. Highly recommend!</p>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default Test