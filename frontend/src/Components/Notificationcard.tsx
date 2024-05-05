import React, { useState, useEffect } from "react";

interface NotificationCardProps {
  isClicked: boolean;
}

const Notificationcard: React.FC<NotificationCardProps> = ({ isClicked }) => {
  // Initialize showCard state with the value of isClicked prop
  const [showCard, setShowCard] = useState(isClicked);

  useEffect(() => {
    setShowCard(isClicked);
  }, [isClicked]);


  return (
    <div
      className={`border z-50 shadow-lg absolute lg:right-32 md:right-20 right-012 lg:min-w-52 md:min-w-32 w-20 min-h-32 bg-white rounded-lg p-2 mt-3 ${
        showCard ? "block" : "hidden"
      }`}
      style={{ maxHeight: "200px", overflowY: "auto" }}
    >
      <h1>Welcome To Sparky Education... Notification Section Will be start soon...</h1>
    </div>
  );
};

export default Notificationcard;
