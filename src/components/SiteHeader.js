import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = () => {
  const sports = ["NBA", "MLB", "NFL", "Soccer"]
  return (
    <header className="siteHeader">
      <h1 className="siteTitle"><Link to="/" className = "navLink">TheRolePlayer</Link></h1>
      <hr className="divider" />
      <nav className="mainNav">
        <ul className="navList">
          { sports.map((sport) => {
            return <li className="navItem" key={sport}><Link to= {`/sports/${sport}`} className="navLink">{sport}</Link></li>;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
