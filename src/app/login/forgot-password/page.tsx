"use client";

import LoginLayout from "@/layouts/LoginLayout";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  return (
    <LoginLayout>
      <div
        style={{ zIndex: 1 }}
        className="bg-white w-[300px] md:w-[350px] rounded-md p-5"
      >
        <Link href="/login" className="flex items-center">
          <ArrowLeftOutlined />
          <p className="ml-2 mb-1">Back</p>
        </Link>
        <div className="mt-2">
          <h1 className="font-bold text-xl">FORGOT PASSWORD</h1>
          <p className="text-sm text-gray-600">
            Enter you email where you want to receive instructions for resetting
            password
          </p>
        </div>
        <form className="flex flex-col mt-2">
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
          <div>
            <button className="bg-[#FF0000] rounded text-white w-full h-10 mt-7">
              Send reset link
            </button>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
}
