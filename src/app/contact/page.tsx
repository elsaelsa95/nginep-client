import style from "./style.module.css";
import Accordion from "@/component/Accordion";
import { faq } from "@/data/faq";
import Form from "@/component/Form";

export default function Contact() {
  return (
    <section className={style.container}>
      <div>
        <p className={style.title}>Contact Us</p>
        <p className={style.subtitle}>Have any questions? Feel free to contact us through the form below</p>
      </div>
      <Form />
      <Accordion data={faq} />
    </section>
  )
}
