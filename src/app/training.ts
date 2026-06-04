//        1-й этаж

//4. Создать переменную status, которая может быть только: "loading", "success", "error".
type TappStatus = 'loading' | 'success' | 'error';

// 5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".
type TtextFormat = 'uppercase' | 'lowercase' | 'capitalize';

// 6. Создать интерфейс, который описывает юзера. Одно поле должно быть опциональным.
interface IUser {
  name: string;
  surname: string;
  age?: number;
  email: string
}

// 7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля.
interface IUserAdvanced extends IUser {
  gender: 'male' | 'female';
  phone: number;
}

//        2-й этаж

//4. Создать переменную status, которая может быть только: "loading", "success", "error".
let appStatus:TappStatus = 'loading';

// 5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".
let textFormat: TtextFormat = 'uppercase';

// 6. Создать интерфейс, который описывает юзера. Одно поле должно быть опциональным.
const user1: IUser = {
  name: 'John',
  surname: 'Smith',
  age: 30,
  email: 'johnsmith1996@example.com'
};

// 7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля.
const user2: IUserAdvanced = {
  name: 'Jane',
  surname: 'Clark',
  age: 33,
  email: 'janeclark1996@example.com',
  gender: 'female',
  phone: 1234567890
};

// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров
const usersArray: IUser[] = [
  {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 22,
    email: 'ivanov2003@example.com'
  },
  {
    name: 'Petr',
    surname: 'Petrov',
    age: 25,
    email: 'petrov2001@example.com'
  },
  {
    name: 'Vasya',
    surname: 'Vasilev',
    age: 28,
    email: 'vasilev1998@example.com'
  },
  {
    name: 'Sergey',
    surname: 'Sergeev',
    age: 30,
    email: 'sergeev1996@example.com'
  }
]
const filteredUsers = usersArray.filter(user => user.age && user.age > 25);


//        3-й этаж

//3. Создать функцию, которая принимает 2 числа и возвращает их сумму.
function sum(a:number, b:number): number {
  return a + b;
}

// 8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) 
//  и на основе этого возвращает форматированную строку.
function formatString (text: string, format: TtextFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  } else if (format === 'lowercase') {
    return text.toLowerCase();
  } else {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
}

// 9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.  
//  (есть специальные методы для этого, гуглим)
function removeSymbol (text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}


//        4-й этаж

//3. Создать функцию, которая принимает 2 числа и возвращает их сумму.
console.log('Задание 3:',sum(5, 10));

//4. Создать переменную status, которая может быть только: "loading", "success", "error".
console.log('Задание 4: Текущий статус:', appStatus);

// 5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".
console.log('Задание 5: Текущий формат текста:', textFormat);

// 6. Создать интерфейс, который описывает юзера. Одно поле должно быть опциональным.
console.log('Задание 6:', user1);

// 7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля.
console.log('Задание 7:', user2);

// 8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) 
//  и на основе этого возвращает форматированную строку.
console.log('Задание 8:', formatString('Это текст в верхнем регистре', 'uppercase'));
console.log('Задание 8:', formatString('Это текст в нижнем регистре', 'lowercase'));
console.log('Задание 8:', formatString('Это текст с заглавной буквой', 'capitalize'));

// 9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.  
//  (есть специальные методы для этого, гуглим)
console.log('Задание 9:', removeSymbol('Крот роет землю', 'К'));

// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров
console.log('Задание 10:', filteredUsers);