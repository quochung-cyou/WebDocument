---
title: Buổi 5
layout: post
---



# Tài liệu Team Web: Buổi 5

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---

# Mục lục
Tìm hiểu về JS ES6 :
- Từ khóa let, const
- Arrow function
- Template literals
- Destructuring
- Spread

---

# I. Tìm hiểu về JS ES6

![](https://miro.medium.com/v2/resize:fit:840/1*8nfBRAssY0DuETYwdwyqqw.png)

JS ES6 là phiên bản mới nhất của ngôn ngữ JavaScript, được ra mắt vào năm 2015. Phiên bản này bổ sung thêm nhiều tính năng mới, giúp cho việc lập trình trở nên dễ dàng hơn, code ngắn gọn hơn, dễ đọc hơn.

JS ES6 được hỗ trợ trên tất cả các trình duyệt hiện nay, tuy nhiên để hỗ trợ được đầy đủ các tính năng của ES6 thì các trình duyệt cần được cập nhật lên phiên bản mới nhất.


## 1. Từ khóa let, const

- `let` và `const` là 2 từ khóa mới được giới thiệu trong ES6, thay thế cho `var` trong ES5.
- `let` và `const` có phạm vi hoạt động (scope) là block scope, còn `var` là function scope.
- `let` và `const` có thể được khai báo mà không cần khởi tạo giá trị, còn `var` thì không.
- `let` và `const` không thể được khai báo lại trong cùng 1 scope, còn `var` thì có thể.
- `let` có thể được gán lại giá trị, còn `const` thì không.

Ví dụ:
    
``` javascript

    // Khai báo biến
    let a;
    const b;

    // Khai báo và khởi tạo giá trị
    let c = 1;
    const d = 2;

    // Khai báo lại biến
    let e = 3;
    let e = 4; // Lỗi

    var f = 5;
    var f = 6; // Không lỗi

    // Gán lại giá trị
    let g = 7;  
    g = 8; // Không lỗi

    const h = 9;
    h = 10; // Lỗi

```

## 2. Arrow function

Arrow function là cú pháp rút gọn của function thông thường, giúp cho code ngắn gọn hơn, khó đọc hơn.

Ví dụ:

``` javascript

    // Function thông thường
    function sum(a, b) {
        return a + b;
    }

    // Arrow function
    const sum = (a, b) => a + b;

```

## 3. Template literals

Template literals là cú pháp cho phép chèn biến vào trong chuỗi, giúp cho việc tạo chuỗi trở nên dễ dàng hơn.

Ví dụ:

``` javascript

    // Chuỗi thông thường
    const name = 'Hung';
    const str = 'Hello ' + name + '!';

    // Template literals
    const name = 'Hung';
    const str = `Hello ${name}!`;

```

## 4. Destructuring

Destructuring là cú pháp cho phép lấy các phần tử từ object hoặc array ra và gán vào các biến.

Cú pháp lấy phần tử từ object:

``` javascript

    const obj = {
        name: 'Hung',
        age: 20,
        address: 'Ha Noi'
    };

    const { name, age, address } = obj;

    //Lúc này
    // name = 'Hung'
    // age = 20
    // address = 'Ha Noi'

```

Cú pháp lấy phần tử từ array:

``` javascript

    const arr = [1, 2, 3, 4, 5];

    const [a, b, c, d, e] = arr;

    //Lúc này
    // a = 1
    // b = 2
    // c = 3
    // d = 4
    // e = 5

```

## 5. Spread

Spread là cú pháp cho phép copy các phần tử từ object hoặc array ra và gán vào object hoặc array khác.

Cú pháp copy phần tử từ object:

``` javascript

    const obj = {
        name: 'Hung',
        age: 20,
        address: 'Ha Noi'
    };

    const newObj = { ...obj };

    //Lúc này
    // newObj = {
    //     name: 'Hung',
    //     age: 20,
    //     address: 'Ha Noi'
    // };

```

Cú pháp copy phần tử từ array:

``` javascript

    const arr = [1, 2, 3, 4, 5];

    const newArr = [ ...arr ];

    //Lúc này
    // newArr = [1, 2, 3, 4, 5];

```

---

# II. Tài liệu tham khảo

1. [ES6 Tutorial](https://www.javascripttutorial.net/es6/)
2. [ES6 Tutorial](https://www.tutorialspoint.com/es6/index.htm)
3. [ES6 Tutorial](https://www.javatpoint.com/es6-tutorial)
4. [ES6 Tutorial](https://www.w3schools.com/js/js_es6.asp)
5. [ES6 Tutorial](https://www.geeksforgeeks.org/es6-tutorial/)
6. [ES6 Tutorial](https://www.tutorialsteacher.com/es6)
7. [ES6 Tutorial](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/)





