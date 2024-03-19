import HeaderEditDelete from "@/app/_components/HeaderEditDelete";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <HeaderEditDelete title="EVENT DETAILS" />
      <div className="grid grid-cols-3 p-5 gap-3">
        <div className="col-span-1 bg-white rounded-md p-3 border-[1px] border-gray-200">
          <div className="flex justify-center">
            <Image
              src="/images/pushup.png"
              width={300}
              height={150}
              alt="pushup"
            />
          </div>
          <h2 className="text-xl font-bold uppercase mb-2">
            Bodybuilding champs new york Meetup
          </h2>
          <p>
            In publishing and graphic design, Host is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
          <p className="font-bold">Category</p>
          <div className="flex gap-1">
            <span className="bg-gray-100 text-gray-400 text-xs p-1 rounded-md">
              Popular
            </span>
            <span className="bg-gray-100 text-gray-400 text-xs p-1 rounded-md">
              Event
            </span>
            <span className="bg-gray-100 text-gray-400 text-xs p-1 rounded-md">
              Education
            </span>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-md p-3">
          <h2 className="text-lg font-bold">TIMING</h2>
          <p>Thursday, October 12, 2023</p>
          <p className="text-gray-400">11:30 - 12:00 PT</p>
        </div>
      </div>
    </div>
  );
};

export default page;
