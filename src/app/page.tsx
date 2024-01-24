import Image from "next/image";
import style from "./style.module.css";
import { PopularPlace } from "@/data/popularPlace";
import { ComfortPlace } from "@/data/comfortPlace";

export default function Home() {
  return (
    <section className={style.container}>
      <div className={style.hero}>
        <div>
          <p className={style.title}>A place where you can <strong> take a rest peacefully </strong></p>
          <p className={style.subtitle}>Forget your work for a little while, and let your head and body rest
            peacefully in our beautiful places</p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          width={350}
          height={350}
          alt="hero-image"
          style={{ borderRadius: "1em", transform: "scaleX(-1)" }}
        />
      </div>
      <div>
        <p className={style.title2}>Most Popular Places</p>
        <div className={style.grid}>
          {PopularPlace.map((p) => {
            return (
              <div key={p.id}>
                <Image
                  src={p.image}
                  width={200}
                  height={200}
                  alt={p.name}
                  className={style.heroImage} />
                <p className={style.place}>{p.name}</p>
                <p className={style.city}>{p.city}, {p.country}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <p className={style.title2}>Choose Your Comfort</p>
        <div className={style.grid2}>
          {ComfortPlace.map((p) => {
            return (
              <div key={p.id}>
                <Image
                  src={p.image}
                  width={200}
                  height={200}
                  alt={p.type}
                  className={style.heroImage} />
                <p className={style.place}>{p.type}</p>
                <p className={style.city}>{p.unit}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
