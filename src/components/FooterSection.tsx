import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";

export default function FooterSection() {
    const HoverStyle = "text-white  font-seif text-2xl cursor relative inline-block after:content-[''] after:absolute after:left-0 after:top-8 gap-15  after:w-full after:h-[3px] after:bg-white hover:text-white  after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100 after:origin-left cursor-pointer max-lg:text-lg max-md:after:top-7 max-sm:text-sm"

    return(
        <>
            <section className="bg-linear-to-t from-black to-white/65 pb-10  text-gray-200  h-100 w-full flex items-center justify-center">
                <div className="flex items-center justify-center w-full gap-20">
                    <a href="#home" className={HoverStyle}>Home</a>
                    <a href="#portfolio" className={HoverStyle}>Portfolio</a>
                    <a href="#contact" className={HoverStyle}>Clients</a>
                    <a href="https://www.instagram.com/shadynader/" target="_blank" className='text-2xl font-black relative top-5 hover:bg-gray-400 duration-300 hover:duration-300 transition border-2 border-gray-400 hover:border-gray-400  rounded-full w-12 h-12 flex items-center justify-center'><FaInstagram /></a>
                    <a href="https://www.facebook.com/shadynader/" target="_blank" className='text-2xl font-black relative top-5 hover:bg-gray-400 duration-300 hover:duration-300 transition border-2 border-gray-400 hover:border-gray-400 rounded-full w-12 h-12 flex items-center justify-center' ><TiSocialFacebookCircular /></a>
                    <span className='text-2xl font-black relative top-5'>© 2024 Shady Nader. All rights reserved.</span>
                </div>
            </section>
        </>
    )
}