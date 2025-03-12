"use client";

import { useEffect, useState } from "react";
import { client } from "../../libs/client";

import AddBtn from './itemBox/addBtn/addBtn';

export default function Home() {

  // モンスターのデータ
  const [monsterData, setMonsterData] = useState([]);
  // 調合モンスターのデータ
  const [fuseData, setFuseData] = useState([]);
  // 素材モンスターのデータ
  const [matelData, setMatelData] = useState({});

  // モンスターデータの情報取得
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.get({
        endpoint: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
        queries: { limit: 100 },
      });
      setMonsterData([...data.contents].reverse());
    };
    fetchData();
  }, []);

  return (
    <>
      <AddBtn
        monsterData={monsterData}
        fuseData={fuseData}
        serFuseData={setFuseData}
        matelData={matelData}
        setMatelData={setMatelData}
      />
    </>
  );
}

// もとに配列データ
// {
//   タイプに分けてから星で分ける
//   星で分けてからタイプに分ける
// }
// 表示したモンスターを元に選んで結果を保存
// 星関係なく名前と個数を保存

// ・・データ処理｛  必要情報  名前  個数  育成レベル
// 星５と星４を分岐

// 星５
// 素材１～素材３を星４の処理に渡す
// 素材４の個数を計算して育成レベル５にカテゴリーにして、属性ごとに分けて保存

// 星４
// それぞれの素材１～素材４まで取得する
// 個数を計算して育成レベル４にカテゴリーして、属性ごとに分けて保存
// ｝

// 必要配列

// モンスターデータ
// 調合モンスターの名前と個数データ
// 素材データ