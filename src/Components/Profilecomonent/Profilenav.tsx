import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import Notificationcard from "../Notificationcard";
import { Badge } from "@mui/material";
import HelpComponent from "../HelpComponent";

export default function Profilenav() {
  const [notiFications, setNotifications] = useState(false);
  const [noMessage, setNoMessage] = useState(1);
  const [help, setHelp] = useState(false);

  const HelpComp = () => {
    setNotifications(false);
    setHelp((prevState) => !prevState);
  };

  const notificationFun=()=>{
    setHelp(false);
    setNotifications((prevState) => !prevState)
  }

  return (
    <div className="flex justify-between max-w-6xl mx-auto items-center mb-6">
      <h1 className="text-2xl font-semibold">My Profile</h1>
      <div>
        {/* //icons */}

        <div className="flex gap-6 justify-between items-center">
          <Badge
            badgeContent={notiFications == false ? noMessage : 0}
            color="primary"
          >
            <IoIosNotifications
              className="cursor-pointer hover:transition-all hover:scale-105 active:transition-all active:scale-95"
              onClick={notificationFun}
              size={24}
            />
          </Badge>
          <div className="">
            <Notificationcard isClicked={notiFications} />
          </div>
          <MdMessage onClick={HelpComp} className="cursor-pointer" size={24} />
          <HelpComponent isHelp={help} />
        </div>
      </div>
    </div>
  );
}
