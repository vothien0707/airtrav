import { NavLink } from 'react-router-dom';

import { logo, notification, avatar, burger } from 'assets/images';

import './header.scss';

const navItems = [
  {
    display: 'Things To Do',
    link: '/thingsToDo',
  },
  {
    display: 'Tour',
    link: '/tour',
  },
  {
    display: 'Blog',
    link: '/blog',
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo__img">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-logo__title">Airtrav</div>
      </div>
      <nav className="header-nav">
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.link}>
            <div className="header-nav__item">{item.display}</div>
          </NavLink>
        ))}
      </nav>
      <div className="header-right">
        <div className="header-right-tools">
          <span className="header-right-tools__currency">USD</span>
          <span className="header-right-tools__faq">FAQ</span>
          <div className="header-right-tools__notification">
            <img src={notification} alt="notification" />
          </div>
        </div>
        <div className="header-right__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="header-right__toggle">
          <img src={burger} alt="menu-toggle" />
        </div>
      </div>
    </header>
  );
};

export default Header;
