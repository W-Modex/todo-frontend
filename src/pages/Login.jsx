import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#e6e6e6] dark:text-white dark:bg-[#202c37] min-h-screen">
      <form className="flex mx-auto max-w-[570px] flex-col p-5">
        <h2 className="text-2xl text-center md:text-start dark:text-white lg:text-4xl my-7 lg:my-16 font-bold">
          Welcome To ModexTodoApp!
        </h2>
        <div className="mb-3 lg:mb-6">
          <label
            htmlFor="username"
            className="block font-semibold lg:text-xl dark:text-white text-lg mb-2 lg:mb-5"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Your Username"
            className="w-full h-12 text-xl rounded-2xl pl-4 font-medium bg-white dark:bg-[#2b3945] dark:text-[#E5E8EB] max-w-[500px]"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block font-semibold lg:text-xl dark:text-white text-lg mb-2 lg:mb-5"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full h-12 text-xl rounded-2xl pl-4 font-medium bg-white dark:bg-[#2b3945] dark:text-[#E5E8EB] max-w-[500px]"
          />
        </div>
        <Link
          to="/signup"
          className="link link-hover hover:text-[#617AFA] my-3 w-fit"
        >
          Don't Have An Account Yet? Create One!
        </Link>
        <button className="cursor-pointer p-2 rounded-3xl hover:bg-[#617AFA] hover:opacity-75 w-full bg-[#617AFA] max-w-[500px] text-2xl font-bold text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
