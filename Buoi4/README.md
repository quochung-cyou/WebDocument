# Tài liệu Team Web: Buổi 4

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---

# Mục lục
- Khai báo dữ liệu: Cấu trúc trong JavaScript, Biến, toán tử ...
- Các đối tượng trong JavaScript: Array, Object, Function, ...
- Vòng lặp
- Call back
- Các method trong JavaScript: Map, Reduce, Filter, Some, Includes ....

---

## I. Khai báo dữ liệu: Cấu trúc trong JavaScript, Biến, toán tử ...

### 1. Cấu trúc trong JavaScript

#### 1.1 Biểu thức (expressions)

Do đó, mỗi giá trị được viết trực tiếp (66, 'hello', true, NaN,...) là một biểu thức (expression). Hay việc kết hợp những giá trị với toán tử (1 + 5, 'I' + ' love' + ' you', !false, ...) cũng là những biểu thức.

Biểu thức có thể đơn giản là những phép cộng, trừ,... Hoặc có thể là những công thức toán học, vật lý,... phức tạp. Và trong một biểu thức có thể chứa nhiều biểu thức con.

#### 1.2 Câu lệnh (statements)

Câu lệnh (statement) là một đoạn mã thực hiện một hành động nào đó. Ví dụ như câu lệnh gán giá trị cho biến, câu lệnh điều kiện, câu lệnh lặp,...

Một câu lệnh có thể bao gồm một hoặc nhiều biểu thức. Và mỗi câu lệnh được kết thúc bằng dấu chấm phẩy (;).

#### 1.3 Khối lệnh (block)

Khối lệnh (block) là một nhóm các câu lệnh được đặt trong cặp dấu ngoặc nhọn {}.

Khối lệnh thường được sử dụng trong các câu lệnh điều kiện (if, else, switch,...) và vòng lặp (for, while,...).

#### 1.4 Hàm (function)

Hàm (function) là một khối lệnh được đặt tên và có thể được gọi bất cứ lúc nào.

Hàm có thể nhận các tham số đầu vào và trả về một giá trị.

Hàm được sử dụng để tái sử dụng code, giúp code dễ đọc hơn và dễ bảo trì hơn.

#### 1.5 Các cấu trúc khác

Ngoài ra, trong JavaScript còn có các cấu trúc khác như: lớp (class), module, generator, promise, async/await,...



### 2. Biến

