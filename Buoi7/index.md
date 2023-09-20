---
title: Buổi 7
layout: post
---


# Tài liệu Team Web: Buổi 7

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---


# Mục lục:

- DOM events
- Event listener
- DOM nodelist
- PreventDefault & StopPropagation

---

## I. DOM events

- DOM events là các sự kiện xảy ra trên các phần tử HTML.

#viết về dom event, có ví dụ, hình ảnh minh hoạ

- Các DOM events phổ biến:

    - Mouse events: click, dblclick, mouseenter, mouseleave, mousemove, mouseover, mouseout, mousedown, mouseup.
    - Keyboard events: keydown, keypress, keyup.
    - Form events: submit, change, focus, blur, input.
    - Document events: load, resize, scroll, unload.

- Các DOM events có thể được gán cho các phần tử HTML bằng cách sử dụng thuộc tính on.

- Ví dụ:

```html

    <button onclick="alert('Hello World')">Click me</button>
    <!-- Button hiện alert khi click >
```

- Các DOM events có thể được gán cho các phần tử HTML bằng cách sử dụng phương thức addEventListener().

- Ví dụ:

```html

    <button id="btn">Click me</button>
    <script>
        document.getElementById("btn").addEventListener("click", function() {
            alert("Hello World");
        });
    </script>
    <!-- Button hiện alert khi click >
```

Chú giải các dom event phổ biến

- onclick: xảy ra khi click vào phần tử HTML.
- ondblclick: xảy ra khi double click vào phần tử HTML.
- onmouseenter: xảy ra khi con trỏ chuột được di chuyển vào phần tử HTML.
- onmouseleave: xảy ra khi con trỏ chuột được di chuyển ra khỏi phần tử HTML.
- onmousemove: xảy ra khi con trỏ chuột được di chuyển trên phần tử HTML.
- onmouseover: xảy ra khi con trỏ chuột được di chuyển vào phần tử HTML hoặc vào một phần tử con của phần tử HTML.
- keydown: xảy ra khi một phím được nhấn xuống.
- keypress: xảy ra khi một phím được nhấn xuống và thả ra.
- keyup: xảy ra khi một phím được thả ra.
- submit: xảy ra khi form được submit.
- change: xảy ra khi giá trị của phần tử HTML thay đổi.
- focus: xảy ra khi phần tử HTML được focus.
- blur: xảy ra khi phần tử HTML mất focus.
- load: xảy ra khi tài nguyên được load.
- resize: xảy ra khi kích thước của window thay đổi.


Ví dụ về event mouse:

```html

    <button id="btn">Click me</button>
    <script>
        document.getElementById("btn").addEventListener("click", function() {
            alert("Hello World");
        });
    </script>
    <!-- Button hiện alert khi click >
```

Ví dụ về event keyboard:

```html

    <input type="text" id="input">
    <script>
        document.getElementById("input").addEventListener("keypress", function() {
            alert("Hello World");
        });
    </script>
    <!-- Alert hiện lên khi nhập vào input >
```

Ví dụ về event form:

```html

    <form id="form">
        <input type="text" id="input">
        <button type="submit">Submit</button>
    </form>
    <script>
        document.getElementById("form").addEventListener("submit", function() {
            alert("Hello World");
        });
    </script>
    <!-- Alert hiện lên khi submit form >
```

Ví dụ về event document:

```html

    <script>
        document.addEventListener("load", function() {
            alert("Hello World");
        });
    </script>
    <!-- Alert hiện lên khi tài nguyên được load >
```

## II. Event listener

- Event listener là một hàm được thực thi khi một DOM event xảy ra.

- Ví dụ:

```html

    <button id="btn">Click me</button>
    <script>
        document.getElementById("btn").addEventListener("click", function() {
            alert("Hello World");
        });
    </script>
    <!-- Button hiện alert khi click >
```

## III. DOM nodelist

- DOM nodelist là một danh sách các phần tử HTML.
- DOM nodelist có thể được tạo ra bằng cách sử dụng phương thức querySelectorAll() hoặc getElementsByTagName().
- Ví dụ:

```html

    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <script>
        var list = document.querySelectorAll("#list li");
        console.log(list);
    </script>
    <!-- In ra một DOM nodelist chứa 3 phần tử li >
```

## IV. PreventDefault & StopPropagation

- preventDefault() là một phương thức của đối tượng event, được sử dụng để ngăn chặn hành vi mặc định của một DOM event.
- Ví dụ:

```html

    <a href="https://google.com" id="link">Google</a>
    <script>
        document.getElementById("link").addEventListener("click", function(event) {
            event.preventDefault();
        });
    </script>
    <!-- Khi click vào link, trình duyệt sẽ không chuyển hướng đến trang Google >
```

