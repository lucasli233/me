import React from "react";
import s from "./Portfolio.module.scss";

const Portfolio = () => {
  function PortfolioCard(props: any) {
    return (
      <div className={s.portfolioCard}>
        <a className={props.picture} href={props.link}></a>
        <div className={s.title}>{props.title}</div>
        <div className={s.desc}>{props.desc}</div>
      </div>
    );
  }

  return (
    <section id="portfolio" className={s.portfolio}>
      <div className="sectionHeader">Portfolio</div>
      <div className={s.portfolioContainer}>
        <PortfolioCard
          link="https://lucasli233.github.io/react-movie-watchlist-v1/"
          picture="portfolioPic watchlist"
          title="Movie Watchlist"
          desc="React"
        />
        <PortfolioCard
          link="https://lucasli233.github.io/react-todo-v1/"
          picture="portfolioPic todolist"
          title="Todo List"
          desc="React"
        />
        <PortfolioCard
          link="https://lucasli233.github.io/js-calculator/"
          picture="portfolioPic calc"
          title="Calculator"
          desc="VanillaJS"
        />
      </div>
    </section>
  );
};

export default Portfolio;
