import React from "react";
import { useGlobalContext } from "./Context";
import phoneImg from "./images/phone.svg";

export default function Hero() {
  const { closeSubmenu } = useGlobalContext();
  // console.log(data);
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-ingo">
          <h1>
            Payments infrastructure <br />
            for the internet  
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
}
