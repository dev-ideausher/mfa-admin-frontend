import HeaderBackBar from "@/app/_components/HeaderBackBar";
import { Switch, ConfigProvider } from "antd";
export default function AddPage() {
  return (
    <div>
      <HeaderBackBar title="SEND NEW NOTIFICATION" />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "red",
          },
          components: {
            Switch: {},
          },
        }}
      >
        <div className="flex w-full justify-center items-center">
          <div className="bg-white w-[550px] rounded-md shadow-md m-5 p-5">
            <form>
              <p className="font-semibold">Notification Title</p>
              <textarea
                placeholder="Enter Title"
                className=" border-gray-400 border-[1px] w-full rounded-md p-2"
                id="notification-title"
                cols={30}
                rows={3}
              ></textarea>
              <p className="text-gray-400">12/50 words</p>
              <p className="mt-3 font-semibold">User Base</p>
              <input
                type="text"
                placeholder="Enter User Base"
                className="border-gray-400 border-[1px] w-full rounded-md p-2"
              />
              <div className="flex justify-between mt-3">
                <p className="font-semibold">Button</p>
                <Switch />
              </div>
              <input
                type="text"
                placeholder="Enter button title"
                className="border-gray-400 border-[1px] w-full rounded-md p-2 mb-1"
              />
              <input
                type="text"
                placeholder="Enter button link"
                className="border-gray-400 border-[1px] w-full rounded-md p-2"
              />
              <div className="flex justify-between mt-3 items-center">
                <div>
                  <p className="font-semibold">Schedule</p>
                  <p className="text-gray-500">
                    Recievers will get your update as per your scheduled date
                    and time
                  </p>
                </div>
                <Switch />
              </div>
            </form>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}
