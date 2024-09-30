"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/assests/menuicon/Logo.svg";
import Dashboardicon from "../../../public/assests/menuicon/dashboardicon.svg";
import Bookings from "../../../public/assests/menuicon/bookingsIcon.svg";
import VendorIcon from "../../../public/assests/menuicon/Vendoricon.svg";
import Agent from "../../../public/assests/menuicon/AgentIcon.svg";
import Customer from "../../../public/assests/menuicon/Customericon.svg";
import MarketSales from "../../../public/assests/menuicon/Salesicon.svg";
import Promotion from "../../../public/assests/menuicon/Dealsicon.svg";
import Accounts from "../../../public/assests/menuicon/Accountsicon.svg";
import Transaction from "../../../public/assests/menuicon/Transactionicon.svg";
import Journal from "../../../public/assests/menuicon/Journalicon.svg";
import Employee from "../../../public/assests/menuicon/Employeeicon.svg";
import Reports from "../../../public/assests/menuicon/Reportsicon.svg";
import Settings from "../../../public/assests/menuicon/Settingsicon.svg";
import LogOut from "../../../public/assests/menuicon/Logoutiutton.svg";
import { Container } from "@mui/material";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVendorOpen, setIsVendorOpen] = useState(false);
  const pathname = usePathname();
  const toggle = () => setIsOpen(!isOpen);
  const toggleVendor = () => setIsVendorOpen(!isVendorOpen);

  type MenuItem = {
    path: string;
    name: string;
    icon: string;
    subMenu?: MenuItem[];
  };

  const menuItem: MenuItem[] = [
    { path: "/dashboard", name: "Dashboard", icon: Dashboardicon },
    { path: "/user/profile", name: "Profile", icon: Bookings },
    { path: "/dashboard/vendorlisttable", name: "Vendor", icon: VendorIcon },
    { path: "/dashboard/agent-list", name: "Agent", icon: Agent },
    { path: "/dashboard/customerlisttable", name: "Customer", icon: Customer },
    {
      path: "/dashboard/user-markup-commission-list",
      name: "Market",
      icon: MarketSales,
    },
    { path: "#", name: "Promotion", icon: Promotion },
    // {
    //   path: "/dashboard/company-bank-list-table",
    //   name: "Accounts",
    //   icon: Accounts,
    // },
    // { path: "#", name: "Transaction", icon: Transaction },
    // { path: "#", name: "Journal", icon: Journal },
    // { path: "#", name: "Employee", icon: Employee },
    // { path: "/dashboard/reports", name: "Reports", icon: Reports },
    // { path: "/dashboard/setting", name: "Settings", icon: Settings },
    // { path: "/dashboard/traveller-list-table", name: "Others", icon: Settings },
  ];

  const linkStyle = (path: string) => ({
    display: "flex",
    alignItems: "center",
    color: pathname === path ? "#FFFFFF" : "#B4B4CD",
    backgroundColor: pathname === path ? "#A56EB4" : "transparent",
    fontSize: "12px",
    padding: "5px 10px",
    gap: "10px",
    textDecoration: "none",
    justifyContent: isOpen ? "flex-start" : "center",
    fontFamily: "OutFit",
    borderRadius: "10px",
    margin: "5px 10px",
  });

  return (
    <div>
      <div
        style={{
          background: "#FFFFFF",
          color: "#B4B4CD",
          borderRadius: "15px",
          height: "100%",
          width: isOpen ? "150px" : "84px",
          boxShadow: "rgba(234, 232, 244, 0.95) 0px 0px 25px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          paddingTop: "40px",

          minHeight: "90vh",
        }}
      >
        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "10",
            width: "auto",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          <Image
            onClick={toggle}
            src={Logo}
            alt="Logo"
            style={{
              width: "50px",
              height: "auto",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Menu Items */}
        <div>
          {menuItem.map((item, index) => (
            <React.Fragment key={index}>
              <Link href={item.path} passHref>
                <span style={linkStyle(item.path)}>
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={12}
                      height={12}
                      style={{
                        filter:
                          pathname === item.path
                            ? "brightness(0) invert(1)"
                            : "none",
                      }}
                    />
                  </div>
                  {isOpen && (
                    <span style={{ fontFamily: "Outfit", fontWeight: 400 }}>
                      {item.name}
                    </span>
                  )}
                </span>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
