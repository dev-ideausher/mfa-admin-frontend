"use client";
import HeaderBackBar from "@/app/_components/HeaderBackBar";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
const Page = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <HeaderBackBar title="NEW MEDITATION" />
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-white rounded-md m-5 mr-0 p-3">
          <div className="mb-4 cursor-pointer">
            <p className="font-semibold">Upload Thumbnail</p>
            <p className="text-gray-500">(JPG, PNG, WEBP, SVG) (800*600)</p>
            <input type="file" accept="image/*" />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Plan Title</p>
            <input
              type="text"
              className="border-[1px] border-gray-500 rounded-md p-1 w-full"
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Author</p>
            <select
              name="category"
              id="category"
              className="border-[1px] border-gray-500 rounded-md p-1 w-full"
            >
              <option value="diet">Ryan</option>
              <option value="exercise">Ronald</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Type</p>
            <select
              name="category"
              id="category"
              className="border-[1px] border-gray-500 rounded-md p-1 w-full"
            >
              <option value="diet">Diet</option>
              <option value="exercise">Exercise</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Category</p>
            <input
              type="text"
              className="border-[1px] border-gray-500 rounded-md p-1 w-full"
            />
          </div>
        </div>
        <div className="col-span-8 flex flex-col gap-5  m-5">
          <div className="bg-white rounded-md p-3">
            <p className="font-semibold mb-2">AUDIO</p>
            <div className="mb-4 cursor-pointer">
              <p className="font-semibold">Upload Audio</p>
              <p className="text-gray-500">(MP4, WAV, MOV)</p>
              <input type="file" />
            </div>
          </div>
          <div className="bg-white rounded-md p-3">
            <p className="font-semibold mb-2">INSTRUCTIONS</p>
            <div>
              <JoditEditor
                ref={editor}
                value={content}
                onBlur={(newContent) => setContent(newContent)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
