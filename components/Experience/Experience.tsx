"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/data";
import styles from "./Experience.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // A linha do circuito "cresce" acompanhando o scroll da seção,
        // como se o esquema estivesse sendo desenhado à medida que
        // o visitante lê a trajetória.
        gsap.fromTo(
          `.${styles.trackFill}`,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>(`.${styles.node}`).forEach((node) => {
          gsap.from(node, {
            opacity: 0,
            x: -18,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 82%",
            },
          });

          // A bolinha do nó acende (fica laranja) no mesmo instante em
          // que o cartão entra em cena — dá a sensação de que a linha
          // "acendeu" aquele ponto ao chegar nele.
          const dot = node.querySelector(`.${styles.dot}`);
          if (dot) {
            ScrollTrigger.create({
              trigger: node,
              start: "top 82%",
              toggleClass: { targets: dot, className: styles.dotFilled },
            });
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="experiencia" className={styles.experience} ref={sectionRef}>
      <div className={styles.inner}>
        <p className={styles.kicker}>02 — EXPERIÊNCIA</p>

        <div className={styles.track}>
          <div className={styles.trackBase} />
          <div className={styles.trackFill} />

          <ol className={styles.list}>
            {experiences.map((exp) => (
              <li key={exp.company} className={styles.node}>
                <span className={styles.dot} aria-hidden="true" />

                <div className={styles.card}>
                  <header className={styles.cardHead}>
                    <span className={styles.mark}>{exp.companyMark}</span>
                    <div>
                      <h3 className={styles.roleTitle}>
                        {exp.role} <span>· {exp.company}</span>
                      </h3>
                      <p className={styles.meta}>
                        {exp.type} · {exp.location}
                      </p>
                    </div>
                    <div className={styles.period}>
                      <span>{exp.period}</span>
                      <span className={styles.duration}>{exp.duration}</span>
                    </div>
                  </header>

                  <ul className={styles.bullets}>
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <ul className={styles.stack}>
                    {exp.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}