![Biến](https://dmitripavlutin.com/javascript-variables-const-let-var/cover.png)

#### 2.1 Khai báo biến

- Biến là một vùng nhớ trong máy tính dùng để lưu trữ các giá trị.
- Biến trong JavaScript có 3 cách khai báo: var, let, const.

#### 2.2 Phạm vi khai báo

+ const được sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình.

+ let khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.

+ var khai báo biến có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số, toàn cục.

#### 2.3 Quy tắc đặt tên biến

Giống như ngôn ngữ khác, cách đặt tên biến của JS cũng phải tuân theo 1 số quy tắc sau :

Tên biến phải là các chữ không dấu viết hoa hoặc viết thường, các chữ số từ 0-9 và dấu gạch dưới () và kí hiệu $.
Tên biến bắt đầu phải là chữ hoặc dấu gạch dưới (_), nếu bắt đầu bằng số là sai.
Không thể sử dụng các từ dành riêng (như từ khóa JavaScript) làm tên.
Các tên có phân biệt chữ hoa chữ thường

Ví dụ:

```javascript

//đúng
var myName = "Hung";

var myAge = 21;

var myAddress = "Ha Noi";

//sai

var 1myName = "Hung";

var my-Name = "Hung";

var my Name = "Hung";

```

#### 2.4 Các kiểu dữ liệu


| Kiểu dữ liệu | Mô tả |
| --- | --- |
| String | Chuỗi |
| Number | Số |
| Boolean | Giá trị logic |
| Undefined | Giá trị không xác định |
| Null | Giá trị rỗng |
| Object | Đối tượng |
| Array | Mảng |
| Function | Hàm |

#### 2.5 Toán tử

| Toán tử | Mô tả |
| --- | --- |
| + | Cộng |
| - | Trừ |
| * | Nhân |
| / | Chia |
| % | Chia lấy dư |
| ++ | Tăng 1 giá trị |
| -- | Giảm 1 giá trị |
| = | Gán giá trị |
| += | Cộng và gán giá trị |
| -= | Trừ và gán giá trị |
| *= | Nhân và gán giá trị |
| /= | Chia và gán giá trị |
| %= | Chia lấy dư và gán giá trị |
| == | So sánh bằng |
| === | So sánh tuyệt đối |
| != | So sánh khác |
| !== | So sánh tuyệt đối khác |
| > | So sánh lớn hơn |
| < | So sánh nhỏ hơn |
| >= | So sánh lớn hơn hoặc bằng |
| <= | So sánh nhỏ hơn hoặc bằng |
| && | Phép AND |
| \|\| | Phép OR |
| ! | Phép NOT |
| ? : | Phép điều kiện |

So sánh tuyệt đối (===) và so sánh bằng (==) khác nhau ở chỗ so sánh tuyệt đối sẽ so sánh cả kiểu dữ liệu còn so sánh bằng chỉ so sánh giá trị.

Ví dụ:

```javascript

var a = 5;

var b = "5";

console.log(a == b); //true

console.log(a === b); //false

```

#### 2.6 Các hàm toán học

| Hàm | Mô tả |
| --- | --- |
| Math.abs(x) | Trả về giá trị tuyệt đối của x |
| Math.ceil(x) | Làm tròn x lên thành số nguyên |
| Math.floor(x) | Làm tròn x xuống thành số nguyên |

#### 2.7 Các hàm xử lý chuỗi

| Hàm | Mô tả |
| --- | --- |
| String.length | Trả về độ dài của chuỗi |
| String.indexOf() | Trả về vị trí của chuỗi con trong chuỗi |
| String.lastIndexOf() | Trả về vị trí của chuỗi con trong chuỗi (bắt đầu từ cuối chuỗi) |
| String.search() | Tìm kiếm chuỗi con trong chuỗi |
| String.slice() | Cắt chuỗi |
| String.substring() | Cắt chuỗi |
| String.substr() | Cắt chuỗi |
| String.replace() | Thay thế chuỗi con trong chuỗi |
| String.toUpperCase() | Chuyển đổi chuỗi thành chữ hoa |
| String.toLowerCase() | Chuyển đổi chuỗi thành chữ thường |
| String.concat() | Nối chuỗi |



## II. Các đối tượng trong JavaScript: Array, Object, Function, ...

### 1. Array

#### 1.1 Khai báo mảng

- Mảng là một tập hợp các giá trị có cùng kiểu dữ liệu.

- Cú pháp khai báo:

```javascript

var array = [value1, value2, ..., valueN];

```

- Truy xuất phần tử trong mảng:

```javascript

array[index];

```

#### 1.2 Các phương thức của mảng

| Phương thức | Mô tả |
| --- | --- |
| concat() | Nối mảng |
| join() | Nối các phần tử của mảng thành chuỗi |
| pop() | Xóa phần tử cuối mảng |
| push() | Thêm phần tử vào cuối mảng |
| shift() | Xóa phần tử đầu mảng |
| unshift() | Thêm phần tử vào đầu mảng |
| slice() | Cắt mảng |
| splice() | Cắt mảng |
| reverse() | Đảo ngược mảng |
| sort() | Sắp xếp mảng |
| indexOf() | Tìm kiếm phần tử trong mảng |
| lastIndexOf() | Tìm kiếm phần tử trong mảng (bắt đầu từ cuối mảng) |
| forEach() | Duyệt mảng |


### 2. Object

#### 2.1 Khai báo đối tượng

- Đối tượng là một tập hợp các thuộc tính (property) và phương thức (method).

- Cú pháp khai báo:

```javascript

var object = {key1: value1, key2: value2, ..., keyN: valueN};

```

- Truy xuất thuộc tính và phương thức:

```javascript

object.key;

```

#### 2.2 Các phương thức của đối tượng

| Phương thức | Mô tả |
| --- | --- |
| Object.assign() | Sao chép đối tượng |
| Object.create() | Tạo đối tượng mới |
| Object.keys() | Trả về một mảng chứa tất cả các key của đối tượng |
| Object.values() | Trả về một mảng chứa tất cả các value của đối tượng |
| Object.entries() | Trả về một mảng chứa tất cả các cặp key-value của đối tượng |



### 3. Function

#### 3.1 Khai báo hàm

- Hàm là một khối lệnh được đặt tên và có thể được gọi bất cứ lúc nào.
- Hàm có thể nhận các tham số đầu vào và trả về một giá trị.

- Cú pháp khai báo:

```javascript

function name(parameter1, parameter2, parameter3, ...) {
    // code
}

```

- Cú pháp gọi:

```javascript

name(argument1, argument2, argument3, ...);

```

#### 3.2 Các phương thức của hàm

| Phương thức | Mô tả |
| --- | --- |
| Function.apply() | Gọi hàm với this là đối số đầu tiên |
| Function.bind() | Tạo một hàm mới với this được gán bằng giá trị được chỉ định và các đối số được truyền vào được cung cấp dưới dạng một mảng |
| Function.call() | Gọi hàm với this được gán bằng giá trị được chỉ định và các đối số được truyền vào được cung cấp dưới dạng danh sách các đối số đầu vào |


### 4. String

#### 4.1 Khai báo chuỗi

- Chuỗi là một tập hợp các ký tự.

- Cú pháp khai báo:

```javascript

var string = "Hello World!";

```

#### 4.2 Các phương thức của chuỗi

| Phương thức | Mô tả |
| --- | --- |
| String.length | Trả về độ dài của chuỗi |
| String.indexOf() | Trả về vị trí của chuỗi con trong chuỗi |
| String.lastIndexOf() | Trả về vị trí của chuỗi con trong chuỗi (bắt đầu từ cuối chuỗi) |


## III. Vòng lặp

### 1. For

- Cú pháp:

```javascript

for (var i = 0; i < 10; i++) {
    // code
}

```

### 2. While

- Cú pháp:

```javascript

while (condition) {
    // code
}

```

## IV. Call back

- Call back là một hàm được truyền qua đối số và được gọi lại trong hàm nhận đối số đó.

- Ví dụ:

```javascript

function myFunction(param1, param2, callback) {
    // code này sẽ được thực thi trước khi hàm myFunction được thực thi xong
    callback();
}

myFunction(1, 2, function() {
    // code này sẽ được thực thi sau khi hàm myFunction được thực thi xong
});

```

- Call back có thể được sử dụng để xử lý bất đồng bộ trong JavaScript.



## V. Các method trong JavaScript: Map, Reduce, Filter, Some, Includes ....



### 1. Map

- Phương thức map() tạo ra một mảng mới với kết quả là một mảng mới có các phần tử được thay đổi từ mảng cũ.

- Cú pháp:

```javascript

array.map(function(currentValue, index, arr), thisValue)

```

- Ví dụ:

```javascript

var numbers = [1, 2, 3, 4, 5];

var newNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(newNumbers); // [2, 4, 6, 8, 10]

```

### 2. Reduce

- Phương thức reduce() thực thi một hàm reducer (cung cấp bởi bạn) trên mỗi phần tử của mảng, kết quả là một giá trị duy nhất.

- Cú pháp:

```javascript

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

```

- Ví dụ:

```javascript

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log(sum); // 15

```

### 3. Filter

- Phương thức filter() tạo ra một mảng mới với tất cả các phần tử vượt qua kiểm tra được thực hiện bởi hàm được cung cấp.

- Cú pháp:

```javascript

array.filter(function(currentValue, index, arr), thisValue)

```

- Ví dụ:

```javascript

var numbers = [1, 2, 3, 4, 5];

var newNumbers = numbers.filter(function(number) {
    return number > 3;
});

console.log(newNumbers); // [4, 5]

```

### 4. Some

- Phương thức some() kiểm tra xem ít nhất một phần tử trong mảng có thỏa mãn điều kiện được thực hiện bởi hàm được cung cấp hay không.

- Cú pháp:

```javascript

array.some(function(currentValue, index, arr), thisValue)

```

- Ví dụ:

```javascript

var numbers = [1, 2, 3, 4, 5];

var result = numbers.some(function(number) {
    return number > 3;
});

console.log(result); // true

```

### 5. Every

- Phương thức every() kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện được thực hiện bởi hàm được cung cấp hay không.

- Cú pháp:

```javascript

array.every(function(currentValue, index, arr), thisValue)

```

- Ví dụ:

```javascript

var numbers = [1, 2, 3, 4, 5];

var result = numbers.every(function(number) {
    return number > 3;
});

console.log(result); // false

```

### 6. Includes

- Phương thức includes() xác định xem một mảng có chứa một phần tử cụ thể hay không, trả về true hoặc false tương ứng.

- Cú pháp:

```javascript

array.includes(element, start)

```

- Ví dụ:

```javascript

var numbers = [1, 2, 3, 4, 5];

var result = numbers.includes(3);

console.log(result); // true

```












