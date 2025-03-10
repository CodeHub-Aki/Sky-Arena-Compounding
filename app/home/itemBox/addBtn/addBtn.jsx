import { useState } from "react";
import Image from "next/image";
import Menu from "./menu/menu"

const Page = ({monsterData}) => {

  const [choiceMenu, setChoiceMenu] = useState(false)

  const menuBtn = () => {
    setChoiceMenu(!choiceMenu)
  }

  return (
    <div className="flex flex-col items-center w-fit">
      <Image src="/monsterIcon.png" alt="icon" width={100} height={93} />
      <button
        className="mt-2"
        onClick={menuBtn}
      >
        <Image src="/addButton.png" alt="Add Button" width={40} height={40} />
      </button>
      <Menu monsterData={monsterData}/>
    </div>
  );
};

export default Page;