import Head from "next/head";
import React, { ReactNode } from "react";
import NavbarHome from "../navbar/NavbarHome";
import NavbarHomeMobile from "../navbar/NavbarHomeMobile";

export default function LayoutHome({ children }: { children: any }) {
  return (
    <section className="min-h-screen overflow-x-hidden relative">
      <Head>
        <title>Homste</title>
      </Head>
      <div className="lg:block hidden">
        <NavbarHome>{children}</NavbarHome>
      </div>
      <div className="lg:hidden block">
        <NavbarHomeMobile>{children}</NavbarHomeMobile>
      </div>
    </section>
  );
}
