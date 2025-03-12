const ok = true;

const orderStatus = [
  { menu: 'samgyeopsal', status: '주문 대기' },
  { menu: 'galbi', status: '주문 대기' },
];

const updateStatus = new Promise((resolve, reject) => {
  for (let i = 0; i < orderStatus.length; i++) {
    setTimeout(() => {
      orderStatus[i].status = '굽는 중';
      console.log(
        `🔄 ${orderStatus.menu} 상태가 '${orderStatus.status}'로 변경되었습니다.`
      );
    }, 1000);
    setTimeout(() => {
      orderStatus[i].status = '완료';
      console.log(
        `🔄 ${orderStatus.menu} 상태가 '${orderStatus.status}'로 변경되었습니다.`
      );
    }, 1000);
  }
  if (ok) resolve();
  else reject();
});

updateStatus
  .then()
  //
  .catch();
