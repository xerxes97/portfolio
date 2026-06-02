import { useTranslation } from "react-i18next";

export const LanguageBar = ({
  name,
  level,
  progress,
}: {
  name: string;
  level: string;
  progress: number;
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span>{t(name)}</span>
        <span className="text-slate-500 dark:text-slate-400">{t(level)}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LanguageBar;
