"use client";
import HeaderBackBar from "@/app/_components/HeaderBackBar";
import MyEditor from "../../_component/MyEditor";
// import { useRef, useState } from "react";
// import JoditEditor from "jodit-react";

export default function PrivacyPolicyEditPage() {
  // const editor = useRef(null);
  // const [content, setContent] = useState("");
  return (
    <div>
      <HeaderBackBar title="UPDATE PRIVACY POLICY" />
      <div className="bg-white rounded m-10 p-5 shadow-md">
        <p className="text-lg mb-2">Privacy Policy</p>
        <MyEditor />
      </div>
    </div>
  );
}
