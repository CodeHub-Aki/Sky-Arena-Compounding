import { useState, useEffect } from 'react'

import { typeOrder, typeLabel } from '../../utils/typeOrder'
import { category } from '../utils/category'

const menu = ({ monsterData, fuseData, setFuseData }) => {

  const [menuBtn, setMenuBtn] = useState(true);
  const [addData, setAddData] = useState([]);
  
  const addBtn = (monster) => {
    setAddData((prev) => [...prev, monster])
    setFuseData(category(addData));
  }

  console.log(addData)
  console.log(fuseData)
  
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
            {monsterData[menuBtn ? '5' : '4'][type].map((monster) => (
              <li
                key={monster.key_name}
                onClick={() => addBtn(monster)}
              >
                {monster.proper_name}
              </li>
            ))}
          </ul>
        </div>
      ))}

    </menu>
  )
}

export default menu