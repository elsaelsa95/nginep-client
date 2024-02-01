"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";
import Button from "@/component/Button";

type Inputs = {
    fullName: string
    message: string
}

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <section className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <input {...register("fullName", { required: true })} className={style.input} placeholder="Full Name" />
                {errors.fullName && <span>This field is required</span>}
                <textarea {...register("message", { required: true })} className={style.message} cols={40} rows={5} placeholder="Message" />
                {errors.message && <span>This field is required</span>}
                <Button> Submit</Button>
            </form>
        </section>
    )
}
