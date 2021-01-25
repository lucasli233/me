import React from "react";
import s from "./Main.module.scss"


const Main = () => {
    return (
        <section id="main" className={s.main}>
            <div className={s.titlebox}>
                <div className={s.p1}>Hello, I'm</div>
                <div className={s.p2}>Lucas Li</div>
                <div className={s.p3}>AND THIS IS MY RESUME</div>
            </div>
        </section>
    );
};

export default Main;
