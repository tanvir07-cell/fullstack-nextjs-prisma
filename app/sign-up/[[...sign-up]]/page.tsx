import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <SignUp forceRedirectUrl="/new-user" fallbackRedirectUrl="/new-user" />
      <div id="clerk-captcha"></div>
    </div>
  );
};

export default SignUpPage;
