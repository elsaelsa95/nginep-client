import style from "./style.module.css";

export interface IButton {
    onClick?: () => void
    children: string
    status?: boolean
}
export default function Button({ onClick, children, status }: IButton) {
    return (
        <>
            {status == true ?
                <button onClick={onClick} className={style.buttonActive}>
                    {children}
                </button> :
                <button onClick={onClick} className={style.buttonInactive}>
                    {children}
                </button>
            }
        </>
    )
}