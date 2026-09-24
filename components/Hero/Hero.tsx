"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "@/lib/data";
import BlueprintGrid from "@/components/BlueprintGrid/BlueprintGrid";
import styles from "./Hero.module.scss";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // 1. As linhas do "desenho" traçam a moldura do herói
        tl.from(`.${styles.frameLine}`, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.9,
          stagger: 0.08,
          ease: "power2.inOut",
        })
          // 2. O rótulo mono ("planta / eyebrow técnico") digita-se
          .from(
            `.${styles.kicker}`,
            { opacity: 0, y: -6, duration: 0.5 },
            "-=0.4"
          )
          // 3. O nome é revelado por uma máscara que "abre" a viewport
          .from(
            `.${styles.nameMask} span`,
            {
              yPercent: 110,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.06,
            },
            "-=0.2"
          )
          .from(
            `.${styles.role}`,
            { opacity: 0, y: 14, duration: 0.6 },
            "-=0.5"
          )
          .from(
            `.${styles.pitch}`,
            { opacity: 0, y: 14, duration: 0.6 },
            "-=0.45"
          )
          .from(
            `.${styles.actions}`,
            { opacity: 0, y: 10, duration: 0.5 },
            "-=0.4"
          )
          // 4. Os marcadores de coordenada "carimbam" por último
          .from(
            `.${styles.coord}`,
            { opacity: 0, scale: 0.6, duration: 0.4, stagger: 0.06 },
            "-=0.5"
          );
      }, rootRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="topo" className={styles.hero} ref={rootRef}>
      <BlueprintGrid />
      <span className={`${styles.frameLine} ${styles.frameTop}`} />
      <span className={`${styles.frameLine} ${styles.frameBottom}`} />

      <div className={styles.inner}>
        <p className={styles.kicker}>FICHA TÉCNICA — DESENVOLVEDOR</p>

        <h1 className={styles.nameMask}>
          <span>{profile.name}</span>
        </h1>

        <p className={styles.role}>{profile.role}</p>
        <p className={styles.pitch}>{profile.pitch}</p>

        <div className={styles.actions}>
          <a
            href={profile.links.resume}
            download
            className={styles.primaryAction}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Baixar currículo
          </a>
          <a href="#experiencia" className={styles.primaryAction}>
            Ver experiência
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryAction}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className={`${styles.coord} ${styles.coordLeft}`}>
        {profile.location}
      </div>
      <div className={`${styles.coord} ${styles.coordRight}`}>
        {profile.languages}
      </div>
    </section>
  );
}
