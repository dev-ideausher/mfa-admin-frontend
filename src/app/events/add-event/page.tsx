"use client";
import HeaderBackBar from "@/app/_components/HeaderBackBar";
import { UploadOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";
import { Select } from "antd";
const page = () => {
  const options: SelectProps["options"] = [
    { label: "Events" },
    { label: "Exercise" },
    { label: "Gym" },
    { label: "Cardio" },
  ];

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <HeaderBackBar title="CREATE EVENT" />
      <div className="grid grid-cols-2 p-5 gap-3">
        <div className="col-span-1 bg-white rounded-md p-3 border-[1px] border-gray-200">
          <div className="mb-4 cursor-pointer">
            <p className="font-semibold">Upload Thumbnail</p>
            <p className="text-gray-500">(JPG, PNG, WEBP, SVG) (800*600)</p>
            <input type="file" accept="image/*" />
          </div>
          <div className="mb-2">
            <p className=" font-semibold">Event Title</p>
            <input
              type="text"
              className="p-2 border-[1px] border-gray-300 w-full rounded-md"
              placeholder="Enter Title"
            />
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
          <div className="mb-2">
            <p className=" font-semibold">Category</p>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Add Category"
              defaultValue={["Event", "Education"]}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mb-2">
            <p className=" font-semibold">Livestream Link</p>
            <input
              type="text"
              className="p-2 border-[1px] border-gray-300 w-full rounded-md"
              placeholder="Enter URL"
            />
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-md p-3 border-[1px] border-gray-200">
          right
        </div>
      </div>
    </div>
  );
};

export default page;
