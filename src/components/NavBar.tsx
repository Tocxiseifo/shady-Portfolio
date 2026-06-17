import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import { Drawer, IconButton } from "@mui/material"
import { motion, useScroll } from "motion/react"
import { useState } from "react"
import { Link } from "react-router"
import logo from "../assets/img/721402889_2046008006127556_3249889732184980421_n.jpg"

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Clients", to: "/clients" },
]

export default function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const hoverStyle = "relative inline-block cursor-pointer text-lg font-black text-white transition after:absolute after:left-0 after:top-8 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 lg:text-2xl"
    const { scrollYProgress } = useScroll()

    return(
        <motion.nav
            initial={{opacity:0 , y:-100}}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{duration:1 , ease:'easeOut' ,delay: 0.3}}
            className="fixed top-0 z-50 flex h-20 w-full items-center justify-center bg-black text-white sm:h-24"
        >
            <div className="flex w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity:0 , y:-100}}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                    className="flex min-w-0 items-center"
                >
                    <Link to="/" className="flex min-w-0 items-center">
                        <img src={logo} alt="Shady Nader logo" className="h-10 w-10 shrink-0 rounded-full border border-gray-300 object-cover" />
                        <span className="ml-2 truncate text-lg font-black text-white sm:text-2xl">shady nader</span>
                    </Link>
                </motion.div>

                <ul className="hidden items-center justify-center gap-6 font-black md:flex lg:gap-10 xl:gap-14">
                    {navLinks.map((link, index) => (
                        <motion.li
                            initial={{opacity:0 , y:-100}}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{duration:1 , ease:'easeOut' ,delay: 0.4 + index * 0.2}}
                            key={link.to}
                        >
                            <Link to={link.to} className={hoverStyle}>{link.label}</Link>
                        </motion.li>
                    ))}
                </ul>

                <motion.div
                    initial={{opacity:0 , y:-100}}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{duration:1 , ease:'easeOut' ,delay: 0.4}}
                    className="hidden items-center justify-center md:flex"
                >
                    <Link to="/#contact" className="rounded-full bg-gray-300 px-4 py-2 font-semibold text-black transition duration-300 hover:bg-gray-400">Contact Me</Link>
                </motion.div>

                <IconButton
                    aria-label="Open navigation menu"
                    onClick={() => setIsDrawerOpen(true)}
                    className="md:!hidden"
                    sx={{ color: "white" }}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: { xs: "min(82vw, 320px)", sm: 360 },
                        backgroundColor: "#050505",
                        color: "#fff",
                        borderLeft: "1px solid rgba(255,255,255,0.14)",
                    },
                }}
            >
                <div className="flex h-full flex-col px-6 py-6">
                    <div className="mb-10 flex items-center justify-between">
                        <div className="flex min-w-0 items-center">
                            <img src={logo} alt="Shady Nader logo" className="h-11 w-11 shrink-0 rounded-full border border-gray-300 object-cover" />
                            <span className="ml-3 truncate text-xl font-black">shady nader</span>
                        </div>
                        <IconButton
                            aria-label="Close navigation menu"
                            onClick={() => setIsDrawerOpen(false)}
                            sx={{ color: "white" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>

                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsDrawerOpen(false)}
                                className="rounded-md px-2 py-3 text-2xl font-black text-white transition duration-300 hover:bg-white/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/#contact"
                            onClick={() => setIsDrawerOpen(false)}
                            className="mt-4 rounded-full bg-gray-200 px-5 py-3 text-center text-lg font-black text-black transition duration-300 hover:bg-gray-400"
                        >
                            Contact Me
                        </Link>
                    </nav>
                </div>
            </Drawer>

            <motion.span style={{ scaleX: scrollYProgress, originX: 0 }} className="absolute bottom-0 left-0 h-[3px] w-full bg-white"></motion.span>
        </motion.nav>
    )
}
