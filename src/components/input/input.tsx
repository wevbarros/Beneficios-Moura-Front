import React from "react";
import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
    return (
        <input className={styles.input} {...props} />
    )
}
