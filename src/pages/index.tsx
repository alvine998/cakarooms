import Carousel from "@/components/Carousel";
import NavbarHome from "@/components/navbar/NavbarHome";
import { BedDoubleIcon, CalendarCheck } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <div>
      <Head>
        <title>Homste</title>
      </Head>

      <div>
        <NavbarHome />
        <div className="relative mt-[10vh]">
          <Image
            src={"/images/homebanner.jpg"}
            layout="relative"
            width={1080}
            height={720}
            className="w-full h-[70vh] relative z-0"
            alt="bg"
          />
          <div className="px-40">
            <div className="bg-white shadow-xl rounded-xl w-full h-[15vh] -mt-14 relative z-10 flex gap-2 items-center justify-between py-2 px-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="room" className="text-sm text-gray-500">
                  Tipe Ruangan
                </label>
                <div className="flex">
                  <div className="flex justify-center items-center bg-gray-600 px-2 rounded-tl rounded-bl">
                    <BedDoubleIcon className="text-white" />
                  </div>
                  <select
                    name="room"
                    id="room"
                    className="border-2 p-1 rounded w-full"
                  >
                    <option value="" selected>
                      Semua Tipe Ruangan
                    </option>
                    <option value="deluxe_double_twin">
                      Deluxe Double Twin
                    </option>
                    <option value="deluxe_twin_room">Deluxe Twin Room</option>
                    <option value="standard_room">Standard Room</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="checkin" className="text-sm text-gray-500">
                  Check In
                </label>
                <div className="flex">
                  <div className="flex justify-center items-center bg-gray-600 px-2 rounded-tl rounded-bl">
                    <CalendarCheck className="text-white" />
                  </div>
                  <input
                    type="date"
                    className="border-2 p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-700 duration-200"
                    name="checkin"
                    defaultValue={new Date().toISOString().substring(0, 10)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="checkout" className="text-sm text-gray-500">
                  Check Out
                </label>
                <div className="flex">
                  <div className="flex justify-center items-center bg-gray-600 px-2 rounded-tl rounded-bl">
                    <CalendarCheck className="text-white" />
                  </div>
                  <input
                    type="date"
                    className="border-2 p-1 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-700 duration-200"
                    name="checkout"
                    defaultValue={new Date().toISOString().substring(0, 10)}
                  />
                </div>
              </div>

              <button
                type="button"
                className="text-white py-1 px-2 rounded bg-orange-700 w-full mt-8 hover:bg-orange-600 duration-200"
              >
                Cari Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
