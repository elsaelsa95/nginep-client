import FormRegister from "@/component/FormRegister";
import style from "./style.module.css";

export default function Register() {
  return (
    <section className={style.container}>
      <div className={style.header}>
        <h1>Welcome to Nginep</h1>
        <p>Create your account for better experience</p>
      </div>
      <FormRegister />
    </section>
  )
}
