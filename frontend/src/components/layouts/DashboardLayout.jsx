import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {/* Üst kısım: Navbar her sayfada görünür */}
      <Navbar />

      {/* Alt kısım: sayfa içeriği */}
      {user && <div>{children}</div>}
    </div>
  );
};

export default DashboardLayout;
