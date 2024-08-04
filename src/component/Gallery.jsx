import scooter from "../assests/images/gallery scooter.png"
import quality from "../assests/images/gallery built quality.png"
import parts from "../assests/images/gallery parts.png"
function Gallery(){
    return(<>
    
    <section class="font-['Poppins','serif'] px-4 w-full overflow-x-clip">
        
        <div class="flex justify-center pl-9 max-md:pl-4 max-md:pr-3 mb-16 h-fit">
            <div>
                <h1 class="text-center text-5xl font-semibold mt-14 text-[#42454A]">Gallery</h1>
                <p class="text-[#42454A] text-lg mt-10">View gallery of our products and make yourself satisfied with our creation.</p>
            </div>
        </div>

        <div class="flex justify-between flex-col md:flex-row  gap-x-10">
            <div class="md:mt-40">
                <h1 class="relative top-16 left-7 sm:text-2xl md:text-3xl font-semibold text-[#42454A]">Scooter</h1>
                <img  src={scooter} alt="Gallery Scooter"/>
            </div>
            
            <div class="h-fit">
                <h1 class="relative top-8 sm:top-16 left-7 sm:text-2xl md:text-3xl font-semibold text-[#42454A]">Built Quality</h1>
                <img src={quality} alt="Gallery Built Quality"/>
            </div>
            
        </div>

        <div class="flex flex-col md:flex-row gap-x-10 w-full">
            
            <div class="md:w-1/2 flex flex-col max-md:items-center">
                <h1 class="text-center text-lg min-[364px]:text-xl leading-3 sm:text-3xl font-semibold my-7 text-[#42454A] border-[#42454A] border-2 rounded-lg sm:px-10 px-5 hover:bg-black hover:text-white sm:py-6 py-2 max-md:w-3/4 md:w-4/5">Battery Images</h1>

                <h1 class="text-center text-lg min-[364px]:text-xl leading-3 sm:text-3xl font-semibold my-7 text-[#42454A] border-[#42454A] border-2 rounded-lg sm:px-10 px-5 hover:bg-black hover:text-white sm:py-6 py-2 max-md:w-3/4 md:w-4/5">Spare Parts Images</h1>

                <h1 class="text-center text-lg min-[364px]:text-xl leading-4 sm:text-3xl font-semibold my-7 text-[#42454A] border-[#42454A] border-2 rounded-lg sm:px-10 px-5 hover:bg-black hover:text-white sm:py-6 py-2 max-md:w-3/4 md:w-4/5">Charging Cable Images</h1>
            </div>

            <div class="md:w-1/2">
                <h1 class="relative max-md:top-10 left-7 sm:text-2xl md:text-3xl font-semibold text-[#42454A]">Parts</h1>
                <img class="w-full md:-mt-20 " src={parts} alt="Gallery Parts"/>
            </div>
            
        </div>
    </section>

    </>)
}
export default Gallery