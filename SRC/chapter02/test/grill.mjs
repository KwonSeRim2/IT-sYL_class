const t = true;
const meat = '';

const grillMeat = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (t) resolve('삽겹살');
    else reject();
  }, 2000);
});

grillMeat
  .then((result) => console.log(`${result}가 다 구워졌습니다.`))
  //
  .catch();

export default { grillMeat };
