class Pet {
  constructor(name, species, vaccinations, healthCheckDate, alreadyWarned) {
    this.name = name;
    this.species = species;
    this.vaccinations = vaccinations;
    this.healthCheckDate = healthCheckDate;
    this.alreadyWarned = false;
  }
  addVaccination(vaccin) {
    for (let i = 0; i < this.vaccinations.length; i++) {
      if (this.vaccinations[i] == vaccin) {
        console.log(
          `[예방접종 중복] ${this.name}: ${vaccin}은 이미 등록되어 있습니다.`
        );
        break;
      }
      this.vaccinations.push(vaccin);
      console.log(`[예방접종 추가] ${this.name}: ${vaccin}`);
    }
  }
  updateHealthCheckDate(date) {
    this.healthCheckDate = date;
    console.log(`[건강검진 업데이트] ${this.name}: ${this.healthCheckDate}`);
  }
}

class PetHealthManager {
  registerPet(pet) {
    console.log(
      `[등록] ${pet.species} - ${pet.name} (예방접종: ${pet.vaccinations}, 건강검진: ${pet.healthCheckDate})`
    );
  }
  checkHealthStatus() {
    const check = () => {
      let date = new Date();
      if (date.getFullYear() - date.getFullYear(this.healthCheckDate) > 1) {
        if (!this.alreadyWarned) {
          console.log(
            `[건강검진 경고] ${this.name}: 1년 이상 건강검진을 받지 않았습니다!`
          );
        } else {
        }

        one += 1;
      } else {
        clearInterval(intervalID);
        console.log('[검사 종료]');
      }
    };

    const intervalID = setInterval(() => check(), 3000);
  }
}

//--------------------------------------------------------------------------

const manager = new PetHealthManager();

// 펫 등록
const pet1 = new Pet('나비', '고양이', ['종합백신'], new Date('2023-03-10'));
manager.registerPet(pet1);

// 예방접종 추가
pet1.addVaccination('광견병');
pet1.addVaccination('광견병'); // 중복 테스트

// 건강 상태 검사 시작
manager.checkHealthStatus();

// 5초 후 건강검진 업데이트 (경고 초기화 테스트)
setTimeout(() => {
  pet1.updateHealthCheckDate(new Date());
}, 5000);
