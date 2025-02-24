import React from 'react';

const page = () => {

  const arase = [
    { name: 'イフリート', type: 'dark', number: 1 },
    { name: '熊猫武者', type: 'fire', number: 1 },
    { name: 'バーレイグ', type: 'fire', number: 2 },
    { name: '鬼怪童子', type: 'dark', number: 2 },
    { name: 'フェニックス', type: 'water', number: 1 },
    { name: 'トーテム術士', type: 'wind', number: 2 },
    { name: 'パラディン', type: 'light', number: 1 },
    { name: 'ヴァルキリー', type: 'wind', number: 1 },
  ];

  // タイプ表示順を設定
  const typeOrder = ['fire', 'water', 'wind', 'dark', 'light'];

  // 配列を作成
  const groupedByType = {};

  // forEachでaraseを繰り返し処理
  arase.forEach((item) => {
    // 新しいタイプなら新しい配列を作る
    if (!groupedByType[item.type]) {
      groupedByType[item.type] = [];
    }
    groupedByType[item.type].push(item);
  });

  return (
    <div>
      {typeOrder.map((type) => (
        groupedByType[type] && (
          <div key={type} style={{ marginBottom: "20px" }}>
            <h2>{type}</h2>
            <ul>
              {groupedByType[type]
                .sort((a, b) => a.number - b.number) // number順にソート
                .map((item, index) => (
                  <li key={index}>
                    {item.name} (No.{item.number})
                  </li>
                ))}
            </ul>
          </div>
        )
      ))}
    </div>
  );
};

export default page;
