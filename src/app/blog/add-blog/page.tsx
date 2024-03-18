"use client";
import HeaderBackBar from "@/app/_components/HeaderBackBar";
import { UploadOutlined } from "@ant-design/icons";
// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
export default function AddBlogPage() {
  // const [convertedText, setConvertedText] = useState("Some default content");

  return (
    <div>
      <HeaderBackBar title="NEW POST" />
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-white rounded-md m-5 mr-0 p-3">
          <div className="mb-4 cursor-pointer">
            <p className="font-semibold">Upload Thumbnail</p>
            <p className="text-gray-500">(JPG, PNG, WEBP, SVG) (800*600)</p>
            <div className="border-dashed border-[1px] border-gray-400 rounded-lg p-8 text-center">
              <input type="file" accept="image/*" className="hidden" />
              <UploadOutlined />
              <p>Upload or select file</p>
            </div>
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
          {/* <div>
            <ReactQuill
              theme="snow"
              value={convertedText}
              onChange={setConvertedText}
              style={{ minHeight: "300px" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}