- stopPropagation() là một phương thức của đối tượng event, được sử dụng để ngăn chặn sự kiện nổi bọt của một DOM event.

- Ví dụ:

```html

    <div id="div">
        <button id="btn">Click me</button>
    </div>
    <script>
        document.getElementById("div").addEventListener("click", function() {
            alert("Hello World");
        });
        document.getElementById("btn").addEventListener("click", function(event) {
            event.stopPropagation();
        });
    </script>
    <!-- Khi click vào button, alert sẽ không hiện lên >
```

Sự kiện nổi bọt là gì?

- Sự kiện nổi bọt là sự kiện được truyền từ phần tử con đến phần tử cha.
- Ví dụ:

```html

    <div id="div">
        <button id="btn">Click me</button>
    </div>
    <script>
        document.getElementById("div").addEventListener("click", function() {
            alert("Hello World");
        });
        document.getElementById("btn").addEventListener("click", function() {
            alert("Hello World");
        });
    </script>
    <!-- Khi click vào button, alert sẽ hiện lên 2 lần >
```

- Sự kiện nổi bọt có thể được ngăn chặn bằng cách sử dụng phương thức stopPropagation().

- Ví dụ:

```html

    <div id="div">
        <button id="btn">Click me</button>
    </div>
    <script>
        document.getElementById("div").addEventListener("click", function() {
            alert("Hello World");
        });
        document.getElementById("btn").addEventListener("click", function(event) {
            event.stopPropagation();
        });
    </script>
    <!-- Khi click vào button, alert sẽ chỉ hiện lên 1 lần >
```

## V. Event delegation

- Event delegation là một kỹ thuật được sử dụng để gán các DOM event cho các phần tử con của một phần tử cha.

- Ví dụ:

```html

    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <script>
        document.getElementById("list").addEventListener("click", function(event) {
            if (event.target.tagName == "LI") {
                alert("Hello World");
            }
        });
    </script>
    <!-- Khi click vào một phần tử li, alert sẽ hiện lên >
```

- Event delegation có thể được sử dụng để gán các DOM event cho các phần tử HTML được tạo ra sau khi DOM được load.

- Ví dụ:

```html

    <ul id="list">
    </ul>
    <script>
        document.getElementById("list").addEventListener("click", function(event) {
            if (event.target.tagName == "LI") {
                alert("Hello World");
            }
        });
        var li = document.createElement("li");
        li.innerHTML = "Item 1";
        document.getElementById("list").appendChild(li);
    </script>
    <!-- Khi click vào một phần tử li, alert sẽ hiện lên >
```

## VI. Các ví dụ trong các dự án thực tế

- Ví dụ 1: Tạo một trang web hiển thị danh sách các bài viết, mỗi bài viết có một nút "Xem thêm" để hiển thị nội dung đầy đủ của bài viết.

Triển khai: 

- Tạo một danh sách các bài viết.
- Tạo một nút "Xem thêm" cho mỗi bài viết.
- Gán sự kiện click cho mỗi nút "Xem thêm".
- Khi click vào một nút "Xem thêm", hiển thị nội dung đầy đủ của bài viết tương ứng.

Ví dụ code:
    
    ```html
    
        <ul id="list">
            <li>
                <h1>Post 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <button class="btn">Xem thêm</button>
            </li>
            <li>
                <h1>Post 2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <button class="btn">Xem thêm</button>
            </li>
            <li>
                <h1>Post 3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <button class="btn">Xem thêm</button>
            </li>
        </ul>
        <script>
            var btns = document.querySelectorAll("#list .btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function() {
                    alert("Hello World");
                });
            }
        </script>
        <!-- Khi click vào một nút "Xem thêm", alert sẽ hiện lên >
    ```

- Ví dụ 2: Một trang web hiển thị một danh sách các bài viết, mỗi bài viết có một nút "Xem thêm" để hiển thị nội dung đầy đủ của bài viết. Khi click vào một nút "Xem thêm", nội dung đầy đủ của bài viết tương ứng sẽ được load từ server.

Ví dụ code:

    ```html
    
        <ul id="list">
            <li>
                <h1>Post 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <button class="btn">Xem thêm</button>
            </li>
            <li>
                <h1>Post 2</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <button class="btn">Xem thêm</button>
            </li>
            <li>
                <h1>Post 3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <button class="btn">Xem thêm</button>
            </li>
        </ul>
        <script>
            var btns = document.querySelectorAll("#list .btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function() {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            alert(this.responseText);
                        }
                    };
                    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + (i + 1), true);
                    xhr.send();
                });
            }
        </script>
        <!-- Khi click vào một nút "Xem thêm", nội dung đầy đủ của bài viết tương ứng sẽ được load từ server >
    ```








