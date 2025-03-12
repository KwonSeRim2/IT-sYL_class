// 문제 1
// import order from './order.mjs';

// order.order1();

//문제 2

// import order from './orderManager.mjs';

// order.ordering('삼겹살', '3인분');
// order.ordering('목살', '2인분');

// const list = () => {
//   console.log('현재 주문 내역:');

//   for (let i = 0; i < order.order.length; i++) {
//     console.log(`${order.order[i].f}: ${order.order[i].m}`);

//     order.order[i];
//   }
// };

// list();

//문제 3
// import grill from './grill.mjs';

// async function startGrilling() {
//   await grill.grillMeat;
//   console.log('식사 시작!');
// }

// startGrilling();

//문제 4

import order from './orderProcessor.mjs';

async function processOrders() {
  await order;
  console.log('🍽️ 모든 주문 처리 완료! 식사 시작!');
}
processOrders();
