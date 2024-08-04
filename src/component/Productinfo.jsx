import info from "../assests/images/product information image.png"

function Productinfo(){
    return(<>
      <section class="font-['Poppins','serif'] grid grid-rows-[1fr_1fr] gap-5 h-[930px] ">

<div class="flex justify-center pl-9 max-md:pl-4 max-md:pr-3 h-fit">
    <div>
        <h1 class="text-center text-5xl font-semibold mt-14 text-[#42454A]">Product Information</h1>
        <p class="text-[#42454A] text-lg mt-10">Our Scooter has following unique design and technology features:</p>
    </div>
</div>


<div class="flex max-md:flex-col items-center justify-between h-fit">
    <div>
        <img class="w-full" src={info} alt="Product-Information Image\"/>
    </div>

    <div class="flex justify-center items-center w-1/2 ">
        <ul class=" flex flex-col text-[#42454A] text-sm md:text-lg relative">
            
            <li class="list-image-[url('')] my-2 md:my-3 relative"> <span class="relative bottom-5 max-[612px]:bottom-8"><i class="fa-solid fa-arrow-right fa-beat-fade pr-5"></i>Lightweight aircraft grade aluminium frame</span> 
            </li>
            
            <li class="list-image-[url()] my-3"> <span class="relative bottom-5 max-[355px]:bottom-8"><i class="fa-solid fa-arrow-right fa-beat-fade pr-5"></i>Car grade lithium battery</span> </li>
            <li class="list-image-[url()] my-3"> <span class="relative bottom-5"><i class="fa-solid fa-arrow-right fa-beat-fade pr-5"></i>Self-balanced</span> </li>
            <li class="list-image-[url()] my-3"> <span class="relative bottom-5"><i class="fa-solid fa-arrow-right fa-beat-fade pr-5"></i>Plug n play</span> </li>
            <li class="list-image-[url()] my-3"> <span class="relative bottom-5"><i class="fa-solid fa-arrow-right fa-beat-fade pr-5"></i>Quick release adapter</span> </li>
            <li class="list-image-[url()] my-3"> <span class="relative bottom-5"><i class="fa-solid fa-arrow-right fa-beat-fade pr-5"></i>RFID  key card</span> </li>
        </ul>
    </div>
</div>
</section>
    </>)
}

export default Productinfo