import Image from "next/image";
import React, { useState, useEffect } from "react";

const Menu = ({ monsterData, compoundingData, setCompoundingData }) => {

  // 等級の表示画面の状態管理
  const [menuGreat, setMenuGreat] = useState(true);
  // タイプ分類したモンスターデータ
  const [typeDatas, setTypeDatas] = useState({});
  // 属性の配列
  const order = ["fire", "water", "wind", "dark", "light"];

  // モンスターをタイプごとに仕分けしてtypeDatasに追加
  useEffect(() => {

    // 配列のタイプオブジェクトに置き換える
    const newTypeData = Object.fromEntries(order.map((type) => [type, []]));
    
    // タイプごとにモンスターと仕分け
    monsterData.forEach((monster) => {
      newTypeData[monster.type].push(monster);
    });

    // 仕分けしたデータをtypeDatasに追加
    setTypeDatas(newTypeData);
  
  }, [monsterData]);

  // クリックでカウントを増やす
  const handleAdd = (monster) => {
  
    // compoundingDataを複製して新しいオブジェクトを作成
    const newData = { ...compoundingData };
  
    newData.hasOwnProperty(monster.key_name)
    ? newData[monster.key_name] += 1
    : newData[monster.key_name] = 1;
  
    // compoundingDataを更新
    setCompoundingData(newData);
  
  };

  const handleSubtract = (monster) => {
    const newCompoundingData = { ...compoundingData };
    if (compoundingData[monster.key_name] > 0) {
      
      newCompoundingData[monster.key_name] -= 1;

      if (newCompoundingData[monster.key_name] === 0) {
        delete newCompoundingData[monster.key_name]; // 値が0になった場合、キーを削除
      }

      setCompoundingData(newCompoundingData);
    }
  
    console.log("Updated compoundingData (Subtract):", newCompoundingData);
  };

  useEffect(() => {
    console.log("Current compoundingData:", compoundingData);
  }, [compoundingData]);

  return (
    <menu className="fixed w-[65%] h-[80%] bg-gray-800 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 overflow-y-auto rounded-lg shadow-lg">

      <nav className="sticky top-0 z-10 bg-gray-800 pb-2 rounded-t-lg">
        <ul className="flex justify-evenly w-full bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-t-lg shadow-md">
          <li>
            <button
              onClick={() => setMenuGreat(true)}
              className={`px-4 py-2 text-white font-bold rounded-md transition-all duration-300 ${menuGreat ? 'bg-yellow-500' : 'bg-gray-400'}`}
            >
              星５
            </button>
          </li>
          <li>
            <button
              onClick={() => setMenuGreat(false)}
              className={`px-4 py-2 text-white font-bold rounded-md transition-all duration-300 ${!menuGreat ? 'bg-yellow-500' : 'bg-gray-400'}`}
            >
              星４
            </button>
          </li>
        </ul>
      </nav>

      <div className="menu-container mt-4">
        {order.map((type) => (
          <div key={type} className="type-section mb-6">
            <h2 className="text-white text-xl font-semibold sticky left-0 bg-gray-700 p-2 rounded-md shadow-md">{type}</h2>
            <div className="overflow-x-auto flex space-x-4 pb-4 scrollbar-hidden">
              {typeDatas[type]
                ?.filter((monster) => monster.grade === (menuGreat ? "5" : "4"))
                .map((monster) => (
                  <div key={monster.key_name} className="monster-card flex-shrink-0 flex flex-col items-center bg-gray-700 p-4 rounded-lg min-w-[120px] shadow-md transition-transform hover:scale-105">
                    <Image
                      src={monster.icon.url}
                      alt={monster.proper_name}
                      width={100}
                      height={100}
                      priority
                    />
                    <p className="text-white mt-2 text-center text-sm">{monster.proper_name}</p>
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() => handleAdd(monster)}
                        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700 transition-all duration-300"
                      >
                        ＋
                      </button>
                      <span className="text-white mx-2 text-lg">
                      {menuGreat
                        ? (compoundingData[monster.key_name] || 0)  // menuGreatがtrueなら、compoundingDataから値を取得
                        : (compoundingData[monster.key_name] || 0)  // menuGreatがfalseでも同様に値を取得
                      }
                      </span>
                      <button
                        onClick={() => handleSubtract(monster)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 active:bg-red-700 transition-all duration-300"
                      >
                        －
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </menu>
  );
};

export default Menu;



