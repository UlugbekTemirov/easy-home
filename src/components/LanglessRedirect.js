import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LanglessRedirect({ to, children }) {
  const { lang } = useSelector((state) => state.navbar);
  const redirectedTo = `/${lang}${to}`;

  return <Link to={redirectedTo}>{children}</Link>;
}

export default LanglessRedirect;
