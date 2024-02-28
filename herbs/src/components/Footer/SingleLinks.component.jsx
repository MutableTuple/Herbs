import React from "react";

const SingleLinks = ({ name }) => {
  return (
    <li className="nav-item">
      <a className="nav-link fw-normal px-0 py-1" href="#">
        {name}
      </a>
    </li>
  );
};

export default SingleLinks;
