"use client"

import style from "./style.module.css";
import Accordion from "@/component/Accordion";
import Form from "@/component/Form";
import { useEffect, useState } from "react";

export default function Contact() {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    const getQuestions = async () => {
      const question = await fetchQuestions()
      setQuestions(question)
    }
    getQuestions()
  }, [])

  const fetchQuestions = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions`)
    const data = await res.json()

    return data
  }
  return (
    <section className={style.container}>
      <div>
        <p className={style.title}>Contact Us</p>
        <p className={style.subtitle}>Have any questions? Feel free to contact us through the form below</p>
      </div>
      <Form />
      <Accordion data={questions} />
    </section>
  )
}
