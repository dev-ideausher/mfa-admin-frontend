"use client";
import HeaderBackBar from "@/app/_components/HeaderBackBar";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});
export default function AddBlogPage() {
  // const [convertedText, setConvertedText] = useState("Some default content");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <HeaderBackBar title="NEW POST" />
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-white rounded-md m-5 mr-0 p-3">
          <div className="mb-4 cursor-pointer">
            <p className="font-semibold">Upload Thumbnail</p>
            <p className="text-gray-500">(JPG, PNG, WEBP, SVG) (800*600)</p>
            <input type="file" accept="image/*" />
          </div>
          <div className="mb-4">
            <p className="font-semibold">Blog Title</p>
            <textarea
              className="border-[1px] border-gray-400 rounded-md w-full p-1"
              placeholder="Description"
              cols={30}
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Description</p>
            <textarea
              className="border-[1px] border-gray-400 rounded-md w-full p-1"
              placeholder="Description"
              cols={30}
              rows={3}
            ></textarea>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Category</p>
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
        </div>
        <div className="col-span-8 bg-white rounded-md m-5 p-3">
          <p className="font-semibold mb-2">Article</p>
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
  );
}
