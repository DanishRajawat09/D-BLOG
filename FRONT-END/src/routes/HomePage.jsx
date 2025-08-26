import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 ">
      {/*Bread Crumb*/}
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blog</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">D-Blog: Where Stories Come Alive</h1>
          <p className="mt-8 text-base md:text-xl ">Welcome to D-Blog — a simple space to share your thoughts, read fresh ideas, and connect with people who care.</p>
        </div>
        {/* animated button */}
        <Link to={"/write-post"}>
        </Link>
      </div>
    </div>

  );
};

export default HomePage;
