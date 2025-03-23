class Item {
  constructor(name, type, stock) {
    this.name = name;
    this.type = type;
    this.stock = stock;
    this.alreadyWarned = false;
  }
}

class InventoryManager {
  constructor() {
    this.items = [];
    this.interval = null;
  }
  addItem(item) {
    // 새로운 아이템을 등록하고 등록정보를 출력
    this.items.push(item);
    console.log(`[추가] ${item.type} - ${item.name} (재고: ${item.stock}개)`);
  }

  updateStock(name, newStock) {
    //재고를 업데이트하고 5개 미만이면 경고 출력력

    this.items.forEach((item) => {
      if (item.name == name && newStock >= 0) {
        item.stock = newStock;
        console.log(`[업데이트] ${name}: ${newStock}개`);
        item.alreadyWarned = false;
        if (newStock < 5) {
          console.log(`[재고 부족 경고] ${name}: 재고가 5개 미만입니다!`);
          return;
        }
      } else {
        console.log('[업데이트 오류] 재고는 0 이상이어야 합니다.');
        return;
      }
    });
  }

  checkStock() {
    this.interval = setInterval(() => {
      //재고 상태 검사사
      this.items.forEach((item) => {
        if (item.stock < 5 && !item.alreadyWarned) {
          console.log('[자동 경고] 고급 고양이 사료: 재고가 5개 미만입니다!');
          item.alreadyWarned = true;
        }
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(this.interval);
      console.log('[재고 검사 종료]');
    }, 5000);
  }
}

const inventory = new InventoryManager();

// 아이템 등록
const item1 = new Item('고급 고양이 사료', '사료', 10);
inventory.addItem(item1);

// 재고 업데이트
inventory.updateStock('고급 고양이 사료', 4); // 5개 미만 → 경고 발생
inventory.updateStock('고급 고양이 사료', -1); // 음수 입력 → 오류 발생

// 재고 상태 검사 시작 (5초 후 종료)
inventory.checkStock();
