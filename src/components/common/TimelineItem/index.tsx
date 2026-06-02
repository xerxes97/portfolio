import { useTranslation } from "react-i18next";

export const TimelineItem = ({
  period,
  title,
  description,
}: {
  period: string;
  title: string;
  description: string;
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-600" />
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {t(period)}
        </span>
        <h3 className="mt-2 font-semibold">{t(title)}</h3>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{t(description)}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
