import { useTranslation } from "react-i18next";
import { LanguageBar } from "../../common/LanguageBar";
import { education, certifications, languages } from "../../../constants";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 dark:bg-slate-800/30 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div>
          <h3 className="mb-6 text-xl font-bold">{t("education.title")}</h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.title} className="border-l-2 border-blue-600 pl-4">
                <p className="text-blue-600 dark:text-blue-400">{t(item.institution)}</p>
                <p className="font-semibold">{t(item.title)}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold">{t("certifications.title")}</h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <p key={cert}>{t(cert)}</p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-xl font-bold">{t("languages.title")}</h3>
          <div className="space-y-6">
            {languages.map((lang) => (
              <LanguageBar key={lang.name} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
