import { FC, ReactNode } from "react";

import Button from "../button";

export type NavItem = {
  title: string;
  push: () => void;
};

export type BreadCrumb = {
  name: string,
  push: () => void,
}

export type NavbarProps = {
  navItems: NavItem[];
  showSearch?: boolean;
  logo: string | ReactNode;
  pageName: string;
  breadCrumb?: BreadCrumb
};

const Navbar: FC<NavbarProps> = ({ navItems, logo, showSearch = true, pageName, breadCrumb }) => (
  <div className="daisy-navbar bg-base-100 rounded-xl mb-4 shadow-sm shadow-neutral">
    <div>
      {breadCrumb?.name && <Button onClick={() => breadCrumb.push()} variant="text">
        <span className="pb-1 text-center text-xl mr-1">&#8678; </span>
        <span className="flex items-center">
          {breadCrumb.name}
        </span>
      </Button>}
    </div>
    <div className="daisy-navbar-end">
      <a className="daisy-btn daisy-btn-ghost normal-case text-xl">{pageName}</a>
    </div>
    <div className="daisy-navbar-end">
      <button type="button" className="daisy-btn daisy-btn-ghost daisy-btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button type="button" className="daisy-btn daisy-btn-ghost daisy-btn-circle">
        <div className="daisy-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="daisy-badge daisy-badge-xs daisy-badge-primary daisy-indicator-item" />
        </div>
      </button>
    </div>
  </div>
);

export default Navbar;
