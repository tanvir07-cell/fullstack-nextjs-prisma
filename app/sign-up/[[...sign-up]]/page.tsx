import { SignUp } from "@clerk/nextjs";

const SignUpPage = (props) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
