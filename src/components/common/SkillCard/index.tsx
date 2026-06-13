import { useTranslation } from "react-i18next";
import { Badge } from "@components/common/Badge";

export const SkillCard = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-xl border bg-red-400/[0.07] border-slate-200 dark:border-slate-700 p-6 shadow-xl backdrop-blur-[2px]">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-slate-600 dark:text-slate-400 text-lg">{icon}</span>
        <h3 className="font-semibold">{t(`skills.${title}`)}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
