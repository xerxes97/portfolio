import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../common/SectionTitle";
import { Button } from "../../common/Button";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle centered>{t("contact.title")}</SectionTitle>
        <form className="space-y-6 rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              placeholder={t("contact.name")}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent p-3"
            />
            <input
              placeholder={t("contact.email")}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent p-3"
            />
          </div>
          <textarea
            rows={5}
            placeholder={t("contact.message")}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent p-3"
          />
          <Button className="w-full">{t("contact.send")}</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
