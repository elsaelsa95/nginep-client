import style from "./style.module.css";
import Accordion from "@/component/Accordion";
import Form from "@/component/Form";

async function getData() {
  const res = await fetch(`http://localhost:8080/questions`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Contact() {
  const data = await getData()
  return (
    <section className={style.container}>
      <div>
        <p className={style.title}>Contact Us</p>
        <p className={style.subtitle}>Have any questions? Feel free to contact us through the form below</p>
      </div>
      <Form />
      <Accordion data={data} />
    </section>
  )
}
