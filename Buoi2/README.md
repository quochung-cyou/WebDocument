# Tài liệu Team Web: Buổi 2

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---


# Mục lục:
- Các cách style cho file HTML.
- CSS selectors.
- Độ ưu tiên, các loại đơn vị độ dài trong CSS.
- Float, box model
- Các loại position, z-index trong CSS.
- Các loại display trong CSS.
- Background style trong CSS.
- Pseudo class và pseudo element.
- Style cho text trong CSS.

---

## I. Các cách style cho file HTML.

![CSS](https://linuxhint.com/wp-content/uploads/2022/07/html-style-tag-09-e1658589289462.png)

- Có 3 cách để style cho file HTML:
    - Inline style: style được viết trực tiếp vào thẻ HTML.
    - Internal style: style được viết trong thẻ `<style>` của file HTML.
    - External style: style được viết trong file CSS riêng.

- Inline style:
    - Cú pháp: `<tag style="property: value">`
    - Ví dụ: `<p style="color: red">Hello World</p>`
    - Ưu điểm: style được viết trực tiếp vào thẻ HTML nên có độ ưu tiên cao nhất.
    - Nhược điểm: khó quản lý, khó bảo trì, khó mở rộng.

- Internal style:
    - Cú pháp: `<style>selector {property: value}</style>`
    - Ví dụ: 
        ```html
        <style>
            p {
                color: red;
            }
        </style>
        ```
    - Ưu điểm: style được viết trong file HTML nên có độ ưu tiên cao hơn so với external style.
    - Nhược điểm: khó quản lý, khó bảo trì, khó mở rộng.

- External style:
    - Cú pháp: `<link rel="stylesheet" href="path/to/file.css">`
    - Ví dụ: `<link rel="stylesheet" href="style.css">`
    - Ưu điểm: style được viết trong file CSS riêng nên có thể tái sử dụng, quản lý, bảo trì, mở rộng dễ dàng.
    - Nhược điểm: style được viết trong file CSS riêng nên có độ ưu tiên thấp nhất.

---

## II. CSS selectors.

![CSS selectors](https://media.gcflearnfree.org/content/5ebedddc62fd4212b87ca170_05_15_2020/04.png)

- CSS selectors là các cách chọn phần tử HTML để style. 
- Có nhiều loại CSS selectors:
    - Element selectors: chọn phần tử HTML dựa vào tên thẻ.
    - Class selectors: chọn phần tử HTML dựa vào tên class.
    - ID selectors: chọn phần tử HTML dựa vào tên ID.
    - Universal selectors: chọn tất cả các phần tử HTML.
    - Grouping selectors: chọn nhiều phần tử HTML cùng lúc.
    - Descendant selectors: chọn phần tử HTML con của phần tử HTML khác.
    - Adjacent sibling selectors: chọn phần tử HTML anh em cùng cấp của phần tử HTML khác.
    - Child selectors: chọn phần tử HTML con của phần tử HTML khác.
    - Attribute selectors: chọn phần tử HTML dựa vào thuộc tính của phần tử HTML đó.
    - Pseudo-class selectors: chọn phần tử HTML dựa vào trạng thái của phần tử HTML đó.
    - Pseudo-element selectors: chọn phần tử HTML dựa vào phần tử HTML đó.
    - Combinators: kết hợp nhiều CSS selectors lại với nhau.

![CSS selectors](https://cloud2data.com/wp-content/uploads/2023/02/CSS-Selectors.png)

- Cú pháp: `selector {property: value}`
- Ví dụ: 
    ```css
    p {
        color: red;
    }
    ```
- Select phần tử HTML có tên thẻ là `p` và style cho nó màu đỏ.

- Ví dụ selector element có id là `id1` và style cho nó màu đỏ:
    ```css
    #id1 {
        color: red;
    }
    ```
- Ví dụ selector element có class là `class1` và style cho nó màu đỏ:
    ```css
    .class1 {
        color: red;
    }
    ```

---

## III. Độ ưu tiên, các loại đơn vị độ dài trong CSS.

- Độ ưu tiên trong CSS:
    - Inline style > Internal style > External style.
    - !important > inline style > internal style > external style.
    - Selector có độ dài dài hơn sẽ có độ ưu tiên cao hơn.
    - Selector có độ ưu tiên cao hơn sẽ được áp dụng.

- Các loại đơn vị độ dài trong CSS:
    - px: pixel.
    - em: độ dài của phần tử HTML cha.
    - rem: độ dài của phần tử HTML root (thường là thẻ `<html>`).
    - %: phần trăm.
    - vw: độ dài của viewport theo chiều ngang.
    - vh: độ dài của viewport theo chiều dọc.

---

## IV. Float, box model

![Float](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/web-text-wrap.png?resize=540%2C270&ssl=1)

- Float: thuộc tính dùng để xác định vị trí của phần tử HTML.
- Có 4 giá trị của float:
    - left: phần tử HTML sẽ nằm bên trái.
    - right: phần tử HTML sẽ nằm bên phải.
    - none: phần tử HTML sẽ không nằm bên trái hay bên phải.
    - inherit: phần tử HTML sẽ kế thừa giá trị float của phần tử HTML cha.

VD:
```css
p {
    float: left;
}
```

![Box model](https://media.geeksforgeeks.org/wp-content/uploads/box-model-1.png)

- Box model: mô hình hình hộp của phần tử HTML.
- Có 4 thành phần của box model:
    - Content: nội dung của phần tử HTML.
    - Padding: phần đệm giữa content và border.
    - Border: viền của phần tử HTML.
    - Margin: phần đệm giữa border và phần tử HTML khác.

---

VD:
```css
p {
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    margin: 10px;
}
```

Các thuật ngữ trên có thể tạm giải thích như sau:

- content (hay content area): là vùng chứa nội dung của một element, với chiều rộng/cao được xác định qua thuộc tính width và height. Vùng này thường chứa text, hình ảnh, video…
- padding (hay padding area): cho biết độ rộng của vùng padding bao quanh vùng content.
- border (hay border area): cho biết độ rộng (và style) của border bao quanh vùng padding.
- margin (hay margin area): cho biết độ rộng của vùng margin bao quanh vùng border.


---

## V. Các loại position, z-index trong CSS.

![Position](https://topdev.vn/blog/wp-content/uploads/2020/09/position-trong-css.png)

![Position](https://www.csssolid.com/images/csspositions/css-position-all.png)

- Có 5 loại position:
    - static: phần tử HTML sẽ được đặt theo thứ tự xuất hiện trong file HTML.
    - relative: phần tử HTML sẽ được đặt theo thứ tự xuất hiện trong file HTML, nhưng có thể dịch chuyển theo hướng top, bottom, left, right.
    - absolute: phần tử HTML sẽ được đặt theo thứ tự xuất hiện trong file HTML, nhưng có thể dịch chuyển theo hướng top, bottom, left, right, và sẽ được đặt theo phần tử HTML cha có position là relative hoặc absolute.
    - fixed: phần tử HTML sẽ được đặt theo thứ tự xuất hiện trong file HTML, nhưng có thể dịch chuyển theo hướng top, bottom, left, right, và sẽ được đặt theo phần tử HTML cha có position là relative hoặc absolute, và sẽ được đặt theo viewport.
    - sticky: phần tử HTML sẽ được đặt theo thứ tự xuất hiện trong file HTML, nhưng có thể dịch chuyển theo hướng top, bottom, left, right, và sẽ được đặt theo phần tử HTML cha có position là relative hoặc absolute, và sẽ được đặt theo viewport, và sẽ được đặt lại vị trí ban đầu khi scroll.

VD:
```css
p {
    position: relative;
    top: 10px;
    left: 10px;
}
```

![Z-index](https://topdev.vn/blog/wp-content/uploads/2019/03/graphical-z-index.gif)

- Có 2 loại z-index:
    - auto: phần tử HTML sẽ được đặt theo thứ tự xuất hiện trong file HTML.
    - number: phần tử HTML sẽ được đặt theo thứ tự xuất hiện trong file HTML, nhưng có thể đặt lại vị trí bằng cách thay đổi giá trị number.

VD:
```css
p {
    z-index: 1;
}
```

---

## VI. Các loại display trong CSS.


- Có 4 loại display:
    - block: phần tử HTML sẽ được hiển thị trên một dòng riêng biệt.
    - inline: phần tử HTML sẽ được hiển thị trên một dòng với các phần tử HTML khác.
    - inline-block: phần tử HTML sẽ được hiển thị trên một dòng với các phần tử HTML khác, nhưng có thể thay đổi kích thước.
    - none: phần tử HTML sẽ không được hiển thị.

VD:
```css
p {
    display: inline-block;
}
```

---

## VII. Background style trong CSS.

![Background](https://assets.digitalocean.com/articles/67917/1.jpg)

- Có 5 thuộc tính của background:
    - background-color: màu nền.
    - background-image: hình nền.
    - background-repeat: lặp lại hình nền.
    - background-position: vị trí hình nền.
    - background-attachment: cố định hình nền.

VD:
```css
p {
    background-color: red;
    background-image: url("https://www.w3schools.com/cssref/img_tree.png");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
```


---

## VIII. Pseudo class và pseudo element.

![Pseudo class](https://i.stack.imgur.com/6Z2nI.png)

- Pseudo class: lựa chọn phần tử HTML dựa vào trạng thái của phần tử HTML đó.
- Có 4 loại pseudo class:
    - :active: phần tử HTML đang được click.
    - :hover: phần tử HTML đang được hover.
    - :focus: phần tử HTML đang được focus.
    - :visited: phần tử HTML đã được truy cập.

VD:
```css
p:hover {
    color: red;
}
```

![Pseudo element](https://i0.wp.com/css-tricks.com/wp-content/csstricks-uploads/relationalpseudos2.png)

- Pseudo element: lựa chọn phần tử HTML dựa vào phần tử HTML đó.

- Có 4 loại pseudo element:
    - ::after: thêm nội dung vào phần tử HTML sau.
    - ::before: thêm nội dung vào phần tử HTML trước.
    - ::first-letter: thêm nội dung vào phần tử HTML đầu tiên.
    - ::first-line: thêm nội dung vào phần tử HTML dòng đầu tiên.

VD:
```css
p::after {
    content: "Hello World";
}
```

---

## IX. Style cho text trong CSS.

![Text](https://htmldog.com/figures/weightStyle.gif)

- Có 4 thuộc tính của text:
    - color: màu chữ.
    - text-align: căn lề.
    - text-decoration: gạch chân.
    - text-transform: chuyển đổi chữ.

VD:
```css
p {
    color: red;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
}
```

---