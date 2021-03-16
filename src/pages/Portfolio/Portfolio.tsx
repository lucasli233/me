import React from "react"
import s from "./Portfolio.module.scss"
import calc from "./calc.png"
import todolist from "./todolist.jpg"
import watchlist from "./watchlist.jpg"

const Portfolio = () => {
  function PortfolioCard(props: any) {
    return (
      <div className={s.portfolioCard}>
        <img className={s.portfolioPic} src={props.image} alt=""/>
        <div className={s.title}>{props.title}</div>
        <div className={s.desc}>{props.desc}</div>
      </div>
    )
  }

  return (
    <section id="portfolio" className={s.portfolio}>
      <div className="sectionHeader">Portfolio</div>
      <div className={s.portfolioContainer}>
        <PortfolioCard
          link="https://lucasli233.github.io/react-movie-watchlist-v1/"
          image={watchlist}
          title="Movie Watchlist"
          desc="React"
        />
        <PortfolioCard
          link="https://lucasli233.github.io/react-todo-v1/"
          image={todolist}
          title="Todo List"
          desc="React"
        />
        <PortfolioCard
          link="https://lucasli233.github.io/js-calculator/"
          image={calc}
          title="Calculator"
          desc="VanillaJS"
        />
      </div>
    </section>
  )
}

export default Portfolio
