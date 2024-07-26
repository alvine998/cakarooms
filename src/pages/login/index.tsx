import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const router = useRouter();
  const [position, setPosition] = useState<string>("login");

  const login = async (e: any) => {
    e?.preventDefault();
    const formData: any = Object.fromEntries(new FormData(e.target));
    try {
      if (formData?.email !== "admin@homste.id") {
        return Swal.fire({
          icon: "error",
          text: "Email / No Telepon tidak terdaftar!",
        });
      }
      if (formData?.password !== "admin1234") {
        return Swal.fire({
          icon: "error",
          text: "Password Salah!",
        });
      }
      Swal.fire({
        icon: "success",
        text: "Selamat Datang Admin",
      });
      router.push("/main/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[url('/images/loginbanner.jpg')] bg-cover w-full h-[111vh] -mt-20">
      <Head>
        <title>LOGIN</title>
      </Head>
      <div className="absolute lg:top-40 top-20 lg:left-[40%] left-5 right-5">
        <div className="lg:w-1/3 w-full bg-white h-[50vh] flex flex-col gap-2 justify-center items-center p-2 px-5 rounded">
          <h2 className="text-center text-2xl font-semibold font-sans text-slate-700">HOMSTE</h2>
          <form className="mt-4 w-full" onSubmit={login}>
            <Input
              label="Email / No Telepon"
              placeholder="Masukkan Email / No Telepon"
              type="text"
              name="email"
              required
            />
            <Input
              label="Password"
              placeholder="********"
              type="password"
              name="password"
              required
            />
            <a
              href="#"
              className="flex justify-end text-blue-500 hover:text-blue-700 duration-150 transition-all"
            >
              Lupa Password?
            </a>
            <div className="mt-5">
              <Button color="info">Masuk</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
