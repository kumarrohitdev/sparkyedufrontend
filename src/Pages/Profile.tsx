import { useContext, useEffect } from "react";
import Body from "../Components/Profilecomonent/Body";
import Profilenav from "../Components/Profilecomonent/Profilenav";
import { IsAuthenticatedContext } from "../context/IsAuthenticated";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { isAuth} = useContext(IsAuthenticatedContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div className="pt-20 h-screen bg-[#cde3fa]">
      <Profilenav />
      <Body />
    </div>
  );
}
