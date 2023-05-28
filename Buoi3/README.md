# Tài liệu Team Web: Buổi 3

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---

# Mục lục
- Grid
- FlexBox
- Media Query
- Break point
- Viewport
- GridView
- Flexible Media
- CSS Sass

---

## I. Grid

- Grid là một hệ thống layout mạnh mẽ, cho phép bạn tạo ra các layout phức tạp và đẹp mắt mà không cần phải sử dụng các thẻ div lồng nhau.
- Grid được chia thành 2 phần chính là Grid Container và Grid Item.
- Grid Container là phần bao bọc các Grid Item.
- Grid Item là các phần tử con của Grid Container.

Example Code in MD:
``` xhtml
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
    </div>
```

![Grid](https://www.w3schools.com/css/grid_lines.png)

Display Grid:
``` css
    .grid-container {
        display: grid;
    }
```

Grid Template Columns:
``` css
    .grid-container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
    }
```

Grid Template Rows:
``` css
    .grid-container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
    }
```

Grid Gap:
``` css
    .grid-container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-gap: 10px;
    }
```

Grid tự động cân bằng
``` css
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        grid-gap: 10px;
    }
```

![Grid](https://camo.githubusercontent.com/e56cdccaf6835f1ca8361e4d4d0b5d5926f44f86389db03ad901721a6d5f4369/68747470733a2f2f696d616765732e7669626c6f2e617369612f30343266616361312d363065302d343762312d393263632d6364353231623732663535352e504e47)

Grid cân bằng theo tỉ lệ
``` css
    .grid-container {
        display: grid;
        grid-template-columns: 20% 30% 50%
        grid-gap: 10px;
    }
```


![Grid](https://camo.githubusercontent.com/c5d10928e24beee049fae26b1e5e63d589755e937678c0e8fb6b8cd3721ad008/68747470733a2f2f696d616765732e7669626c6f2e617369612f37386563653664352d333566332d343163372d616363372d3536643830363237626436362e504e47)

Tuỳ chỉnh vùng theo thuộc tính
``` css
    .item8 {
    grid-area: 1 / 2 / 5 / 6;
    }
```

![Grid](https://camo.githubusercontent.com/8008996fa24004fe39302c0af067e1baf05d6568503a1daad2145592f1431dc1/68747470733a2f2f696d616765732e7669626c6f2e617369612f31316431383462382d393933352d343663612d396135352d3337643165383230326266632e504e47)


![Grid](https://camo.githubusercontent.com/f24df2a02147e04f9e6f4ef78fe89698359a2bd857dd310f3747b754cd098326/68747470733a2f2f6373732d747269636b732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30322f6373732d677269642d706f737465722e706e67)

## II. FlexBox

- FlexBox là một hệ thống layout mạnh mẽ, cho phép bạn tạo ra các layout phức tạp và đẹp mắt mà không cần phải sử dụng các thẻ div lồng nhau.
- FlexBox được chia thành 2 phần chính là Flex Container và Flex Item.
- Flex Container là phần bao bọc các Flex Item.
- Flex Item là các phần tử con của Flex Container.

![FlexBox](https://i2.wp.com/beautyoncode.com/wp-content/uploads/2022/12/flexbox.png)

Example Code in MD:
``` xhtml
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

![FlexBox](https://camo.githubusercontent.com/8d3037bdf2099360e05afbb2979e78939da932d6b8d644f7b2205c6efd561003/68747470733a2f2f6373732d747269636b732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30322f6373732d666c6578626f782d706f737465722e706e67)

# III. Media Query

- Media Query là một công cụ cho phép bạn thay đổi style của một trang web dựa trên các điều kiện nhất định.
- Media Query được sử dụng để tạo ra các trang web đáp ứng (responsive web).
- Media Query được sử dụng để tạo ra các trang web có thể hiển thị đẹp trên các thiết bị khác nhau, với các kích thước màn hình khác nhau.

Example Code in MD:
``` xhtml
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

![Media Query](https://tenten.vn/tin-tuc/wp-content/uploads/2022/05/Media-Queries-4.png)

# IV. Break point

- Breakpoint, là những điểm (chiều rộng màn hình của thiết bị) mà ở đó giao diện được chuyển đổi cho phù hợp với thiết bị hiện tại, ví dụ như màn hình rộng hơn 1024px, thì có background-color màu đỏ, nhỏ hơn 1024px thì background-color màu xanh, khi này ta gọi 1024 là breakpoint.

- Tùy vào chiều rộng hiển thị của thiết bị mà breakpoint sẽ khác nhau, hiện nay có rất nhiều thiết bị, tương ứng sẽ có nhiều chiều rộng khác nhau, nên sẽ có nhiều breakpoint khác nhau, do đó ta không thể thiết lập beakpoint cho từng loại thiết bị được.

Điểm breakpoint	
- 320 px	Màn hình chiều dọc cho smartphone nhỏ (VD iPhone 5)
- 480 px	Màn hình chiều ngang cho smartphone nhỏ
- 640 px	Màn hình chiều ngang cho smartphone vừa
- 768 px	Màn hình chiều dọc cho tablet (VD: iPad)
- 1024 px	Màn hình chiều ngang cho tablet (VD: iPad), hoặc chiều dọc cho tablet lớn (VD iPad Pro)


``` xhtml
@media only screen and (min-width: 320px) {
 body{
   background-color: orange;
  }
}
```

![Break point](https://sasspics.thesassway.com/what_are_css_breakpoints.png)

# V. Viewport

- Viewport là khu vực hiển thị nội dung trên trình duyệt.
- Viewport thay đổi theo thiết bị, và sẽ nhỏ hơn trên điện thoại di động so với màn hình máy tính.

- Trước khi có máy tính bảng và điện thoại di động, các trang web được thiết kế chỉ cho màn hình máy tính, và việc thiết kế tĩnh và kích thước cố định là phổ biến.

- Sau đó, khi chúng ta bắt đầu lướt web bằng máy tính bảng và điện thoại di động, các trang web có kích thước cố định quá lớn để vừa với viewport. Để khắc phục điều này, các trình duyệt trên các thiết bị đó thu nhỏ toàn bộ trang web để vừa với màn hình.

- Khác biệt giữa có viewport và không có viewport:

- Một trang web không có thẻ meta viewport sẽ được hiển thị với độ rộng của trang web, không phụ thuộc vào thiết bị.
- Một trang web với thẻ meta viewport sẽ được hiển thị với độ rộng của thiết bị, và với tỷ lệ khung hình cố định.

``` xhtml
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- width=device-width phù hợp với chiều rộng của thiết bị (đừng quên để thẻ meta viewport trong thẻ <head>)

- initial-scale=1.0 thiết lập tỷ lệ khung hình của trang web

- user-scalable=no ngăn người dùng phóng to hoặc thu nhỏ trang web

- minimum-scale=1.0 ngăn người dùng thu nhỏ trang web

- maximum-scale=1.0 ngăn người dùng phóng to trang web


# VI. GridView

!!!

# VII. Flexible Media
![Flexible Media](https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/09/flexible-images.jpg)

``` css
img {
  max-width: 100%;

  /* just in case, to force correct aspect ratio */
  height: auto !important;
}
```

# VIII. CSS Sass

- Sass là một ngôn ngữ mở rộng của CSS, nó có thể giúp việc viết CSS trở nên dễ dàng và nhanh hơn.
- Sass là chữ viết tắt của Syntactically Awesome Style Sheets, chương trình tiền xử lý bằng ngôn ngữ kịch bản (Preprocessor Scripting Language ), sẽ được biên dịch thành CSS. Nghĩa là, mình sẽ làm style bằng SASS, rồi SASS sẽ render việc mình làm thành file CSS.
- Sass có 2 phiên bản là Sass và SCSS, 2 phiên bản này khác nhau ở cú pháp, nhưng cùng có chức năng tương tự nhau.