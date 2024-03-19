"use client";
import HeaderBackBar from "@/app/_components/HeaderBackBar";
import { UploadOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";
import { DatePicker, Select } from "antd";
import type { Dayjs } from "dayjs";
import type { SelectProps } from "antd";

export default function AddContest() {
  const onChange: DatePickerProps<Dayjs[]>["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
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
      <HeaderBackBar title="NEW CHALLENGE" />
      <div className="grid grid-cols-3 p-5 gap-3">
        <div className="col-span-1 bg-white rounded-md p-3">
          <div className="mb-4 cursor-pointer">
            <p className="font-semibold">Upload Thumbnail</p>
            <p className="text-gray-500">(JPG, PNG, WEBP, SVG) (800*600)</p>
            <input type="file" accept="image/*" />
          </div>
          <div className="mb-2">
            <p className=" font-semibold">Challenge Title</p>
            <input
              type="text"
              className="p-2 border-[1px] border-gray-300 w-full rounded-md"
              placeholder="Enter Challenge Title"
            />
          </div>
          <div className="mb-2">
            <p className=" font-semibold">Author</p>
            <select
              name="author"
              className="p-2 border-[1px] border-gray-300 w-full rounded-md"
            >
              <option value="adrian">Adrian</option>
              <option value="brian">Brian</option>
            </select>
          </div>
          <div className="mb-2">
            <p className=" font-semibold">Start Date and Time</p>
            <DatePicker
              onChange={onChange}
              showTime
              needConfirm={false}
              style={{ width: 310 }}
            />
          </div>
          <div className="mb-2">
            <p className=" font-semibold">End Date and Time</p>
            <DatePicker
              onChange={onChange}
              showTime
              needConfirm={false}
              style={{ width: 310 }}
            />
          </div>
          <div className="mb-2">
            <p className=" font-semibold">Choose Platform</p>
            <select
              name="author"
              className="p-2 border-[1px] border-gray-300 w-full rounded-md"
            >
              <option value="mfa">MFA</option>
            </select>
          </div>
          <div className="mb-2">
            <p className=" font-semibold">Challenge Title</p>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={["Event", "Education"]}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white rounded-md p-3 mb-3">top</div>
          <div className="bg-white rounded-md p-3 mb-3">top</div>
          <div className="bg-white rounded-md p-3">top</div>
        </div>
      </div>
    </div>
  );
}
