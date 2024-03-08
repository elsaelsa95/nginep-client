"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";
import Button from "@/component/Button";

type Inputs = {
    message: string
}

export default function Form() {
    let user: any
    if (typeof window !== 'undefined') {
        user = localStorage.getItem("username") ? JSON.stringify(localStorage.getItem("username")) : null;
    }

    const uuid = Math.random().toString(36).slice(-6);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await fetch(`https://company-profile-server.vercel.app/questions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: uuid,
                    userId: localStorage.getItem("id"),
                    name: localStorage.getItem("username"),
                    date: new Date().toLocaleDateString(),
                    question: data.message,
                    answer: []
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
                {user ? <Button status={true}> Submit</Button> :
                    <div>
                        <Button status={false}>Submit</Button>
                        <p style={{ color: "red", fontSize: "12px" }}>*You need login first</p>
                    </div>
                }
            </form>
        </section>
    )
}
