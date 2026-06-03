import { useTranslation } from "react-i18next";
import { Button } from "@components/common/Button";
import { Badge } from "@components/common/Badge";
import { SectionTitle } from "@components/common/SectionTitle";

export const Project = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle>{t("projects.title")}</SectionTitle>
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 md:grid-cols-2">
          <div className="p-10">
            <span className="mb-4 inline-block font-semibold text-blue-600 dark:text-blue-400">
              {t("projects.featured.tag")}
            </span>
            <h3 className="mb-4 text-3xl font-bold">{t("projects.featured.title")}</h3>
            <p className="mb-6 text-slate-500 dark:text-slate-400">
              {t("projects.featured.description")}
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              <Badge>NestJS</Badge>
              <Badge>React</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>TypeScript</Badge>
            </div>
            <Button>{t("projects.featured.viewCaseStudy")}</Button>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800" />
        </div>
      </div>
    </section>
  );
};

export default Project;
