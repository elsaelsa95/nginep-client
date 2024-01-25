"use client"

import { BrowsePlace } from "@/data/browsePlace";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Pagination from "@/component/Pagination";

export default function Browse() {
  const [page, setPage] = useState(1)
  let limitPage = 16;
  let mappedPage = BrowsePlace.filter(
    (_, i) => i >= (page - 1) * limitPage && i < limitPage * page
  )
  return (
    <section className={style.container}>
      <div>
        <p className={style.title}>Browse Our List</p>
        <p className={style.subtitle}>Browser our 10.000+ lists of places with different categories and choose your next bed</p>
      </div>
      <div className={style.grid}>
        {mappedPage.map((p) => {
          return (
            <div key={p.id} className={style.card} style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%), url(${p.image})`, backgroundSize: "cover" }}>
              <div className={style.grid2}>
                <div className={style.description}>
                  <p>{p.name}</p>
                  <p>{p.city}, {p.country}</p>
                  <p> ${p.price}/night</p>
                </div>
                <div className={style.description} style={{ display: "flex", gap: "0.5em" }}>
                  <FontAwesomeIcon icon={faStar} />
                  <p> {p.rating}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination
        totalPage={Math.ceil(BrowsePlace.length / limitPage)}
        currentPage={page}
        onPageChange={(page) => {
          setPage(page);
          window.scrollTo(0, 0);
        }}
      />
    </section>
  )
}
