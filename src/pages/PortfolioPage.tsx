import { PortfolioData } from "../Data/PortfolioData";
import imgs from '../../public/portfolio_img/720397740_1054240977267902_2376329844051476860_n.png'

import { motion } from "motion/react"

export default function PortfolioPage() {
    return(
        <>
            <main className="flex flex-col bg-linear-to-b from-black/95 to-white/65 items-center justify-center w-full h-auto gap-25">
                <section className="w-full h-210 bg-cover bg-center " style={{ backgroundImage: `url(${imgs})` }} >
                    <div className="w-full bg-linear-to-r from-black/95 to-transparent h-210 "></div>
                    <span className="text-white text-7xl absolute font-bold mt-20 w-full h-auto pl-45 items-start bottom-65">Proven Results</span>
                </section>
                <motion.span initial={{opacity:0 , x:-100}}   animate={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.3}} className="text-white text-3xl font-bold mt-20 w-full h-auto pl-45 items-start relative top-10">My Best Works:</motion.span>
                <section className="flex  flex-wrap items-center pl-45  justify-start h-auto w-full gap-25 pb-30 ">
                    {PortfolioData.map((data , index) =>(
                        <motion.div initial={{opacity:0 , x:-100}}   animate={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay:index * 0.6}} className="flex flex-col items-start justify-start w-120 h-60 rounded-md " key={data.id}>
                            <a href={data.link} target="_blank" className=""><img src={data.img} className="object-center rounded-md" alt="" /></a>
                            <motion.h3 initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: index * 0.7}} className="text-white text-lg font-bold mt-2 pb-10">{data.title}</motion.h3>
                        </motion.div>
                    ))}
                </section>
            </main>
        </>
    )
}