import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { Button } from "@components/common/Button";
import Crossword from "@components/common/Crossword";
import { wordCombination1 } from "@constants/crossword";
import { Paint } from "./components";

export const Hero = () => {
  const { t } = useTranslation();
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftRef.current!.children, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      });
    }, leftRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="panel grid grid-cols-2">
      <div ref={leftRef} className="flex flex-col items-center justify-center [&>*]:opacity-0 [&>*]:translate-y-10">
        <h1 className="mb-4 text-6xl font-display">
          <span className="text-verde1">Cristian</span> <span className="text-verde2">Quevedo</span>
        </h1>
        <h2 className="mb-6 text-3xl font-bold text-blue-600 dark:text-blue-400">
          {t("hero.title")}
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-500 dark:text-slate-400">
          {t("hero.description")}
        </p>
        <div className="flex justify-center gap-4">
          <Button>{t("hero.contactMe")}</Button>
          <Button variant="outline">{t("hero.downloadResume")}</Button>
        </div>
      </div>
      <div>
        <Paint>
          <Crossword interval={300} sizeSquare={wordCombination1.sizeSquare} maps={wordCombination1.maps} />
        </Paint>
      </div>
    </section>
  );
};

export default Hero;
