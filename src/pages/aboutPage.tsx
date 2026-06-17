import { motion } from "motion/react";

export default function AboutPage() {
    return(
        <>
            <motion.section id="home" className="bg-linear-to-t from-white/65 font-black to-black  text-gray-200 text-start h-256 w-full flex items-center justify-center">
                <div className="flex items-center justify-center w-450 gap-2 text-center">
                    <div className='h-auto w-full rounded-md items-center  flex flex-col '>
                        <motion.img initial={{opacity:0 , x:-100}}   animate={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} src='/src/assets/img/721402889_2046008006127556_3249889732184980421_n.jpg' alt='Profile' className='h-150 font-black w-120 rounded-md object-cover' />
                        <motion.span initial={{opacity:0 , y:100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className='text-4xl font-black relative top-5'>Shady Nader</motion.span>
                    </div>
                    <motion.div initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className='font-black flex flex-col text-4xl items-start  text-start justify-center gap-30'>
                        <motion.span initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.6}}>
                           Let's grow your content Lead Editor & Team Manager specializing in high-retention YouTube storytelling.Strategy. Structure. Cinematic execution.
                        </motion.span>
                        <motion.span initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 1.0}}>
                            Built for Retention. Designed to Scale.
                            Creative Director with 3+ years of editing experience.
                        </motion.span>
                        <button  className='bg-gray-300 cursor-pointer text-2xl text-black px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300'>Contact Me</button>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}