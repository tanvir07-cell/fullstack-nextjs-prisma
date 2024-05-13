import Link from "next/link";

const page = () => {
  return (
    <div
      className="bg-black flex items-center justify-center text-white w-screen
      h-screen
    "
    >
      <div className="space-y-4">
        <h1 className="text-6xl ">Journal App</h1>
        <p className="text-2xl text-white/70">
          This is the journal app which can track all of your jounal
        </p>
        <Link href="/journal">
          <button className="text-xl rounded px-4 py-2 bg-blue-500">
            Click
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
