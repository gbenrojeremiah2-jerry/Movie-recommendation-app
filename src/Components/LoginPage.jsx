import { FingerprintPattern } from "lucide-react";

export default function LoginPage({ toggleForm }) {
  return (
    <div className="p-5">
      <div className="size-12 flex justify-center items-center rounded-2xl mt-10 mb-5 p-1 overflow-hidden mx-auto bg-blue-500">
        <FingerprintPattern className="size-[90%] text-white"/>  
      </div>
      <h1 className="text-2xl text-center mb-10 ">Login</h1>
      <form>
        <div className="input_field">
          <label htmlFor="Username" className="text-zinc-500 block mb-2">
            Username
          </label>
          <input
            type="text"
            name="Username"
            id=""
            className="border w-full h-10 rounded border-zinc-500 outline-0 px-2 mb-3"
          />
        </div>

        <div className="input_field">
          <label htmlFor="Password" className="text-zinc-500 block mb-2">
            Password
          </label>
          <input
            type="password"
            name="Password"
            id=""
            className="border w-full rounded h-10 border-zinc-500 outline-0 px-2 mb-3"
          />
        </div>
        <button
          type="submit"
          className="border bg-blue-500 text-white w-full h-10 rounded mb-3.5 mt-5 "
        >
          Login
        </button>
      </form>

      <p>
        Don't have an account? <button onClick={toggleForm}>Sign up</button>
      </p>
    </div>
  );
}
