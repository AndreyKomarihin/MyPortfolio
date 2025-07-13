'use client'
import styles from './informationPage.module.scss'
import {useRouter} from "next/navigation";
import {AnimatePresence, motion} from 'framer-motion';
import {useState} from "react";

export const InformationPage = () => {
    const router = useRouter()
    const [positionCard, setPositionCard] = useState(0)
    const [isTransition, setIsTransition] = useState(false)



    const handleNavigate = (route:string) => {

        setPositionCard(-1000)
        setIsTransition(true)
        setTimeout(() => {
            router.push(route)
        }, 500)
        setTimeout(() => {
            setIsTransition(false)
        }, 1000)
    }

    const cards = [
        { img: '/about-card.png', alt: 'about', route: '/about' },
        { img: '/skills-card.png', alt: 'skills', route: '/skills' },
        { img: '/works-card.png', alt: 'works', route: '/works' },
]

    return (
            <main
                className={styles.background}
            >
                <AnimatePresence>
                    {isTransition && (
                        <motion.div
                            initial={{ height: 0, bottom: 0, top: "auto" }}
                            animate={{ height: "100vh" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{
                                position: "fixed",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "black",
                                zIndex: 1000,
                                overflow: "hidden",
                                originY: 1
                            }}
                        />
                    )}
                </AnimatePresence>
                <div className={styles.contentContainer}>
                    <motion.h1
                               className={styles.aboutText}
                               initial={{ y: -400, opacity: 0 }}
                               animate={{ y: positionCard, opacity: 1 }}
                               transition={{
                                   duration: 0.7,
                                   type: "spring",
                                   damping: 10,
                                   stiffness: 100,
                               }}
                               >
                        Andrey Komarihin. Frontend Developer. <br/>
                        Creating simple and complicated websites!
                        </motion.h1>
                    <ul className={styles.cardBox}>
                        {cards.map((card, index) => (
                            <motion.li initial={{ y: -400, opacity: 0 }}
                                       animate={{ y: positionCard, opacity: 1 }}
                                       transition={{
                                           duration: 0.5,
                                           type: "spring",
                                           damping: 10,
                                           stiffness: 50,
                                       }}
                                       style={{
                                           overflow: "hidden"
                                       }}
                                       onClick={() => {
                                handleNavigate(card.route)
                            }} key={index}><img className={styles.card} src={card.img} alt={card.alt}/></motion.li>
                        ))}
                    </ul>
                </div>
            </main>
)
}