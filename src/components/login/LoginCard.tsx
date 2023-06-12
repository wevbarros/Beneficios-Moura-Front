import React from "react";
import styles from './LoginCard.module.scss';

interface LoginCardProps {
  title: string;
  children: React.ReactNode;
}

export default function LoginCard({ title, children }: LoginCardProps) {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h4 className={`${styles.title} ${styles.largeTitle}`}>{title}</h4>
                {children}
            </div>
        </div>
    )
}
