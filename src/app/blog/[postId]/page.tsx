import HeaderEditDelete from "@/app/_components/HeaderEditDelete";

export default function SinglePostPage({ params }: any) {
  return (
    <div>
      <HeaderEditDelete title="POST" />
      <div className="mx-32 my-5 bg-white rounded-md p-5">
        Post Id: {params.postId}
      </div>
    </div>
  );
}
