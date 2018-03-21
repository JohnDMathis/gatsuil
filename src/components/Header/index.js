import React from "react"
import Link from "gatsby-link"
import "./header.less";

const Header = () => (
  <div className="top-bar">
    <div className="title">
      <h1>
        <Link to="/" className="link">
          Eagle Christian Academy UIL 2018
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
