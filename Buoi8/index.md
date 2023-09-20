---
title: Buổi 8
layout: post
---



# Tài liệu Team Web: Buổi 8

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---

1. Promise
2. Async, await
3. Fetch API, REST API

---

## 1. Promise


### 1.1. Promise là gì?

- Promise là một đối tượng đại diện cho một giá trị chưa được xác định tại thời điểm tạo ra nó. Nó cho phép bạn thực hiện các thao tác với giá trị này mà không cần biết nó là gì, và định nghĩa các hành động nên được thực hiện khi giá trị này được xác định.

- Promise là một cơ chế để xử lý các tác vụ bất đồng bộ trong JavaScript. Nó được sử dụng để thực hiện các tác vụ mà mất một khoảng thời gian nhất định để hoàn thành, ví dụ như tải tệp từ máy chủ hoặc xử lý dữ liệu từ cơ sở dữ liệu.

Ví dụ thực tế:

- Khi bạn gửi một yêu cầu Ajax để lấy dữ liệu từ máy chủ, nó sẽ mất một khoảng thời gian nhất định để lấy dữ liệu. Trong khi đó, trình duyệt không thể chờ đợi cho đến khi dữ liệu được trả về. Do đó, bạn cần phải định nghĩa một hàm callback để xử lý dữ liệu khi nó được trả về từ máy chủ. Promise là một cơ chế để xử lý các tác vụ bất đồng bộ như vậy.

## 1.2. Các trạng thái của Promise

- Một promise có thể có 3 trạng thái:

    - Pending: Trạng thái chờ đợi, khi một promise được tạo ra, nó sẽ ở trạng thái pending. Trong trạng thái này, promise có thể chuyển sang trạng thái fulfilled hoặc rejected.

    - Fulfilled: Trạng thái hoàn thành, khi một promise được hoàn thành, nó sẽ ở trạng thái fulfilled. Trong trạng thái này, promise có thể có một giá trị kết quả và nó không thể chuyển sang trạng thái khác.

    - Rejected: Trạng thái thất bại, khi một promise bị thất bại, nó sẽ ở trạng thái rejected. Trong trạng thái này, promise có thể có một giá trị lỗi và nó không thể chuyển sang trạng thái khác.

## 1.3. Cách sử dụng Promise

- Để tạo một promise, bạn sử dụng từ khóa new với đối tượng Promise và truyền một hàm callback với hai tham số là resolve và reject vào nó.

- Hàm callback này được gọi là executor function. Nó được gọi ngay lập tức khi promise được tạo ra.

- Hàm callback này nhận hai tham số là resolve và reject. Đây là hai hàm được cung cấp bởi JavaScript. Khi bạn gọi hàm resolve, promise sẽ chuyển sang trạng thái fulfilled. Khi bạn gọi hàm reject, promise sẽ chuyển sang trạng thái rejected.

- Ví dụ sau tạo một promise và chuyển sang trạng thái fulfilled sau 1 giây:

```js

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);
    });

```

- Để truy cập vào giá trị kết quả của promise, bạn sử dụng phương thức then().

- Phương thức then() nhận một hàm callback với tham số là giá trị kết quả của promise. Nó được gọi khi promise chuyển sang trạng thái fulfilled.

- Ví dụ sau truy cập vào giá trị kết quả của promise và in ra nó:

```js

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);
    });

    promise.then(
        result => alert(result), // shows "done!" after 1 second
        error => alert(error) // doesn't run
    );

```

- Nếu bạn muốn xử lý lỗi, bạn có thể sử dụng phương thức catch().

- Phương thức catch() nhận một hàm callback với tham số là giá trị lỗi của promise. Nó được gọi khi promise chuyển sang trạng thái rejected.

- Ví dụ sau xử lý lỗi của promise:

```js

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    });

    // .catch(f) is the same as promise.then(null, f)
    promise.catch(alert); // shows "Error: Whoops!" after 1 second

```

- Nếu bạn muốn thực hiện một số hành động khi promise hoàn thành, bất kể nó có thành công hay thất bại, bạn có thể sử dụng phương thức finally().

- Phương thức finally() nhận một hàm callback và nó được gọi khi promise chuyển sang trạng thái fulfilled hoặc rejected.

- Ví dụ sau thực hiện một số hành động khi promise hoàn thành:

```js

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 1000);
    });

    promise.finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result

```

## 1.4. Promise chaining

- Bạn có thể trả về một promise từ một hàm callback được truyền vào phương thức then().

- Ví dụ sau trả về một promise từ hàm callback được truyền vào phương thức then():

```js

    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000); // (*)

    }).then(function(result) { // (**)

        alert(result); // 1
        return result * 2;

    }).then(function(result) { // (***)

        alert(result); // 2
        return result * 2;

    }).then(function(result) {

        alert(result); // 4
        return result * 2;

    });

```

- Trong ví dụ trên, hàm callback được truyền vào phương thức then() trả về một promise. Do đó, phương thức then() trả về một promise mới, cho phép bạn gọi phương thức then() tiếp theo.

## 1.5. Promise.all()

- Phương thức Promise.all(iterable) nhận một mảng các promise và trả về một promise mới. Promise mới này sẽ được hoàn thành khi tất cả các promise trong mảng đều được hoàn thành.

- Nếu một trong các promise trong mảng bị thất bại, promise mới này sẽ bị thất bại.

- Ví dụ sau tạo một promise mới từ một mảng các promise:

```js

    let promise = Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
        new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
        new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
    ]);

    promise.then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

```

- Trong ví dụ trên, phương thức then() được gọi khi tất cả các promise trong mảng đều được hoàn thành.

