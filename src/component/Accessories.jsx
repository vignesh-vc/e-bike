import accessories from "../assests/images/golf bag rock.png"
import shoprack from "../assests/images/shopping rack.png"
function Accessories(){
    return(<>
     <section class="font-['Poppins','serif'] px-4 ">
        <div class="flex justify-center pl-9 max-md:pl-4 max-md:pr-3 h-fit">
            <div>
                <h1 class="text-center text-5xl font-semibold mt-14 text-[#42454A]">Multiple Accessories</h1>
                <p class="text-[#42454A] text-lg mt-10">There are multiple modes for the scooter for your multiple needs.</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row my-10 md:my-28">
            <ul class="md:w-2/5">
                <li class="my-5"><h1 class="text-5xl font-semibold text-[#42454A]">Golf Bag Rock</h1></li>
                <li class="before:content-[url('')] text-sm md:text-lg my-5"><span class="relative bottom-5">Material: Aluminium alloy</span> </li>
                <li class="before:content-[url('')] text-sm md:text-lg my-5"><span class="relative bottom-5">Color: Black</span> </li>
                <li class="before:content-[url('')] text-sm md:text-lg my-5"><span class="relative bottom-5">Capacity: 45lbs</span> </li>
                <li class="before:content-[url('')] text-sm md:text-lg my-5"><span class="relative bottom-5"> Ease: Steady & adjustable</span></li>
            </ul>

            <div class="md:w-3/5">
                <img class="w-full" src={accessories} alt=""/>
            </div>

        </div>
    </section>

    
    <section class="font-['Poppins','serif'] sm:pr-4 flex flex-col w-full">

        <div class="flex flex-col md:flex-row justify-between md:gap-24  " >

            <img class="max-md: order-2 md:order-1 md:w-1/2 xl:w-full" src={shoprack} alt="Shopping Rack"/>

            
                <ul class="max-md:order-1  max-md:pl-4 w-full md:order-2 ">
                    
                    <li class="my-5"><h1 class="text-5xl font-semibold text-[#42454A]">Shopping Rack</h1></li>
                    <li class="before:content-[url('')] text-sm md:text-lg my-5 "><span class="relative bottom-5">Material: Aluminium alloy</span> </li>
                    <li class="before:content-[url('')] text-sm md:text-lg my-5"><span class="relative bottom-5">Color: Black</span> </li>
                    <li class="before:content-[url('')] text-sm md:text-lg my-5"><span class="relative bottom-5">Capacity: 45lbs</span> </li>
                    <li class="before:content-[url('')] text-sm md:text-lg my-5"><span class="relative bottom-5"> Ease: Steady & adjustable</span></li>
                </ul>
        </div>

        <h1 class="text-center justify-self-center self-center text-lg min-[364px]:text-xl leading-3 sm:text-3xl font-semibold my-14 text-[#42454A] border-[#42454A] border-2 w-fit rounded-lg sm:px-10 px-5 hover:bg-black hover:text-white sm:py-8 py-4">More Accessories Coming Soon</h1>

    </section>
    </>)
}

export default Accessories