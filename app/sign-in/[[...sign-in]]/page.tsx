import { SignIn } from "@clerk/nextjs";

const SigInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <SignIn />
    </div>
  );
};

export default SigInPage;
