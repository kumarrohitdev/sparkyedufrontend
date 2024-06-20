import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

type IsAuthenticatedContextType = {
  isAuth: boolean | null;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean | null>>;
  userrole: string | null; 
};

const IsAuthenticatedContext = createContext<IsAuthenticatedContextType>({
  isAuth: null,
  setIsAuth: () => {},
  userrole: null,
});

const IsAuthenticatedProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [userrole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:3000/api/v1/auth", {
          withCredentials: true,
        });
        let auth = response.data.message;
        let role = response.data.role;

        if (auth === "Authorize") {
          setIsAuth(true);
          setUserRole(role);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        setIsAuth(false);
      }
    };

    fetchData();
  }, []);

  return (
    <IsAuthenticatedContext.Provider value={{ isAuth, setIsAuth, userrole }}>
      {children}
    </IsAuthenticatedContext.Provider>
  );
};

export { IsAuthenticatedProvider, IsAuthenticatedContext };
