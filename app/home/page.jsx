"use client";

import { useEffect, useState } from "react";
import { client } from "../../libs/client";

import AddBtn from './itemBox/addBtn/addBtn'

const order = ["fire", "water", "wind", "dark", "light"];

export default function Home() {

  // 召喚獣のデータを入れる変数
  const [monsterData, setMonsterData] = useState([]);

  const [compoundingData, setCompoundingData] = useState([]);

  // 非同期で商慣習の情報取得
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.get({
        endpoint: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
        queries: { limit: 100 },
      });
      // 取得したデータをスプレッド構文でreverseを使って反転
      setMonsterData([...data.contents].reverse());
    };
    fetchData();
  }, []);
  // console.log(monsterData)

  // const grade5Monsters = monsterData.filter((monster) => monster.grade === "5");
  // const grade5 = monsterData.filter((e) => e.grade === '5');
  // console.log(grade5Monsters)
  // const grade4Monsters = monsters.filter((monster) => monster.grade === "4");

  // const groupMonsters = (monsterList) =>
  //   order.map((type) => ({
  //     type,
  //     monsters: monsterList.filter((monster) => monster.type === type),
  //   }));

  return (
    // <div className="p-4">
    //   <h1 className="text-2xl font-bold mb-4">Grade 5 Monsters</h1>
    //   {groupMonsters(grade5Monsters).map(({ type, monsters }) => (
    //     <div key={type} className="mb-4">
    //       <h2 className="text-xl font-bold capitalize mb-2">{type}</h2>
    //       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    //         {monsters.map((monster) => (
    //           <div key={monster.key_name} className="border p-2 rounded-lg">
    //             <img
    //               src={monster.icon.url}
    //               alt={monster.proper_name}
    //               className="w-20 h-20 mx-auto"
    //             />
    //             <p className="text-center font-semibold">{monster.proper_name}</p>
    //             <p className="text-center text-sm">({monster.monster_name})</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ))}

    //   <h1 className="text-2xl font-bold mt-6 mb-4">Grade 4 Monsters</h1>
    //   {groupMonsters(grade4Monsters).map(({ type, monsters }) => (
    //     <div key={type} className="mb-4">
    //       <h2 className="text-xl font-bold capitalize mb-2">{type}</h2>
    //       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    //         {monsters.map((monster) => (
    //           <div key={monster.key_name} className="border p-2 rounded-lg">
    //             <img
    //               src={monster.icon.url}
    //               alt={monster.proper_name}
    //               className="w-20 h-20 mx-auto"
    //             />
    //             <p className="text-center font-semibold">{monster.proper_name}</p>
    //             <p className="text-center text-sm">({monster.monster_name})</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <>
      <AddBtn
        monsterData={monsterData}
        compoundingData={compoundingData}
        setCompoundingData={setCompoundingData}
      />
    </>
  );
}









