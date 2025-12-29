import React from "react";
import Header from "./header";
import Footer from "./footer";
import AppRoutes from "./routes/AppRoutes";

const Wrapper = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default Wrapper;
