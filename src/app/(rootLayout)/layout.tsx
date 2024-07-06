import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const WithRootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      style={{
        background: "#576556",
        // background: "linear-gradient(90deg, rgba(87,101,86,1) 25%, rgba(225,236,200,1) 72%)",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithRootLayout;
