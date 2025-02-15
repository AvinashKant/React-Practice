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
          <main className="py-4 bg-gray-100 h-full">
            <div className="px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
