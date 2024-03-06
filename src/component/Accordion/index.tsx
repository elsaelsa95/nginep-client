"use client";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { Question } from "@/interfaces/faq";
import FormReply from "../FormReply";


export interface IDataProps {
  data: Question[];
}

export default function Accordion({ data }: IDataProps) {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [openForm, setOpenForm] = useState(null)

  const handleReply = (i: any) => {
    if (openForm == i) {
      return setOpenForm(null);
    }
    setOpenForm(i);
    setSelected(i)
  }

  return (
    <div className={style.container}>
      {data.map((d) => (
        <Fragment key={d.id}>
          <div className={style.question} >
            <div>
              <strong>{d.name}</strong> <small> - {d.date}</small>
              <div>{d.question}</div>
            </div>
            <div className={style.button} >
              <div onClick={() => handleReply(d.id)}>Reply </div>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={style.icon}
                data-show={selected === d.id}
                onClick={() => toggle(d.id)}
              />
            </div>
          </div>
          <div className={style.form} data-show={openForm === d.id}>
            <FormReply questionId={d.id} question={d} message="" />
          </div>
          <div className={style.answer} data-show={selected === d.id}>
            {d.answer?.map((a) => {
              return (
                <div key={a.id} style={{ paddingTop: "1em" }}>
                  <strong>{a.name}</strong><small> - {a.date}</small>
                  <div>{a.answer}</div>
                </div>
              )
            })}
          </div>
          <hr className={style.divider} />
        </Fragment>
      ))}
    </div>
  );
}
