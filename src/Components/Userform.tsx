import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Userform({ isedit }: { isedit: boolean }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isedits, setIsedit] = useState<boolean>(false);

  useEffect(() => {
    setIsedit(isedit);
  }, [isedit]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/profile",
          {
            withCredentials: true,
          }
        );
        const data = response.data;
        setUsername(data.userName);
        setEmail(data.userName);
        setFirstName(data.firstName);
        setLastName(data.lastName);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);
  const updateUserFun = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/v1/update",
        {
          username: username,
          lastName: lastName,
          firstName: firstName,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("User details updated successfully!");
      setIsedit(false);
    } catch (error) {
      console.error("Error updating user details:", error);
      toast.error("Failed to update user details. Please try again later.");
    }
  };

  return (
    <div className="max-w-6xl mt-4 mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-12 items-center">
      {/* Image */}
      <div className="flex justify-center">
        <img className="w-fit  h-fit" src="/user.svg" alt="User" />
      </div>

      {/* User Details Form */}
      <div>
        <form
          onSubmit={updateUserFun}
          className="w-full grid lg:grid-cols-1 md:grid-cols-2 grid-cols-2 lg:gap-1 md:gap-2 gap-2"
        >
          {/* Username */}
          <div className="mb-4 ">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              value={username}
              readOnly={!isedits}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                !isedits && "border-none"
              }`}
              type="text"
              id="username"
              name="username"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address:
            </label>
            <input
              value={email}
              readOnly={!isedits}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                !isedits && "border-none"
              }`}
              type="text"
              id="email"
              name="email"
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <input
              value={firstName}
              readOnly={!isedits}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                !isedits && "border-none"
              }`}
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name:
            </label>
            <input
              value={lastName}
              readOnly={!isedits}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                !isedits && "border-none"
              }`}
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
          {isedits && (
            <button className="flex justify-center items-center bg-black text-white hover:bg-gray-200 border-none hover:border-1 p-2 rounded-md hover:text-gray-600">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
