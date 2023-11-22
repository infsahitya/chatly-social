import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import { RiLockPasswordFill } from "react-icons/ri";
import { Button, Input } from "../../components/form";

const __login = (): JSX.Element => {
  return (
    <>
      <h1 className="text-textGray font-bold text-4xl select-none">
        Login to your account
        <GoDotFill className="text-primaryBlue text-lg inline align-bottom" />
      </h1>

      <form
        className="relative w-full flex flex-col items-start justify-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="email"
          label="Email"
          name="email"
          id="email"
          required
          icon={<span>@</span>}
          sx={{ width: "w-full" }}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          id="password"
          required
          icon={<RiLockPasswordFill />}
          sx={{ width: "w-full" }}
        />

        <Link
          to={"/forgot-password"}
          className="text-primaryBlue text-sm hover:underline ml-2"
        >
          Forgot Password?
        </Link>

        <Button
          category="styled"
          variant="filled"
          rippleBg="white"
          sx={{
            bg: "bg-primaryBlue",
            color: "text-textGray",
            width: "w-[10rem]",
            display: "self-center",
          }}
          onClick={(e) => {
            console.log("Clicked Login btn");
          }}
        >
          Login
        </Button>
      </form>

      <span className="relative w-full flex items-center justify-center">
        <hr className="relative h-[1px] w-full bg-focusGray border-none rounded-full" />
        <span className="absolute text-focusGray bg-primaryDark px-2 select-none">
          OR
        </span>
      </span>

      <Button
        category="styled"
        variant="filled"
        rippleBg="gray"
        sx={{
          bg: "bg-white",
          color: "text-black",
          width: "w-[10rem]",
          display: "flex justify-center items-center self-center gap-3",
        }}
      >
        <FcGoogle className="text-2xl" /> Continue
      </Button>
    </>
  );
};

export default __login;
