import { useTranslation } from "react-i18next";
import { Button } from "@components/common/Button";
import Crossword from "@components/common/Crossword";
import { wordCombination1 } from "@constants/crossword";
import { Paint } from "./components";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="py-24 grid grid-cols-2">
      <div className="flex flex-col items-center justify-center">
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
      <Paint>
        <Crossword interval={1000} sizeSquare={wordCombination1.sizeSquare} maps={wordCombination1.maps} />
      </Paint>
    </section>
  );
};

export default Hero;
