

---
title: Tài liệu Team Web: Buổi 6
layout: post
---


# Tài liệu Team Web: Buổi 6

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---

## Nội dung buổi học

- DOM là gì? Cây cấu trúc DOM là gì?
- Các loại DOM trong JS, cái nào thường hay dùng?
- Thao tác với DOM như thế nào? (properties, methods)

---

# 1. DOM là gì? Cây cấu trúc DOM là gì?

- DOM là viết tắt của Document Object Model, là một chuẩn được định nghĩa bởi W3C để truy xuất và thao tác các thành phần của một trang web.
- DOM là một cấu trúc cây, mô tả cấu trúc của một tài liệu HTML, XML, XHTML.

VD:
    
    ```html

    <html>
        <head>
            <title>DOM</title>
        </head>
        <body>
            <h1>DOM</h1>
            <p>DOM là gì?</p>
        </body>

    </html>
    
        ```

- Cây DOM của đoạn mã trên sẽ như sau:
    
    ```html

    html
    └── head
    │   └── title
    │       └── DOM
    └── body
        └── h1
        │   └── DOM
        └── p
            └── DOM là gì?

    ```

---

# 2. Các loại DOM trong JS, cái nào thường hay dùng?

- Có 3 loại DOM trong JS:
    - DOM Core: là một chuẩn được định nghĩa bởi W3C, cung cấp các phương thức để truy xuất và thao tác các thành phần của một trang web.
    - DOM HTML: là một chuẩn được định nghĩa bởi W3C, cung cấp các phương thức để truy xuất và thao tác các thành phần của một trang web.
    - DOM CSS: là một chuẩn được định nghĩa bởi W3C, cung cấp các phương thức để truy xuất và thao tác các thành phần của một trang web.

- Các loại DOM thường hay dùng:
    - DOM Core: là một chuẩn được định nghĩa bởi W3C, cung cấp các phương thức để truy xuất và thao tác các thành phần của một trang web.
    - DOM HTML: là một chuẩn được định nghĩa bởi W3C, cung cấp các phương thức để truy xuất và thao tác các thành phần của một trang web.

---

# 3. Thao tác với DOM như thế nào? (properties, methods)

- Thao tác với DOM thông qua các phương thức và thuộc tính của DOM.

- Javascript cung cấp cho chúng ta một đối tượng là document, đối tượng này chứa toàn bộ các thành phần của một trang web.

VD:
    
        ```html
    
        <html>
            <head>
                <title>DOM</title>
            </head>
            <body>
                <h1>DOM</h1>
                <p>DOM là gì?</p>
            </body>
    
        </html>
        
        ```

- Để lấy ra thẻ h1, ta sử dụng phương thức `getElementById()` của đối tượng document.
    
        ```js
    
        document.getElementById('h1');
    
        ```

- Để lấy ra thẻ p, ta sử dụng phương thức `getElementById()` của đối tượng document.
    
        ``` javascript

        document.getElementById('p');
    
        ```


    
        - `document.getElementById()`: lấy ra một phần tử dựa vào id.
        - `document.getElementsByClassName()`: lấy ra một phần tử dựa vào class.
        - `document.getElementsByTagName()`: lấy ra một phần tử dựa vào tag.
        - `document.querySelector()`: lấy ra một phần tử dựa vào CSS selector.
        - `document.querySelectorAll()`: lấy ra một phần tử dựa vào CSS selector.



        - `document.title`: lấy ra title của trang web.
        - `document.URL`: lấy ra URL của trang web.
        - `document.domain`: lấy ra domain của trang web.
        - `document.body`: lấy ra thẻ body của trang web.
        - `document.head`: lấy ra thẻ head của trang web.
        - `document.images`: lấy ra tất cả các thẻ img của trang web.
        - `document.links`: lấy ra tất cả các thẻ a của trang web.
        - `document.forms`: lấy ra tất cả các thẻ form của trang web.
        - `document.scripts`: lấy ra tất cả các thẻ script của trang web.

---





