import Image from "next/image";
import ProfilePicture from "@/assets/user.png";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";

type Props = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: Props) => {
  return (
    <div>
      <header className="w-full p-4 flex justify-between items-center shadow-md shadow-slate-300">
        {/* Sidebar Toggle Button (only visible on mobile) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Right Menu Items (pushed to the right with ml-auto) */}
        <div className="ml-auto flex justify-center items-center space-x-4">
          {/* Notifications Icon */}
          <button className="relative focus:outline-none">
            <IoMdNotificationsOutline size={30} />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button className="focus:outline-none">
              <Image
                src={ProfilePicture}
                alt="Profile"
                className="w-8 h-8 rounded-full"
                width={40}
                height={40}
              />
            </button>
            {/* Add a dropdown here if necessary */}
          </div>
          <button className="">
            <IoMdLogOut size={30} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
