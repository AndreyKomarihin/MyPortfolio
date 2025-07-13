'use client'
import {motion} from "framer-motion";
import styles from "./skills.module.scss";
import {useEffect, useState} from "react";
import {CloseCircleOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";

export default function Skills(){
    const [scroll, setScroll] = useState('hidden')

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            setScroll('auto')
        },1000)
    })

    return (
        <motion.main className={styles.background}
            initial={{height: 0, top: 0, bottom: "auto"}}
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
                       initial={{ y: -400, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{
                           delay: 0.2,
                           duration: 0.2,
                           type: "spring",
                           damping: 10,
                           stiffness: 100,
                       }}>S K I L L S</motion.h1>
                <motion.ul className={styles.progressBox}
                           initial={{ y: -400, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{
                               delay: 0.2,
                               duration: 0.2,
                               type: "spring",
                               damping: 10,
                               stiffness: 50,
                           }}>
                    <li className={styles.progress}>
                        <img className={styles.card} src='/git.png' alt='GIT'/>
                        <p className={styles.progressText}>GIT</p>
                    </li>
                    <li className={styles.progress}>
                        <img className={styles.card} src='/jsts.png' alt='GIT'/>
                        <p className={styles.progressText}>JAVASCRIPT <br/>TYPESCRIPT</p>
                    </li>
                    <li className={styles.progress}>
                        <img className={styles.card} src='/css.png' alt='GIT'/>
                        <p className={styles.progressText}>CSS</p>
                    </li>
                    <li className={styles.progress}>
                        <img className={styles.card} src='/react.png' alt='GIT'/>
                        <p className={styles.progressText}>REACT <br/> REDUX</p>
                    </li>
                </motion.ul>

        </motion.main>

)
}
