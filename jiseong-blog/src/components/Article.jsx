import React from "react";
import './Article.scss';

export default function Article({ children, date }) {
  return (
    <article>
      <h3>{children}</h3>
      <p className="date">{date}</p>
    </article>
  )
}