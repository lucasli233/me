import React from "react";
import s from "./Portfolio.module.scss";

const Portfolio = () => {
  function PortfolioCard(props: any) {
    return (
      <div className={s.portfolioCard}>
        <div className={props.picture}></div>
        <div className={props.picture}></div>
        <div className={props.picture}></div>
        
      </div>
    );
  }

  return (
    <section id="portfolio" className={s.portfolio}>
      <div className="sectionHeader">Portfolio</div>
      <div className="portfolioContainer">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
