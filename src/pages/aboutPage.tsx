import { motion } from "motion/react";
import img from "../assets/img/721402889_2046008006127556_3249889732184980421_n.jpg"

export default function AboutPage() {
    return(
        <motion.section id="home" className="flex min-h-screen w-full items-center justify-center bg-linear-to-t from-white/65 to-black px-4 pb-20 pt-36 font-black text-gray-200 sm:px-6 sm:pt-40 lg:px-8">
            <div className="grid w-full max-w-7xl items-center gap-12 text-center lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:text-start">
                <div className="flex h-auto w-full flex-col items-center rounded-md">
                    <motion.img
                        initial={{opacity:0 , x:-100}}
                        animate={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                        src={img}
                        alt="Shady Nader profile"
                        className="aspect-[4/5] w-full max-w-xs rounded-md object-cover font-black shadow-2xl shadow-black/30 sm:max-w-sm lg:max-w-md"
                    />
                    <motion.span
                        initial={{opacity:0 , y:100}}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                        className="mt-5 text-3xl font-black sm:text-4xl"
                    >
                        Shady Nader
                    </motion.span>
                </div>
                <motion.div
                    initial={{opacity:0 , y:-100}}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                    className="flex flex-col items-center justify-center gap-8 text-2xl font-black leading-tight sm:text-3xl lg:items-start lg:gap-12 lg:text-4xl"
                >
                    <motion.span initial={{opacity:0 , y:-100}} animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.6}}>
                        Let's grow your content Lead Editor & Team Manager specializing in high-retention YouTube storytelling. Strategy. Structure. Cinematic execution.
                    </motion.span>
                    <motion.span initial={{opacity:0 , y:-100}} animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 1.0}}>
                        Built for Retention. Designed to Scale. Creative Director with 3+ years of editing experience.
                    </motion.span>
                    <a href="/#contact" className="cursor-pointer rounded-full bg-gray-300 px-5 py-3 text-xl text-black transition duration-300 hover:bg-gray-400 sm:text-2xl">Contact Me</a>
                </motion.div>
            </div>
        </motion.section>
    )
}
