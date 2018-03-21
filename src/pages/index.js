import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>John wuz here</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
	<Link to="/page-2/">Go to page 2</Link>
	<hr />
    <Link to="/page-3/">Go to page 3</Link>
  </div>
)

export default IndexPage
