import HeaderEditDelete from "@/app/_components/HeaderEditDelete";
import Image from "next/image";
export default function ContestPage() {
  return (
    <div>
      <HeaderEditDelete title="CHALLENGE DETAILS" />
      <div className="m-5 grid grid-cols-3 gap-5">
        <div className="col-span-1">
          <div className="bg-white rounded-md p-5">
            <div className="w-full flex justify-center">
              <Image
                src="/images/pushup.png"
                alt="pushup"
                width={300}
                height={120}
              />
            </div>
            <h2 className="text-xl font-bold">MFA SQUATS CHALLENGE</h2>
            <p className="text-gray-400">MFA group</p>
            <hr style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />
            <p className="font-semibold">OTHER INFO</p>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-gray-500 mt-2">Time left</p>
                <p className="font-semibold mb-2">3 Days</p>
                <p className="text-gray-500">Tags</p>
                <p className="font-semibold">#MFASquats30</p>
              </div>
              <div className="col-span-1">
                <p className="text-gray-500 mt-2">Platform</p>
                <p className="font-semibold">Tiktok</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md mt-5 p-5">
            <h1 className="text-red-600 text-lg font-semibold">
              CHALLENGE EXPIRED. WINNERS NOT ANNOUNCED
            </h1>
            <button className="bg-red-600 text-white rounded-md px-3 py-2 mt-3">
              Announce winners
            </button>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-md p-5">
          <h2 className="text-md font-semibold mb-2">PARTICIPATION RULES</h2>
          <p className="mb-4">
            1. Cupidatat laboris enim ipsum et. Consectetur est magna veniam.{" "}
            <br />
            2. Rupidatat laboris enim ipsum et. Consectetur est magna veniam.
          </p>
          <h2 className="text-md font-semibold mb-2">HOW DO WE DO IT</h2>
          <p className="mb-4">
            Laboris commodo deserunt adipisicing ipsum ea excepteur eu cupidatat
            laboris enim ipsum et. Consectetur est magna veniam.
          </p>
          <h2 className="text-md font-semibold mb-2">REFERENCES</h2>
        </div>
      </div>
    </div>
  );
}
