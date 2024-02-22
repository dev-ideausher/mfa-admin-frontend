"use client";
import LoginLayout from "@/layouts/LoginLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    // <div
    //   style={{
    //     backgroundImage: `url("/images/login.png")`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     zIndex: -1,
    //   }}
    //   className="h-screen w-screen flex justify-center items-center"
    // >
    <LoginLayout>
      <div
        style={{ zIndex: 1 }}
        className="bg-white w-[300px] md:w-[412px] md:h-[450px] rounded-md p-5"
      >
        <Image
          src="/images/mfa-logo.png"
          alt="mfa-logo"
          width={171}
          height={51}
          className="mb-3"
        />
        <hr />
        <div className="mt-2">
          <h1 className="font-bold text-xl">LOGIN TO CONTINUE</h1>
          <p className="text-sm text-gray-600">
            Enter you email where you want to receive instructions for resetting
            password
          </p>
        </div>
        <form className="flex flex-col mt-2">
          <div className="mb-4">
            <p className="block text-gray-700 text-sm font-bold mb-2">Email</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <p className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </p>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="●●●●●●●"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <div className="flex justify-end">
              <Link href="/login/forgot-password">
                <p className="text-sm text-gray-600">Forgot your password?</p>
              </Link>
            </div>
            <button className="bg-[#FF0000] rounded text-white w-full h-10 mt-7">
              Login
            </button>
          </div>
        </form>
      </div>
    </LoginLayout>
    // </div>
  );
}
