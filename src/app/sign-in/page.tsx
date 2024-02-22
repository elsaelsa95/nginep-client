import FormsignIn from "@/component/FormSignIn";
import style from "./style.module.css";

export default function SignIn() {
  return (
    <section className={style.container}>
      <div className={style.header}>
        <h1>Welcome to Nginep</h1>
        <p>Sign in for better experience</p>
      </div>
      <FormsignIn />
    </section>
  )
}