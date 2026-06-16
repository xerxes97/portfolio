export const Card = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="card rounded-xl border bg-red-400 border-slate-200 dark:border-slate-700 p-6 shadow-xl backdrop-blur-[2px] z-10">
            {children}
        </div>
    );
};

export default Card;
