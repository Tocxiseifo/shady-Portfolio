import { motion } from "motion/react";

export default function HeroSection() {
    return(
        <motion.section id="home" className="flex min-h-screen w-full items-center justify-center bg-linear-to-t from-black to-white px-4 py-28 pt-36 font-black text-gray-200 sm:px-6 sm:py-32 sm:pt-40 lg:px-8">
            <div className="flex w-full max-w-7xl items-center justify-center text-center">
                <motion.div
                    initial={{opacity:0 , y:-100}}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                    className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center sm:gap-x-6 lg:gap-x-9"
                >
                    <motion.span initial={{opacity:0 , y:-100}} className="text-5xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl" animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}>
                        Let's
                    </motion.span>
                    <motion.span initial={{opacity:0 , y:-100}} className="text-5xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl" animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.6}}>
                        grow
                    </motion.span>
                    <motion.span initial={{opacity:0 , y:-100}} className="text-5xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl" animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.8}}>
                        your
                    </motion.span>
                    <motion.span initial={{opacity:0 , y:-100}} className="text-5xl font-black leading-none sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl" animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 1}}>
                        content
                    </motion.span>
                </motion.div>
            </div>
        </motion.section>
    )
}
