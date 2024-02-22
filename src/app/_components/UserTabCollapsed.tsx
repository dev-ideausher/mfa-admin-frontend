import Image from "next/image";
export default function UserTabCollapsed() {
  return (
    <div
      style={{
        background: "#333333",
        display: "flex",
        padding: "0.5rem",
        alignItems: "center",
        borderRadius: "5px",
        justifyContent: "center",
      }}
    >
      <Image src="/images/avatar.png" alt="user-img" width={30} height={30} />
    </div>
  );
}
