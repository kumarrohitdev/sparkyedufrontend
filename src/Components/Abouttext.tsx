import { Link } from "react-router-dom";

export default function Abouttext() {
  return (
    <div>
       <p className="text-semibold text-xl text-gray-700">Sparky Education helps you to get a desirable job in your <span className="font-bold">desired company.</span> Start your learning of Full Stack Development by enrolling in our <Link className="font-bold text-blue-400" to="/Course">Full Stack Development Course </Link>. It provides you with relevant skills that will help you become a 100x developer after completing the course.</p>
    </div>
  )
}
