import one from "../assests/images/color-scooter-1.png"
import two from "../assests/images/color-scooter-2.png"
import three from "../assests/images/color-scooter-3.png"
import four from "../assests/images/color-scooter-4.png"
import five from "../assests/images/gallery scooter.png"

function Colors(){
    return(<>
     <section class="ont-['Poppins','serif'] w-full">

<div class="flex justify-center pl-9 max-md:pl-4 max-md:pr-3 mb-16 h-fit">
    <div>
        <h1 class="text-center text-5xl font-semibold mt-14 text-[#42454A]">Colors</h1>
        <p class="text-[#42454A] text-lg mt-10 font-semibold font-['Montserrat','serif']">Checkout our Products</p>
    </div>
</div>

<div class="w-full ">
    <img class="w-full " src={five} alt="Gallery Scooter"/>
</div>

<div class="flex flex-col md:flex-row justify-between items-center w-full">

    <div class="relative">
        <img src={one} alt="Blue Color"/>
        <h1 class="bottom-20 absolute right-16 text-white opacity-60 text-7xl font-bold">01</h1>
    </div>
    
    <div class="relative">
        <img src={two} alt="Green Color"/>
        <h1 class="bottom-20 absolute right-16 text-white opacity-60 text-7xl font-bold">02</h1>
    </div>

    <div class="relative">
        <img src={three} alt="Red Color"/>
        <h1 class="bottom-20 absolute right-16 text-white opacity-60 text-7xl font-bold">03</h1>
    </div>

    <div class="relative">
        <img src={four} alt="Black Color"/>
        <h1 class="bottom-20 absolute right-14 text-white opacity-60 text-7xl font-bold">04</h1>
    </div>
</div>
</section>
    </>)
}
export default Colors