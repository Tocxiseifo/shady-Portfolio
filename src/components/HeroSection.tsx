import { motion } from "motion/react";

export default function HeroSection() {
    return(
        <>
            <motion.section id="home" className="bg-linear-to-t from-black font-black to-white  text-gray-200 text-start h-256 w-full flex items-center justify-center">
                <div className="flex items-center justify-center w-450 gap-2 text-center">
                    {/* <div className='h-auto w-full rounded-md items-center  flex flex-col '>
                        {/* <motion.img initial={{opacity:0 , x:-100}}   animate={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} src='/src/assets/img/621137008_18067009832632017_2344232621693723112_n.jpg' alt='Profile' className='h-150 font-black w-120 rounded-md object-cover' /> */}
                        {/* <motion.span initial={{opacity:0 , y:100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className='text-4xl font-black relative top-5'>Shady Nader</motion.span> */}
                    {/*</div> */}
                    <motion.div initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className='font-black flex  text-4xl items-start  text-start justify-center gap-9'>
                        <motion.span initial={{opacity:0 , y:-100}} className='text-9xl font-black'  animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}>
                           Let's  
                        </motion.span>
                        <motion.span initial={{opacity:0 , y:-100}} className='text-9xl font-black'  animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.6}}>
                            grow 
                        </motion.span>
                        <motion.span initial={{opacity:0 , y:-100}} className='text-9xl font-black'  animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.8}}>
                            your  
                        </motion.span>
                        <motion.span initial={{opacity:0 , y:-100}} className='text-9xl font-black'  animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 1}}>
                            content 
                        </motion.span>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}