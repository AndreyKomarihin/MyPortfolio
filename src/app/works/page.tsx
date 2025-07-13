'use client'
import styles from './works.module.scss'
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {CloseCircleOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";

export default function Works() {
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
                       }}>W O R K S
            </motion.h1>
            <motion.div className={styles.workContainer}
                        initial={{y: -400, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            delay: 0.2,
                            duration: 0.2,
                            type: "spring",
                            damping: 10,
                            stiffness: 75,
                        }}>
                <a href='https://my-instructor.ru/' target='target_blank'><img className={styles.logo} src='/my-instructor-logo.png' alt='Мой инструктор'/></a>
                <h3 className={styles.positionText}>
                    Middle Frontend Developer
                </h3>
                <p className={styles.defaultText}>Key responsibilities:</p>
                    <ul className={styles.list}>
                        <li>Full cycle of user interface (UI) development from scratch.</li>
                        <li>Design and adoption of architectural decisions for scalable applications.</li>
                        <li>Adaptive and cross-browser layout in compliance with modern standards.</li>
                        <li>Configuration of assembly (Webpack, Vite) and deployment processes (Docker).</li>
                        <li>Decomposition and prioritization of tasks for efficient implementation of functionality.</li>
                    </ul>
                <p className={styles.defaultText}>
                    Technology stack:
                    Next.js, React, TypeScript, Redux (RTK), Docker, Sentry, SCSS, Storybook, Webpack, Vite, GitHub,
                    JavaScript / TypeScript, Capacitor, React Query, Zustand.
                </p>

            </motion.div>
        </motion.main>
    )
}

