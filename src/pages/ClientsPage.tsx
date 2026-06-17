import { motion } from "motion/react"
import { clientsAndCollaborations } from "../Data/Clients&Collaborations"

export default function ClientsPage() {
    return(
        <section className="flex h-auto w-full flex-col items-center justify-center gap-14 bg-linear-to-b from-black/90 to-white/65 px-4 pb-20 pt-36 font-black text-gray-200 sm:px-6 sm:pt-40 lg:px-8 lg:gap-20">
            <motion.span
                initial={{opacity:0 , y:-100}}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                className="flex h-auto w-full max-w-5xl items-center justify-center text-center text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-8xl"
            >
                Clients & Collaborations
            </motion.span>
            <motion.div
                initial={{opacity:0 , y:-100}}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                className="grid w-full max-w-7xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
                {clientsAndCollaborations.map((client , index) => (
                    <motion.div
                        initial={{opacity:0 , y:-100}}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0 }}
                        transition={{duration:1 , ease:'easeOut' ,delay:index * 0.8 }}
                        key={client.id}
                        className="flex h-auto min-w-0 flex-col items-center gap-3 rounded-md pb-5 text-center"
                    >
                        <img src={client.image} alt={client.name} className="h-36 w-36 rounded-full border-4 border-gray-200 object-cover sm:h-40 sm:w-40 lg:h-44 lg:w-44" />
                        <span className="text-xl font-black sm:text-2xl">{client.subs} Subs</span>
                        <a href={client.link} target="_blank" rel="noopener noreferrer" className="max-w-full break-words text-xl font-black underline transition duration-300 hover:text-gray-400 sm:text-2xl">{client.name}</a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
