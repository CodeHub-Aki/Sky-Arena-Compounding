import { typeOrder } from '../../utils/typeOrder'

// 引数でモンスターデータを受け取る。
export const category = (monsterData) => {

  // returnでmonsterDataにreduceをかける、reduce((空のオブジェクト, モンスターデータ) => {},初期値);
  return monsterData.reduce((acc, monster) => {

    // monster.gradeやmonster.typeを毎回書くのがめんどくさいから、事前にmonsterから取り出す。
    const { grade, type } = monster;

    // accという空のオブジェクトにgradeのキーがなかったら処理を行う
    if(!acc[grade]){

      // gradeに基づき、acc = { grade: {}};を作成。 
      acc[grade] = {};
      // acc = { grade: {}};の中にforEachを使用し、
      // acc = { grade: {
      //   fire: [],
      //   water: [],
      //   wind: [],
      //   light: [],
      //   dark: [],
      // }};を作成。
      typeOrder.forEach(type => acc[grade][type] = []);

    }

    // 作成したオブジェクトの中でgradeとtypeが当てはまる配列にモンスターデータをpush
    acc[grade][type].push(monster);

    // 最後にaccを返す
    return acc;

  // accの初期値設定
  }, {})

};