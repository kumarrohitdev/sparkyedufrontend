import { useEffect, useState } from "react";



export default function HelpComponent({isHelp}:{isHelp:boolean}) {
    const [showCard, setShowCard] = useState(isHelp);

    useEffect(() => {
      setShowCard(isHelp);
    }, [isHelp]);
  return (
   
    <div className={!showCard?"block":"hidden"}>helpComponent</div>
  )
}
