import Aboutcompany from "../Components/Aboutcompany";
import Aboutheader from "../Components/Aboutheader";
import Abouttext from "../Components/Abouttext";

export default function About() {
  return (
    <div className="mt-16">
      <Aboutheader />

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 max-w-6xl gap-5 mx-auto">
        <div className="flex justify-center items-center mt-10">
          <Abouttext />
        </div>
        <div>
          <Aboutcompany />
        </div>
      </div>
    </div>
  );
}
