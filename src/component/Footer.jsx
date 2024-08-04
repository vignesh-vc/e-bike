import footer from "../assests/images/footer scooter.png"
function Footer(){
    return(<>
    
    <footer class="font-['Poppins','sans-serif'] bg-[#42454A] pt-10 pb-20 relative">

        <div class="flex flex-col max-md:items-start md:flex-row-reverse relative">

            <img class="md:absolute left-0 -bottom-10 sm:w-2/4 md:w-[36%]" src={footer} alt="Footer Scooter"/>

            <div class="max-md:self-center flex flex-col max-md:items-center md:flex-row justify-evenly md:w-1/2">
                
                <ul>
                    <li class="my-8"><h1 class="max-md:text-center text-xl font-bold text-gray-200 hover:text-black">About</h1></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Company</a></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Teams</a></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Profile</a></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Careers</a></li>
                </ul>
    
                
                <ul>
                    <li class="my-8"><h1 class="max-md:text-center text-xl font-bold text-gray-200 hover:text-black">Resources</h1></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Contact</a></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Application</a></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">FQA Features</a></li>
                </ul>
    
                
                
                <ul>
                    <li class="my-8"><h1 class="max-md:text-center text-xl font-bold text-gray-200 hover:text-black">Legals</h1></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Copyright Privacy</a></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Policy Disclaimer</a></li>
                    <li class="my-6 max-md:text-center text-gray-200 hover:text-black"><a href="#">Terms</a></li>
                    <li class="mt-11 max-md:text-center flex justify-between">
                        <i data-facebook="Facebook Logo" class="fa-brands fa-facebook fa-2xl text-white"></i>
                        
                        <i class="fa-brands fa-square-twitter fa-2xl rounded-full text-white" ></i>

                        <i class="fa-brands fa-instagram fa-2xl text-white"></i>
                    </li>
                </ul>
            </div>

        </div>

        
        
        <h1 class="mx-auto w-full text-center text-gray-200  absolute bottom-5 max-md:text-sm">&copy; Copyright 2024. All rights reserved By Vignesh</h1>


    </footer>
    </>)
}
export default Footer