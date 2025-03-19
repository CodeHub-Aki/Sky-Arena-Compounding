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

  const countBtn = (id, count) => {
    setAddData((prev) => {
      return prev
        .map((monster) =>
          monster.id === id ? { ...monster, count: monster.count + count } : monster
        )
        .filter((monster) => monster.count > 0);
    });
  };

  return (
    <>

      <div className="flex flex-col items-center w-fit m-10">
        {addData ?
          addData.map((monster) => (
            <div key={monster.id} >
              <Image 
                src={monster.icon.url} 
                alt={monster.monster_name} 
                width={100} 
                height={100}
                priority 
              />
              <div className="flex">
                <button
                  onClick={() => countBtn(monster.id, -1)}
                >
                  －
                </button>
                  <p>{monster.count}</p>
                <button
                  onClick={() => countBtn(monster.id, 1)}
                >
                  ＋
                </button>
              </div>
            </div>
          ))
        : null}
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
            setMenuView={setMenuView}
          />
        )}

      </div>

    </>
  );
};

export default Page;