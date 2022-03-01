import React from "react";
import SidebarLink from "./SideBarLink";

function SideBar() {
  return (
    <div className="sidebar">
      <SidebarLink text="Dashboard" />
      <SidebarLink text="Front Desk" />
      <SidebarLink text="Bank" />
      <SidebarLink text="Online" />
      <SidebarLink text="Head of Marketing" />
      <SidebarLink text="General Ledger" />
      <SidebarLink text="Customer Ledger" />
      <SidebarLink text="Logout" />
    </div>
  );
}
export default SideBar;