- Nếu một trong các promise trong mảng bị thất bại, ví dụ như sau:

```js

    let promise = Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]);

    promise.catch(alert); // Error: Whoops!

```

- Trong ví dụ trên, phương thức catch() được gọi khi một trong các promise trong mảng bị thất bại.

# 2. Async, await

## 2.1. Async

- Async là một từ khóa được sử dụng để khai báo một hàm bất đồng bộ. Khi một hàm được khai báo với từ khóa async, nó sẽ trả về một promise.

- Ví dụ sau khai báo một hàm bất đồng bộ:

```js

    async function f() {
        return 1;
    }

```

- Hàm f() trên trả về một promise. Nó sẽ chuyển sang trạng thái fulfilled với giá trị kết quả là 1.

- Nếu bạn muốn trả về một promise với giá trị là một giá trị khác, bạn có thể sử dụng phương thức resolve() của đối tượng Promise như sau:

```js

    async function f() {
        return Promise.resolve(1);
    }

```

- Nếu bạn muốn trả về một promise với giá trị là một giá trị lỗi, bạn có thể sử dụng phương thức reject() của đối tượng Promise như sau:

```js

    async function f() {
        return Promise.reject(new Error("Whoops!"));
    }

```

- Nếu bạn muốn trả về một giá trị khác, bạn có thể sử dụng phương thức resolve() của đối tượng Promise như sau:

```js

    async function f() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000)
        });

        let result = await promise; // wait until the promise resolves (*)

        alert(result); // "done!"
    }

    f();

```

- Trong ví dụ trên, hàm f() trả về một promise. Nó sẽ chuyển sang trạng thái fulfilled sau 1 giây với giá trị kết quả là "done!".

- Trong hàm f(), bạn sử dụng từ khóa await để đợi cho đến khi promise được hoàn thành. Nó chỉ có thể được sử dụng bên trong các hàm được khai báo với từ khóa async.

- Khi bạn sử dụng từ khóa await, JavaScript sẽ tạm dừng thực thi hàm cho đến khi promise được hoàn thành. Nó sẽ chặn việc thực thi các đoạn mã tiếp theo cho đến khi promise được hoàn thành.

## 2.2. Await

- Await là một từ khóa được sử dụng để đợi cho đến khi một promise được hoàn thành. Nó chỉ có thể được sử dụng bên trong các hàm được khai báo với từ khóa async.

- Khi bạn sử dụng từ khóa await, JavaScript sẽ tạm dừng thực thi hàm cho đến khi promise được hoàn thành. Nó sẽ chặn việc thực thi các đoạn mã tiếp theo cho đến khi promise được hoàn thành.

- Ví dụ sau khai báo một hàm bất đồng bộ và sử dụng từ khóa await để đợi cho đến khi promise được hoàn thành:

```js

    async function f() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000)
        });

        let result = await promise; // wait until the promise resolves (*)

        alert(result); // "done!"
    }

    f();

```

- Trong ví dụ trên, hàm f() trả về một promise. Nó sẽ chuyển sang trạng thái fulfilled sau 1 giây với giá trị kết quả là "done!".

# 3. Fetch API, REST API

## 3.1. Fetch API

- Fetch API là một API được sử dụng để thực hiện các yêu cầu HTTP. Nó cung cấp một giao diện JavaScript cho việc tương tác với các tài nguyên trên mạng (network).

- Fetch API cung cấp một phương thức fetch() để thực hiện các yêu cầu HTTP. Phương thức này trả về một promise.

- Ví dụ sau sử dụng phương thức fetch() để lấy dữ liệu từ một tệp JSON:

```js

    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => console.log(data));

```

- Trong ví dụ trên, phương thức fetch() được sử dụng để lấy dữ liệu từ một tệp JSON. Nó trả về một promise.

- Phương thức then() được gọi khi promise được hoàn thành. Nó nhận một hàm callback với tham số là kết quả của promise. Trong ví dụ trên, hàm callback nhận một tham số là response. Nó được gọi khi promise được hoàn thành.

- Phương thức json() được gọi trên response để chuyển đổi dữ liệu nhận được thành một đối tượng JavaScript. Nó trả về một promise.

- Phương thức then() được gọi khi promise được hoàn thành. Nó nhận một hàm callback với tham số là kết quả của promise. Trong ví dụ trên, hàm callback nhận một tham số là data. Nó được gọi khi promise được hoàn thành.

- Trong hàm callback, bạn có thể truy cập vào dữ liệu được chuyển đổi từ tệp JSON.

## 3.2. REST API

- REST API là một kiểu kiến trúc phần mềm cho các hệ thống phân tán. Nó được sử dụng để thiết kế các ứng dụng web có khả năng mở rộng.

- REST là viết tắt của Representational State Transfer. Nó là một kiểu kiến trúc phần mềm cho các hệ thống phân tán.

- REST API là một API được thiết kế theo kiểu REST. Nó được sử dụng để thiết kế các ứng dụng web có khả năng mở rộng.

- REST API sử dụng các phương thức HTTP như GET, POST, PUT, DELETE, OPTIONS, HEAD để thực hiện các yêu cầu.

Ví dụ luồng:

- Một ứng dụng web gửi một yêu cầu HTTP đến máy chủ.

- Máy chủ xử lý yêu cầu và trả về một phản hồi.

- Ứng dụng web nhận phản hồi và hiển thị dữ liệu cho người dùng.

- Ví dụ sau sử dụng phương thức fetch() để lấy dữ liệu từ một REST API:

```js

    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => console.log(data));

```

- Trong ví dụ trên, phương thức fetch() được sử dụng để lấy dữ liệu từ một REST API. Nó trả về một promise.

