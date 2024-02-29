"use client";
import HeaderBackBar from "@/app/_components/HeaderBackBar";
import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const Edit = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <HeaderBackBar title="UPDATE PRIVACY POLICY" />
      <div className="bg-white rounded m-10 p-5 shadow-md">
        <p className="text-lg mb-2">Privacy Policy</p>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
    </div>
  );
};

export default Edit;
