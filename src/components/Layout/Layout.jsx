import React from "react";

import { Outlet } from "react-router";
import SideBar from "./SideBar.";
import Header from "./Header";

export default function Layout() {
  return (
    <React.Fragment>
      <div>
        <SideBar />
        <div className="lg:pl-72">
          <Header />
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
