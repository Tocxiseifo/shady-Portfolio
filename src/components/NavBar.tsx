import { motion, useScroll } from "motion/react"
import { Link } from "react-router"

export default function NavBar() {
    const HoverStyle = "text-white  font-seif text-2xl cursor relative inline-block after:content-[''] after:absolute after:left-0 after:top-8 gap-15  after:w-full after:h-[3px] after:bg-white hover:text-white  after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100 after:origin-left cursor-pointer max-lg:text-lg max-md:after:top-7 max-sm:text-sm"
    const {scrollYProgress} = useScroll()
    return(
        <>
            <motion.nav initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.3}} className="bg-black text-white  h-25 fixed top-0  z-50 flex flex-col items-center justify-center  w-full ">
                <div className="w-full h-auto flex items-center justify-between px-8">
                    <motion.div initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className='flex items-center justify-center h-auto w-50   '>
                        <img src="/src/assets/img/721402889_2046008006127556_3249889732184980421_n.jpg" alt="Logo" className="h-10 w-10 rounded-full object-cover border  border-gray-300 relative top-1" />
                        <span className='ml-2 text-white text-2xl  font-black'>shady nader</span>
                    </motion.div>
                    <ul  className="flex space-x-4 text-2xl h-auto justify-center font-black items-center relative right-15">
                        <motion.span initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} ><Link to={"/"} className={HoverStyle}>Home</Link></motion.span>
                        <motion.span initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.6}} ><Link to={"/about"} className={HoverStyle}>About</Link></motion.span>
                        <motion.span initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.8}} ><Link to={'/portfolio'} className={HoverStyle}>Portfolio</Link></motion.span>
                        <motion.span initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 1.0}} ><Link to={"/clients"} className={HoverStyle}>Clients</Link></motion.span>
                    </ul>
                    <motion.div initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}   className='flex items-center justify-center h-auto w-auto'>
                        <a href="#contact" className="bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-gray-400 transition  duration-300">Contact Me</a>
                    </motion.div>
                </div>
                <motion.span style={{ scaleX: scrollYProgress, originX: 0 }} className="border-2 w-full relative flex top-7 border-white"></motion.span>
            </motion.nav>
        </>
    )
}