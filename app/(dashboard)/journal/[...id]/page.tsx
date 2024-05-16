import Editor from "@/components/Editor";

const page = ({ params } = { params: { id: string } }) => {
  return (
    <div>
      <Editor id={params.id} />
    </div>
  );
};

export default page;
