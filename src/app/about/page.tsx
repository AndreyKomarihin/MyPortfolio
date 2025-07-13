'use client'
import styles from "./about.module.scss";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {CloseCircleOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";

export default function About() {
    const [scroll, setScroll] = useState('hidden')

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            setScroll('auto')
        },1200)
    }, [])

    return (
        <motion.main className={styles.background}
                     initial={{height: 0,  bottom: "auto"}}
                     animate={{height: "100vh"}}
                     exit={{height: 0}}
                     transition={{duration: 0.7, ease: "easeInOut"}}
                     style={{
                         left: 0,
                         right: 0,
                         top: 0,
                         backgroundColor: "black",
                         zIndex: 1000,
                         overflow: scroll,
                         originY: 0
                     }}>
            <CloseCircleOutlined onClick={() => router.back()} className={styles.backIcon} style={{ fontSize: '40px', color: '#cacaca'}} />
            <motion.h1 className={styles.title}
                       initial={{y: -400, opacity: 0}}
                       animate={{y: 0, opacity: 1}}
                       transition={{

                           duration: 0.2,
                           type: "spring",
                           damping: 10,
                           stiffness: 100,
                       }}>A B O U T
            </motion.h1>
            <motion.p className={styles.aboutText}
                initial={{ y: -400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.2,
                    type: "spring",
                    damping: 10,
                    stiffness: 75,
                }}>
                I am Andrey, react developer who loves bringing design and code together to create intuitive solutions for complicated problems. <br/> Thank you very much for coming to this page :3
                <br/>
                Currently open to full time and contracting opportunities — View CV
            </motion.p>
            <motion.ul className={styles.contactsBox}
                       initial={{ y: -400, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{

                           duration: 0.2,
                           type: "spring",
                           damping: 10,
                           stiffness: 50,
                       }}>
                <li><a href='mailto:andreykomarihin@mail.ru' className={styles.contacts}>andreykomarihin@mail.ru</a></li>
                <li><a href='https://t.me/ankoii' target='target_blank' className={styles.contacts}>Telegram</a></li>
            </motion.ul>
        </motion.main>
    )
}

