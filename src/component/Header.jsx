import header from "../assests/images/header play button.png"
import header1 from "../assests/images/header image.png"
import one from "../assests/images/01.png"
function Header() {
    return (<>

        <main class="flex flex-col md:flex-row w-full mt-0 md:mt-20 pt-10 pl-9 max-md:pl-4 max-md:pr-3">
            <div class="w-full  ">
                <h1 class="text-7xl text-[#42454A] font-[350] pt-10">LET'S RIDE</h1>
                <h1 class="text-7xl font-bold text-[#42454A]  w-fit">THE FUTURE.</h1>

                <hr class="border-t-4 border-[#42454A] mt-20 w-2/5" />

                <h2 class="text-[#42454A] my-12 text-xl">Simple and sleek design with users in mind.</h2>

                <div class="flex gap-5 md:gap-20 font-['Poppins','serif']">
                    <div class="flex gap-5 items-center">
                        <div class="bg-[#42454A] py-3 px-5 w-fit ">
                            <i class="fa-solid fa-arrow-right text-white text-lg"></i>
                        </div>
                        <h2 class="text-gray-900 font-bold hover:cursor-pointer hover:text-gray-900">Buy Now</h2>
                    </div>

                    <div class="flex gap-3 items-center">

                        <h2 class="w-full md:w-1/3 max-md:text-xs text-[#42454A] font-semibold"> Watch our Video how it works </h2>
                        <img src={header} alt="Play-Button" />

                    </div>
                </div>

            </div>




            <div class="w-full">
                <img src={header1} alt="" />
            </div>
        </main>
        <section class="w-full flex flex-row-reverse items-center px-4">
        <div class="flex px-10 gap-10">
            <img src={one} alt="01"/>
            <div class="flex items-center border h-fit self-center border-[#42454A] rounded-3xl" >
                <div class="px-6 py-3 border-r border-[#42454A]"><i class="fa-solid fa-greater-than xs fa-rotate-180"></i></div>
                <div class="px-6 py-3 "><i class="fa-solid fa-greater-than xs"></i></div>
            </div>
        </div>
    </section>
    </>)
}

export default Header