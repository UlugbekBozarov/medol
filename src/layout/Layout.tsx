import React, { useMemo, useState } from "react";

import { Footer, Navbar } from "./components";

interface ILayout {
  children?: React.ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
