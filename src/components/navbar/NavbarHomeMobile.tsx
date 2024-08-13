import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  BookIcon,
  Building2Icon,
  ChevronDownCircle,
  DoorOpenIcon,
  HomeIcon,
  MenuIcon,
  NewspaperIcon,
  PencilIcon,
  UserCircle,
  UserIcon,
  Users2Icon,
  Wallet2Icon,
} from "lucide-react";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export default function NavbarHomeMobile({
  children,
}: {
  children: ReactNode;
}) {
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
    <div className="overflow-hidden relative">
      {/* Topbar */}
      <div className="bg-orange-800 w-full h-14 flex items-center px-2 relative z-20">
        <Menu>
          <MenuButton className={"flex gap-2 items-center justify-end w-full"}>
            <p className="text-white text-xl absolute top-3 left-0 right-0">
              HOMSTE
            </p>
            <MenuIcon color="white" className="w-7" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="w-full mt-5 min-h-screen origin-top-right rounded-xl border border-white/5 bg-white p-1 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
            >
              {navs?.map((v: any) => (
                <MenuItem key={v?.name}>
                  <button
                    type="button"
                    className={
                      router?.pathname?.includes(v?.href)
                        ? "group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-orange-800 text-white"
                        : `group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 bg-white ${
                            v?.name == "Logout" ? "text-red-500" : "text-black"
                          }`
                    }
                    onClick={() => {
                      router.push(v?.href);
                    }}
                  >
                    {v?.icon}
                    {v?.name}
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      <div className="relative z-0">
        <main className="h-full w-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
