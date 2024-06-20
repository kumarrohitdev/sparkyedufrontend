import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IsAuthenticatedContext } from "../context/IsAuthenticated";
import BlogAddForm from "../Components/BlogAddForm";
import { CiLock } from "react-icons/ci";
import Adminlanding from "../Components/Adminlanding";

export default function Adminpanel() {
  const { isAuth, userrole } = useContext(IsAuthenticatedContext);
  const navigate = useNavigate();

  if (!isAuth || userrole !== "admin") {
    return (
      <div className="max-w-6xl flex justify-center items-center flex-col mx-auto h-screen">
        <div className="p-20 rounded-md  flex justify-center items-center  flex-col  ">
          <CiLock size={70} />
          <h1 className=" text-blue-950 font-semibold sm:text-xs w-fit">
            Acces Denied
          </h1>
          <p>You do not have permission to access this page.</p>
          <button
            className="border-2 mt-3 hover:bg-gray-300 hover:text-white active:bg-inherit active:text-inherit rounded-md p-2"
            onClick={() => navigate("/")}
          >
            Go Back To Home Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 max-w-6xl mx-auto">
      {/* <Adminlanding /> */}
      <BlogAddForm />
    </div>
  );
}
