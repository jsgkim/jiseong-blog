import { children } from "react";
import './Article.scss';

export default function Article({ children, date }) {
  return (
    <article>
      <header className="header">
        <h3>{children}</h3>
      </header>
      <p className="date">{date}</p>
    </article>
  )
}