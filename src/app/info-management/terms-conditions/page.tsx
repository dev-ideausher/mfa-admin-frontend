"use client";
import HeaderBar from "@/app/_components/HeaderBar";
import { Menu, Button } from "antd";
import { useRouter } from "next/navigation";
import { RiEdit2Fill } from "react-icons/ri";

export default function Page() {
  const router = useRouter();
  const header_items = [
    {
      key: "partnership",
      label: "Partnership",
    },
    {
      key: "privacy-policy",
      label: "Privacy policy",
    },
    {
      key: "terms-conditions",
      label: "Terms and Conditions",
    },
  ];
  return (
    <div>
      <HeaderBar title="INFO MANAGEMENT" />
      <Menu
        style={{ padding: 0 }}
        defaultSelectedKeys={["terms-conditions"]}
        theme="light"
        mode="horizontal"
        items={header_items}
        onClick={({ key }) => router.push(`${key}`)}
      />
      <div className="flex w-full">
        <div className="flex-1 bg-white m-5 shadow-md rounded p-5">
          <h1 className="text-3xl text-bold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Aut aperiam quas vel fugit porro ut accusantium omnis non dolores
            facere ut vero eveniet aut odio rerum? Non distinctio labore qui
            voluptatibus odio non quae facilis. Et iure maiores 33 quia ipsam et
            quisquam minima qui voluptas modi. Ut exercitationem molestiae a
            culpa iure nam aperiam velit et omnis quaerat eos perferendis
            officia At fugiat recusandae? Ut dolorem internos ut fuga
            perferendis in molestias dolor aut temporibus amet. Aut velit
            aspernatur et omnis dolor sit amet. quo veniam galisum et amet sunt.
            Est reprehenderit eaque aut quia soluta sed incidunt assumenda non
            molestiae nisi sed dolorum repudiandae aut pariatur veritatis?Lorem
            ipsum dolor sit amet. Aut aperiam quas vel fugit porro ut
            accusantium omnis non dolores facere ut vero eveniet aut odio rerum?
            Non distinctio labore qui voluptatibus odio non quae facilis. Et
            iure maiores 33 quia ipsam et quisquam minima qui voluptas modi. Ut
            exercitationem molestiae a culpa iure nam aperiam velit et omnis
            quaerat eos perferendis officia At fugiat recusandae? Ut dolorem
            internos ut fuga perferendis in molestias dolor aut temporibus amet.
          </p>
          <h1 className="text-3xl text-bold">Aut velit aspernatur et omnis</h1>
          <p>
            eaque quo veniam galisum et amet sunt. Est reprehenderit eaque aut
            quia soluta sed incidunt assumenda non molestiae nisi sed dolorum
            repudiandae aut pariatur veritatis? Aut aperiam quas vel fugit porro
            ut accusantium omnis non dolores facere ut vero eveniet aut odio
            rerum? Non distinctio labore qui voluptatibus odio non quae facilis.
            Et iure maiores 33 quia ipsam et quisquam minima qui voluptas modi.
            Ut exercitationem molestiae a culpa iure nam aperiam velit et omnis
            quaerat eos perferendis officia At fugiat recusandae? Ut dolorem
            internos ut fuga perferendis in molestias dolor aut temporibus amet.
            Aut velit aspernatur et omnis eaque quo veniam galisum et amet sunt.
            Est reprehenderit eaque aut quia soluta sed incidunt assumenda non
            molestiae nisi sed dolorum repudiandae aut pariatur veritatis?
          </p>
        </div>

        <div className="flex-[0.4285] flex items-end p-5 flex-col">
          <Button
            onClick={() => router.push("terms-conditions/edit")}
            type="primary"
            danger
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <RiEdit2Fill />
            Edit
          </Button>

          <p className="mt-2">Last updated 12 Jan, 2023</p>
        </div>
      </div>
    </div>
  );
}
