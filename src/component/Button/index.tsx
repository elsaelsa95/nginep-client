import style from "./style.module.css";

export interface IButton {
    onClick?: () => void
    children: string
}
export default function Button({ onClick, children }: IButton) {
    return (
        <button onClick={onClick} className={style.button}>
            {children}
        </button>
    )
}