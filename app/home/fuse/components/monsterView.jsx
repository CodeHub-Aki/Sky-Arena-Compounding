import Image from "next/image";
import { useState } from "react";

import Menu from './menu'

const Page = ({ monsterData, fuseData, setFuseData, addData, setAddData }) => {

  // モンスター選択画面の状態管理
  const [menuView, setMenuView] = useState(false)

  // モンスター選択画面のスイッチ
  const menuBtn = () => {
    setMenuView(!menuView)
  }

  return (
    <>

      <div className="flex flex-col items-center w-fit m-10">
        {addData.map((monster) => (
              monster.icon && monster.icon.url ? (
                <Image 
                  key={monster.id} 
                  src={monster.icon.url} 
                  alt={monster.monster_name} 
                  width={100} 
                  height={93} 
                  priority 
                />
              ) : null
        ))}
      </div>

      <div className="flex flex-col items-center w-fit m-10">

        <Image src="/monsterIcon.png" alt="icon" width={100} height={93} priority/>

        <button
          className="mt-2"
          onClick={menuBtn}
        >
          <Image src="/addButton.png" alt="Add Button" width={40} height={40} />
        </button>

        {menuView && (
          <Menu
            monsterData={monsterData}
            fuseData={fuseData}
            setFuseData={setFuseData}
            addData={addData}
            setAddData={setAddData}
          />
        )}

      </div>

    </>
  );
};

export default Page;