import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";
import "./";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="UIL Scheduling"
    />
    <Header />
    <div className="content">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
