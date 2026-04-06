import type { IChildren } from "../../../interfaces";

export const Pannel = ({ children }: IChildren) => {
    return <section className="section">
        <div className="content">{children}</div>
    </section>;
};

export default Pannel;
