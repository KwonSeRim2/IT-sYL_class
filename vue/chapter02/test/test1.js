class Pet {
  constructor(
    name,
    species,
    vaccinations = [], //배열이니까 배열로 초기화화
    healthCheckDate = new Date() // 날짜이니까 날짜 함수로 초기화
    //alreadyWarned  이건 필요 없는듯듯 받아올 데이터가 있는게 아니니까까
  ) {
    this.name = name;
    this.species = species;
    this.vaccinations = vaccinations;
    this.healthCheckDate = healthCheckDate;
    this.alreadyWarned = false; //여기에서만 촤기값 정해주고 사용용
  }

  //예방접종 추가 (중복 방지)
  addVaccination(vaccin) {
    //for (let i = 0; i < this.vaccinations.length; i++) {  나는 배열을 이렇게 검사하라고 밖에 안배웠는데...

    // 이걸로 한번에 검사가 가능하군..!
    if (!this.vaccinations.includes(vaccin)) {
      this.vaccinations.push(vaccin);
      console.log(`[예방접종 추가] ${this.name}: ${vaccin}`);
    } else {
      console.log(
        `[예방접종 중복] ${this.name}: ${vaccin}은 이미 등록되어 있습니다.`
      );
    }

    // 이거 사용하니까 중복 문제도 해결 됨됨

    // if (this.vaccinations[i] == vaccin) {
    //   console.log(
    //     `[예방접종 중복] ${this.name}: ${vaccin}은 이미 등록되어 있습니다.`
    //   );
    //   break;
    // }

    // }
  }

  //건강검진 날짜 업데트 및 경고 초기화화
  updateHealthCheckDate(newDate) {
    this.healthCheckDate = newDate;
    // ? 왜 들어가지? 아 초기화화
    //------------ADD
    this.alreadyWarned = false;
    //------------ADD
    // console.log(`[건강검진 업데이트] ${this.name}: ${this.healthCheckDate}`);
    //그치 여기에 굳이 길게 들어갈 필요 없지..ㅎㅎㅎ
    console.log(
      // toISOStrin(): 날짜 표현 가능, spsit(): 어떻게 나눌지 표현 가능
      `[건강검진 업데이트] ${this.name}: ${newDate.toISOString().split('T')[0]}`
    );
  }
}

class PetHealthManager {
  //구조를 안썼다
  //-----------ADD
  constructor() {
    this.pets = []; // 어디에 쓰는거야?
    this.healthCheckInterval = null; //이하동문 - 밑에서 화살표 함서 할당 이러면 다시 불러오기도 편할듯
  }
  //--------------ADD

  //팻 등록록
  registerPet(pet) {
    this.pets.push(pet); // 등록된 팻 리스트에 추가
    console.log(
      `[등록] ${pet.species} - ${pet.name} (예방접종: ${pet.vaccinations.join(
        ', '
      )}, 건강검진: ${pet.healthCheckDate.toISOString().split('T')[0]})`
    );
  }

  // 주기적으로 건강 상태 검사 (10초 후 종료)
  //------------------ADD
  checkHealthStatus() {
    this.healthCheckInterval = setInterval(() => {
      const today = new Date();
      this.pets.forEach((pet) => {
        const diffYear =
          today.getFullYear() - pet.healthCheckDate.getFullYear();
        if (diffYear >= 1 && !pet.alreadyWarned) {
          console.log(
            `[건강검진 경고] ${pet.name}: 1년 이상 건강검진을 받지 않았습니다!`
          );
          pet.alreadyWarned = true;
        }
      });
    }, 3000);

    //10초후 검사 종료
    setTimeout(() => {
      clearInterval(this.healthCheckInterval);
      console.log('[검사 종료]');
    }, 10000);
    //----------------------------ADD

    // 나는 여기서 변수를 만들어서 화살표 함수를 만들었는데 위세서 이미 하나를 만들어서 할당해줬내...오!
    // const check = () => {
    //   let date = new Date();
    //   if (date.getFullYear() - date.getFullYear(this.healthCheckDate) > 1) {
    //     if (!this.alreadyWarned) {
    //       console.log(
    //         `[건강검진 경고] ${this.name}: 1년 이상 건강검진을 받지 않았습니다!`
    //       );
    //     } else {
    //     }

    //     one += 1;
    //   } else {
    //     clearInterval(intervalID);
    //     console.log('[검사 종료]');
    //   }
    // };

    // const intervalID = setInterval(() => check(), 3000);
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
