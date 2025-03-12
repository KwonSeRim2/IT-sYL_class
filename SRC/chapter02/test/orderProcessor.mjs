const ok = true;
const orderlist = [
  {
    menu: '삼겹살',
    quantity: '2인분',
  },
  { menu: '목살', quantity: '3인분' },
  { menu: '갈비', quantity: '1인분' },
];
let order;

function list(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(
      `✅${orderlist[i].menu} ${orderlist[i].quantity} 주문 처리 완료`
    );
  }
}

const processOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (ok) resolve(orderlist);
    else reject();
  }, 1000);
});

processOrder
  .then((result) => list(result))
  //
  .catch();

export default processOrder;
