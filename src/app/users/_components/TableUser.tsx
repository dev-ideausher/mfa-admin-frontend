import Image from "next/image";
import Link from "next/link";
export default function TableUser({ user }: any) {
  return (
    <div className="flex gap-4 items-center cursor-pointer">
      <div>
        <Image src="/images/avatar.png" height={30} width={30} alt="avatar" />
      </div>
      <div>
        <Link href={`/users/${user.userid}`}>
          <p className="font-semibold text-blue-600">{user.username}</p>
        </Link>
        <p className="text-xs text-gray-600">{user.phno}</p>
      </div>
    </div>
  );
}
