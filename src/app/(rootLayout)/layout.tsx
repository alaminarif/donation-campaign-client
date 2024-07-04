import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const WithRootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithRootLayout;
