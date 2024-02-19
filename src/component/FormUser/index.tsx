"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";
import Button from "@/component/Button";
import { useRouter } from "next/navigation";

type Inputs = {
    fullName: string
    password: string
}

export default function FormUser() {
    const uuid = Math.random().toString(36).slice(-6);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await fetch(`http://localhost:8080/user`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: uuid,
                    name: data.fullName,
                    password: data.password
                })
            })
            router.push("/sign-in");
        } catch (error) {
            return error;
        }
    }

    return (
        <section className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <input {...register("fullName", { required: true })} className={style.input} placeholder="Full Name" />
                {errors.fullName && <span>This field is required</span>}
                <input {...register("password", { required: true })} className={style.input} placeholder="Password" />
                {errors.password && <span>This field is required</span>}
                <Button> Submit</Button>
            </form>
        </section>
    )
}
