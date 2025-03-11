"use client";

import { useEffect, useState } from "react";
import { client } from "../../libs/client";

import AddBtn from './itemBox/addBtn/addBtn'

const order = ["fire", "water", "wind", "dark", "light"];

export default function Home() {

  // 召喚獣のデータを入れる変数
  const [monsterData, setMonsterData] = useState([]);

  const [compoundingData, setCompoundingData] = useState([]);

  const [materialData, setMaterialData] = useState([]);

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

  return (
    <>
      <AddBtn
        monsterData={monsterData}
        compoundingData={compoundingData}
        setCompoundingData={setCompoundingData}
        materialData={materialData}
        setMaterialData={setMaterialData}
      />
    </>
  );
}









