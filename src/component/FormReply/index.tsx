"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";
import Button from "@/component/Button";
import { Question } from "@/interfaces/faq";
import { useState } from "react";

type Inputs = {
    questionId: string
    question: Question
    message: string
}

export default function FormReply({ questionId, question }: Inputs) {
    let username: any
    let userId: any
    if (typeof window !== 'undefined') {
        username = localStorage.getItem("username") ? localStorage.getItem("username") : null;
        userId = localStorage.getItem("id") ? localStorage.getItem("id") : null;
    }

    const [curr, setCurr] = useState<Question>(question);

    const uuid = Math.random().toString(36).slice(-6);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const answer = curr?.answer?.push({
                id: uuid,
                userId: userId,
                name: username,
                date: new Date().toLocaleDateString(),
                answer: data.message
            }
            )
            const response = await fetch(`http://localhost:8080/questions/${questionId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: curr.id,
                    userId: curr.userId,
                    name: curr.name,
                    date: curr.date,
                    question: curr.question,
                    answer: curr.answer
                })
            })
            window.location.reload()
        } catch (error) {
            return error;
        }
    }

    return (
        <section className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <textarea {...register("message", { required: true })} className={style.message} cols={40} rows={5} placeholder="Message" />
                {errors.message && <span>This field is required</span>}
                {username ? <Button status={true}> Submit</Button> :
                    <div>
                        <Button status={false}>Submit</Button>
                        <p style={{ color: "red", fontSize: "12px" }}>*You need login first</p>
                    </div>
                }
            </form>
        </section>
    )
}
