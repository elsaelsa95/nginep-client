"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare,
    faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import style from "./style.module.css";

export default function Footer() {
    return (
        <section className={style.container}>
            <div className={style.section}>
                <div className={style.socialmedia}>
                    <p className={style.title}>Nginep</p>
                    <p> We serve you well that you want to always take a rest</p>
                    <div className={style.socmed}>
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                        <small>nginep</small>
                    </div>
                    <div className={style.socmed}>
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                        <small>nginep</small>
                    </div>
                    <div className={style.socmed}>
                        <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                        <small>nginep</small>
                    </div>
                    <div className={style.socmed}>
                        <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
                        <small>nginep</small>
                    </div>
                </div>
                <div className={style.tutorial}>
                    <p className={style.title}>Tutorial</p>
                    <small>Create a new account</small>
                    <small>Choosing a room</small>
                    <small>How to pay</small>
                    <small>How to checkin</small>
                </div>
                <div className={style.about}>
                    <p className={style.title}>About</p>
                    <small>Terms & Service</small>
                    <small>Privacy Policy</small>
                    <small>Refund</small>
                </div>
                <div className={style.contact}>
                    <p className={style.title}>Contact</p>
                    <small>ask@nginep.com</small>
                    <small>+62 21 123xxx</small>
                    <small>Indonesia</small>
                </div>
            </div>
            <small style={{ textAlign: "center" }}>Copyright © 2023 PT. Nginep Example Profile </small>
        </section>
    )
}