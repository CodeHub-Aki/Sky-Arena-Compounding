import { useState, useEffect } from 'react'

import { typeOrder, typeLabel } from '../../utils/typeOrder'
import { category } from '../utils/category'

const menu = ({ monsterData, fuseData, setFuseData, addData, setAddData, setMenuView }) => {

  const [menuBtn, setMenuBtn] = useState(true);
  
  
  const addBtn = (monster) => {
    setMenuView(false);
    setAddData((prev) => {
      const addCheck = prev.find((e) => e.id === monster.id);
      if(addCheck){
        return prev;
      } else {
        return [...prev, {...monster, count: 1}];
      }
    })
  };

  useEffect(() => {
    setFuseData(category(addData));
  }, [addData]);

  console.log(fuseData)
  console.log(addData)
  
  return (
    <menu
      className='p-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white rounded-lg'
      style={{
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1), -5px 5px 10px rgba(0, 0, 0, 0.1), 5px -5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)'
      }}
    >

      <nav>
        <ul className='flex'>
          <li className='mb-4 mx-10'>
            <button
              onClick={() => setMenuBtn(true)}
              className={`py-2 px-6 bg-slate-300 hover:bg-slate-100 rounded-lg shadow hover:shadow-none ${menuBtn ? 'bg-slate-100 shadow-none' : ''}`}
            >
              星５
            </button>
          </li>
          <li className='mb-4 mx-10'>
            <button
              onClick={() => setMenuBtn(false)}
              className={`py-2 px-6 bg-slate-300 hover:bg-slate-100 rounded-lg shadow hover:shadow-none ${menuBtn ? '' : 'bg-slate-100 shadow-none'}`}
            >
              星４
            </button>
          </li>
        </ul>
      </nav>
      
      {typeOrder.map((type) => (
        <div key={type}>
          <h3>{typeLabel[type]}属性</h3>
          <ul>
            {monsterData[menuBtn ? '5' : '4'][type].map((monster) => {
              const monsterCheck = addData.some((e) => e.id === monster.id);
              return (
                <li
                  key={monster.key_name}
                  className={`${monsterCheck && 'opacity-30'}`}
                >
                  <button
                    onClick={() => addBtn(monster)}
                    disabled={monsterCheck}
                  >
                    {monster.proper_name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
      


      {/* {typeOrder.map((type) => (
  <div key={type}>
    <h3>{typeLabel[type]}属性</h3>
    <ul>
      {monsterData[menuBtn ? '5' : '4'][type].map((monster) => {
        const isSelected = addData.some((e) => e.id === monster.id); // 既に選択済みか判定
        
        return (
          <li key={monster.key_name}>
            <button 
              onClick={() => addBtn(monster)} 
              disabled={isSelected} 
              className={`py-2 px-4 rounded-lg ${isSelected ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
            >
              {monster.proper_name}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
))} */}

      

    </menu>
  )
}

export default menu