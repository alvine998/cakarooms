import { useRouter } from "next/router";
import React from "react";

export default function NavbarHome({ children }: { children: any }) {
  const router = useRouter();
  const navs = [
    {
      name: "Beranda",
      href: "/",
      current: router.pathname == "/",
    },
    {
      name: "Ruangan",
      href: "/room",
      current: router.pathname == "/room",
    },
    {
      name: "Fasilitas",
      href: "/facility",
      current: router.pathname == "/facility",
    },
    {
      name: "Galeri",
      href: "/gallery",
      current: router.pathname == "/gallery",
    },
    {
      name: "Tentang Kami",
      href: "/about-us",
      current: router.pathname == "/about-us",
    },
    {
      name: "Kontak Kami",
      href: "/contact-us",
      current: router.pathname == "/contact-us",
    },
  ];
  return (
    <div>
      <div className="bg-orange-800 h-[10vh] lg:w-full py-2 px-5 lg:gap-0 gap-2 flex items-center justify-around absolute top-0">
        <h2 className="font-bold font-sans text-3xl text-white">HOMSTE</h2>
        <div className="flex gap-7">
          {navs?.map((v: any, i: number) => (
            <button
              type="button"
              className={`lg:text-xl text-sm ${
                v?.current
                  ? "text-orange-500"
                  : "text-white hover:text-orange-500 duration-200"
              }`}
              key={i}
              onClick={() => {
                router.push(v?.href);
              }}
            >
              {v?.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <main className="h-full w-full overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
