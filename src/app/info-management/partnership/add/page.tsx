"use client";

import HeaderBackBar from "@/app/_components/HeaderBackBar";

export default function Add() {
  return (
    <div>
      <HeaderBackBar title="ADD PARTNERSHIP TIER" />
      <div className="flex w-full">
        <div className="w-3/5 bg-white m-5 shadow-md rounded-lg p-5">
          <h1 className="text-lg">BASIC DETAILS</h1>
        </div>
        <div className="w-2/5 bg-white m-5 shadow-md rounded-lg p-5">
          <h1 className="text-lg">FEATURES CARD</h1>
        </div>
      </div>
    </div>
  );
}
