import { PortfolioData } from "../Data/PortfolioData";
import imgs from '../assets/portfolio_img/720397740_1054240977267902_2376329844051476860_n.png'
import { motion } from "motion/react"

export default function PortfolioPage() {
    return(
        <main className="flex h-auto w-full flex-col bg-linear-to-b from-black/95 to-white/65">
            <section className="relative flex min-h-[420px] w-full items-end bg-cover bg-center px-4 pb-14 pt-32 sm:min-h-[520px] sm:px-6 sm:pt-36 lg:min-h-[720px] lg:px-8 lg:pb-24" style={{ backgroundImage: `url(${imgs})` }} >
                <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/65 to-transparent"></div>
                <div className="relative z-10 mx-auto w-full max-w-7xl">
                    <span className="block text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">Proven Results</span>
                </div>
            </section>

            <section className="mx-auto flex h-auto w-full max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <motion.span
                    initial={{opacity:0 , x:-100}}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{duration:1 , ease:'easeOut' ,delay: 0.3}}
                    className="text-2xl font-bold text-white sm:text-3xl"
                >
                    My Best Works:
                </motion.span>
                <div className="grid h-auto w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                    {PortfolioData.map((data , index) =>(
                        <motion.div
                            initial={{opacity:0 , x:-100}}
                            animate={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{duration:1 , ease:'easeOut' ,delay:index * 0.6}}
                            className="group flex min-w-0 flex-col items-start justify-start rounded-md"
                            key={data.id}
                        >
                            <a href={data.link} target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-md">
                                <img src={data.img} className="aspect-video w-full rounded-md object-cover object-center transition duration-300 group-hover:scale-[1.03]" alt={data.title} />
                            </a>
                            <motion.h3
                                initial={{opacity:0 , y:-100}}
                                animate={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{duration:1 , ease:'easeOut' ,delay: index * 0.7}}
                                className="mt-3 max-w-full break-words pb-4 text-base font-bold leading-snug text-white sm:text-lg"
                            >
                                {data.title}
                            </motion.h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    )
}
