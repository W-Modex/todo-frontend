import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-[#e6e6e6] dark:text-white dark:bg-[#202c37] min-h-screen">
      <form className="mx-auto max-w-[570px] py-10 lg:py-20">
        <div className="px-5 mb-2">
          <h2 className="text-2xl lg:text-4xl mb-7 font-bold">
            Create an account
          </h2>
          <div className="mb-3 lg:mb-6">
            <label
              htmlFor="username"
              className="block font-semibold lg:text-xl text-lg mb-2 lg:mb-3"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full h-12 text-xl rounded-2xl pl-4 font-medium bg-white dark:bg-[#2b3945] dark:text-[#E5E8EB] max-w-[500px]"
            />
          </div>
          <div className="mb-3 lg:mb-6">
            <label
              htmlFor="password"
              className="block font-semibold lg:text-xl text-lg mb-2 lg:mb-3"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full h-12 text-xl rounded-2xl pl-4 font-medium bg-white dark:bg-[#2b3945] dark:text-[#E5E8EB] max-w-[500px]"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block lg:text-xl font-semibold text-lg mb-2 lg:mb-3"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full h-12 text-xl rounded-2xl pl-4 font-medium bg-white dark:bg-[#2b3945] dark:text-[#E5E8EB] max-w-[500px]"
            />
          </div>
        </div>
        <Link
          to="/login"
          className="link link-hover w-fit hover:text-[#617AFA] px-5"
        >
          Already Have An Account?
        </Link>
        <div className="px-5 mt-2">
          <button className="cursor-pointer p-2 rounded-3xl hover:bg-[#617AFA] hover:opacity-75 w-full bg-[#617AFA] max-w-[500px] text-2xl font-bold text-white">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
