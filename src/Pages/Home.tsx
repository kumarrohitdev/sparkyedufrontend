import Heroimage from "../Components/Heroimage";
import Sectiontwo from "../Components/Sectiontwo";

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <div className="relatives">
        <Heroimage />
      </div>
      <div>
        <Sectiontwo />
      </div>
    </div>
  );
}
