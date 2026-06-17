import { motion } from "motion/react"
import { clientsAndCollaborations } from "../Data/Clients&Collaborations"
import { Link } from "react-router"

export default function ClientsCollaborations() {
    return(
        <>
            <section className="bg-black/90 pb-10  text-gray-200  h-auto w-full flex flex-col  items-center font-black  justify-center gap-40">
                <motion.span initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className="w-full h-auto text-8xl text-center flex justify-center items-center">Clients & Collaborations</motion.span>
                <motion.div initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className="flex items-start flex-wrap justify-start w-full gap-5">
                    {clientsAndCollaborations.slice(0, 6).map((client , index) => (
                        <motion.div initial={{opacity:0 , y:-100}}   animate={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay:index * 0.8 }} key={client.id} className='h-auto w-150 rounded-md  items-center pb-5 gap-3  flex flex-col '>
                            <img src={client.image} alt={client.name} className='h-45 w-45 border-5 border-gray-200 rounded-full object-cover' />
                            <span className='text-2xl font-black relative top-5'>{client.subs} Subs</span>
                            <a href={client.link} target="_blank" className='text-2xl font-black relative underline top-5 hover:text-gray-400 duration-300 hover:duration-300 transition'>{client.name}</a>
                        </motion.div>
                    ))}
                </motion.div>
                <Link to="/clients" className="text-white text-lg font-bold relative right-10  hover:bg-white/85 hover:duration-300 duration-300 transition-all cursor-pointer   w-30 h-12 text-center rounded-full  flex bg-white/65  items-center justify-center  ">See More</Link>
            </section>
        </>
    )
}