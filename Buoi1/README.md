# Tài liệu Team Web: Buổi 1

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---


# Mục lục:
- Cách thức hoạt động của một trang web
- Cấu trúc của HTML
- Block, inline elements. Qua phân biệt div, span.
- Các thẻ liên quan đến table trong HTML
- Các thẻ: image, video, links, audio
- Section elements: div, span, header, footer, nav, main, section, article
- HTML text fundamentals: h1 -> h6, p, ul, li
- Các thẻ liên quan đến form: form, input, button, label, textarea
- Có thể tìm hiểu các thẻ khác ngoài các thẻ trên các thẻ trên 

---

## I. Cách thức hoạt động của một trang web

Khi máy tính nhà của mình kết nối đến một trang web trên mạng, ta có thể gọi chúng là các clients (máy khách) và servers (máy chủ). 

> Ảnh minh hoạ:
![ảnh minh hoạ 1](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works/simple-client-server.png)


Client máy khách sẽ gửi các Requests (yêu cầu) về máy chủ, và máy chủ sẽ trả về Response (Phản hồi) tương ứng với yêu cầu của người dùng.

VD:
- Người dùng gửi yêu cầu tìm trang bạn bè, server trả về trang banbe.html 
- Người dùng gửi yêu cầu nhắn tin, server trả về dữ liệu tin nhắn


> Ở thời kì đầu của web, đa phần các web đều là web tĩnh. Tức là các trang web chỉ có thể hiển thị các nội dung cố định, không thể thay đổi được. Ví dụ như các trang web tin tức, các trang web thông tin, các trang web giới thiệu sản phẩm, ... 

> Tuy nhiên, với sự phát triển của công nghệ, các trang web ngày nay có thể thay đổi được nội dung, có thể tương tác với người dùng. Ví dụ như các trang web mạng xã hội, các trang web thương mại điện tử, các trang web chơi game, ... (Được gọi là web động). Các trang web động sẽ có dữ liệu hiển thị tuỳ theo người dùng khác nhau, và có thể thay đổi được dữ liệu hiển thị tuỳ theo người dùng. Ví dụ như trang web mạng xã hội, khi bạn đăng nhập vào trang web, bạn sẽ thấy các bài viết của bạn bè, và bạn có thể đăng bài viết của mình lên trang web. 

![ảnh minh hoạ 2](https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/png15875345352415.jpg)


Vậy nhìn chung thì Web là một dữ liệu sẽ được server trả về khi người dùng yêu cầu. Tuy nhiên nếu đào sâu ra thì đây là một quá trình rất dài, tưởng tượng máy bạn là nhà bạn, và web bạn truy cập là một cửa hàng trên phố, lúc này để truy cập web, bạn cần đi qua một tuyến đường để đến cửa hàng đó.

### Quá trình xảy ra khi bạn kết nối một trang web:
- Đầu tiên tưởng tượng, để đến một cửa hàng (web), ta cần địa chỉ của nó. Các máy chủ hay máy người dùng khi kết nối đến hệ thống internet toàn cầu đều được cấp một địa chỉ, thường là Ipv4 (ví dụ 98.139.180.149) 
- Tuy nhiên, số lượng ipv4 là có hạn. Vì vậy thông thường các máy tính sẽ nằm trong một mạng cục bộ, và chỉ có một ipv4 bên ngoài quyết định chúng. VD: Toàn bộ máy tính của 1 toà nhà sẽ đều kết nối vào một modem mạng có Ipv4 là (98.139.180.149). Đây sẽ là địa chỉ để bên ngoài có thể kết nối tới. Tuy nhiên khi có yêu cầu gửi tới, ta có thể cài đặt nó sẽ được đi vào máy tính nào trong toà nhà đó, các máy tính lúc này sẽ có một ipv4 cục bộ kiểu: 192.168.0.1, 192.168.0.2, ..... Tưởng tượng: Các cửa hàng nằm trong phố Nguyễn Trãi, ta đi đến Nguyễn Trãi và nó sẽ là số 100 Nguyễn Trãi, số 101 Nguyễn Trãi, ...

![ảnh minh hoạ 3](https://i0.wp.com/learntomato.flashrouters.com/wp-content/uploads/lan-wan.jpg?resize=568%2C543&ssl=1)

- Như vậy ta đã biết là bằng cách trên. Một server có thể truy cập bằng một địa chỉ Ipv4. Kiểu ta có thể truy cập bằng http://98.139.180.149. Tuy nhiên người dùng không thể nhớ hết số IP này, vì vậy ta cần một hệ thống định dang (tên miền - domain) để biến ip số này thành các tên miền dễ nhớ. VD: http://google.com, http://facebook.com, http://youtube.com, ...
- Để có thể biết được địa chỉ ip của một tên miền, ta cần một hệ thống DNS (Domain Name System). Hệ thống này sẽ lưu trữ các tên miền và địa chỉ ip tương ứng của nó. VD: google.com -> 20.002.003.149
- Các hệ thống DNS như một cuốn từ điển và cho biến tên miền nào chỉ đến ip nào. Thông thường khi kết nối, đầu tiên máy tính sẽ tìm lại vào cache của chính máy mình để xem tên miền đã được lưu chưa, nếu chưa có thì máy tính sẽ tìm đến các dns server của ISP (nhà mạng, ví dụ Viettel, VNPT). Nếu vẫn chưa tìm thấy, máy tính sẽ tìm đến các DNS Server khác như của Google (8.8.8.8), Cloudflare (1.1.1.1), ...
- Khi người dùng gõ tên miền vào trình duyệt, trình duyệt sẽ gửi yêu cầu tới DNS để lấy địa chỉ ip của tên miền đó. Sau đó trình duyệt sẽ gửi yêu cầu tới địa chỉ ip đó, và server sẽ trả về dữ liệu tương ứng với yêu cầu của người dùng.

![ảnh minh hoạ 4](https://codelearn.io/Media/Default/Users/TrisDo/networking/DNS-Server.png)

---

## II. Cấu trúc của HTML

![ảnh minh hoạ 5](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401160946/HTML-Basic-Format.png)
![ảnh minh hoạ 6](https://qatechhub.com/wp-content/uploads/2016/09/BasicHtmlStructure.png)

- HTML là một ngôn ngữ đánh dấu siêu văn bản (HyperText Markup Language). Nó được sử dụng để xây dựng các trang web. HTML được sử dụng để đánh dấu các phần tử trong một trang web. Các phần tử này được đánh dấu bằng các thẻ HTML. Mỗi thẻ HTML bắt đầu bằng một ký tự đặc biệt và kết thúc bằng một ký tự đặc biệt. Nội dung giữa các thẻ HTML là nội dung của phần tử đó. Ví dụ: `<p> This is a paragraph </p>`

- Các thẻ HTML có thể được phân thành hai loại: thẻ đóng và thẻ không đóng. Thẻ đóng có một thẻ đóng tương ứng, trong khi thẻ không đóng không có thẻ đóng tương ứng. Ví dụ: `<p> This is a paragraph </p>` là một thẻ đóng, trong khi `<br>` là một thẻ không đóng.


---

## III. Thẻ khối và thẻ nội tuyến


> Các thẻ HTML có thể được nhóm thành các thẻ khối và các thẻ nội tuyến. Các thẻ khối bắt đầu trên một dòng mới và chiếm toàn bộ chiều rộng của trình duyệt, trong khi các thẻ nội tuyến không bắt đầu trên một dòng mới và chỉ chiếm một phần của chiều rộng của trình duyệt. Ví dụ: `<p>` là một thẻ khối, trong khi `<b>` là một thẻ nội tuyến.

### Có 2 kiểu giá trị hiển thị chính : block và inline.
#### Block-level elements (thẻ khối) :
> Một block-elements luôn bắt đầu trên một dòng mới và Browser tự động thêm khoảng trắng (margin) và trước và sau phần tử đó.
Nó luôn chiếm toàn bộ chiều rộng có sẵn.
2 block-elements thường dùng là : `<p>` và `<div>`.
#### Inline elements (thẻ nội tuyến) :
> Một Inline elements không bắt đầu trên một dòng mới.
Nó chỉ chiếm chiều rộng cần thiết.
Một phần tử inline không thể chưa phần tử block.

- `<div>` là một thẻ khối, nó được sử dụng để nhóm các phần tử HTML lại với nhau. Nó không có bất kỳ ý nghĩa đặc biệt nào. Nó thường được sử dụng để tạo các nhóm phần tử CSS để áp dụng các kiểu CSS cho các phần tử đó. Ví dụ: `<div> This is a div </div>`
- `<span>` là một thẻ nội tuyến, nó được sử dụng để nhóm các phần tử HTML lại với nhau. Nó không có bất kỳ ý nghĩa đặc biệt nào. Nó thường được sử dụng để tạo các nhóm phần tử CSS để áp dụng các kiểu CSS cho các phần tử đó. Ví dụ: `<span> This is a span </span>`

---


## IV. Các thẻ liên quan đến table trong HTML

- `<table>` là một thẻ khối, nó được sử dụng để tạo một bảng. Nó có thể chứa một hoặc nhiều thẻ `<tr>`. Ví dụ: `<table> This is a table </table>`
- `<tr>` là một thẻ khối, nó được sử dụng để tạo một hàng trong bảng. Nó có thể chứa một hoặc nhiều thẻ `<td>`. Ví dụ: `<tr> This is a table row </tr>`
- `<td>` là một thẻ nội tuyến, nó được sử dụng để tạo một ô trong bảng. Nó có thể chứa một hoặc nhiều thẻ `<p>`. Ví dụ: `<td> This is a table cell </td>`
- `<th>` là một thẻ nội tuyến, nó được sử dụng để tạo một ô trong bảng. Nó có thể chứa một hoặc nhiều thẻ `<p>`. Nó khác với thẻ `<td>` ở chỗ nó được sử dụng để tạo một ô tiêu đề trong bảng. Ví dụ: `<th> This is a table header </th>`

![ảnh minh hoạ 7](https://dotnettutorials.net/wp-content/uploads/2021/11/word-image-533.png)

---


## V. Các thẻ: image, video, links, audio

- `<img>` là một thẻ nội tuyến, nó được sử dụng để chèn một hình ảnh vào trang web. Nó không có thẻ đóng tương ứng. Ví dụ: `<img src="image.jpg" alt="Image">`

```html
<img src="url" alt="alternatetext">
```

- `<video>` là một thẻ khối, nó được sử dụng để chèn một video vào trang web. Nó có thể chứa một hoặc nhiều thẻ `<source>`. Ví dụ: `<video> This is a video </video>`
- `<source>` là một thẻ nội tuyến, nó được sử dụng để chỉ định một nguồn video. Nó không có thẻ đóng tương ứng. Ví dụ: `<source src="video.mp4" type="video/mp4">`
- `<audio>` là một thẻ khối, nó được sử dụng để chèn một âm thanh vào trang web. Nó có thể chứa một hoặc nhiều thẻ `<source>`. Ví dụ: `<audio> This is an audio </audio>`
- `<source>` là một thẻ nội tuyến, nó được sử dụng để chỉ định một nguồn âm thanh. Nó không có thẻ đóng tương ứng. Ví dụ: `<source src="audio.mp3" type="audio/mp3">`
- `<a>` là một thẻ nội tuyến, nó được sử dụng để tạo một liên kết đến một trang web khác. Nó có thể chứa một hoặc nhiều thẻ `<img>`. Ví dụ: `<a href="https://www.google.com"> This is a link </a>`

```html
<a href="url">link text</a>
```

- attributes quan trọng nhất của thẻ là “href”, nó cho biết đích đến của link.
- Target attribute :
    - _self : mở tài liệu cùng cửa sổ khi nhấn link.
    - _blank : mở tài liệu ở cửa sổ mới.
    - _parent : mở tài liệu trong khung chính.
    - _top : mở tài liệu trong toàn bộ cửa sổ.

---

## VI. Section elements: div, span, header, footer, nav, main, section, article

![https://www.w3schools.com/html/img_sem_elements.gif](https://www.w3schools.com/html/img_sem_elements.gif)

- `<div>` là một thẻ khối, nó được sử dụng để nhóm các phần tử HTML lại với nhau. Nó không có bất kỳ ý nghĩa đặc biệt nào. Nó thường được sử dụng để tạo các nhóm phần tử CSS để áp dụng các kiểu CSS cho các phần tử đó. Ví dụ: `<div> This is a div </div>`
- `<span>` là một thẻ nội tuyến, nó được sử dụng để nhóm các phần tử HTML lại với nhau. Nó không có bất kỳ ý nghĩa đặc biệt nào. Nó thường được sử dụng để tạo các nhóm phần tử CSS để áp dụng các kiểu CSS cho các phần tử đó. Ví dụ: `<span> This is a span </span>`
- `<header>` là một thẻ khối, nó được sử dụng để tạo một tiêu đề cho trang web hoặc một phần của trang web. Ví dụ: `<header> This is a header </header>`
- `<footer>` là một thẻ khối, nó được sử dụng để tạo một chân trang cho trang web hoặc một phần của trang web. Ví dụ: `<footer> This is a footer </footer>`
- `<nav>` là một thẻ khối, nó được sử dụng để tạo một thanh điều hướng cho trang web hoặc một phần của trang web. Ví dụ: `<nav> This is a nav </nav>`
- `<main>` là một thẻ khối, nó được sử dụng để tạo một phần chính của trang web. Ví dụ: `<main> This is a main </main>`
- `<section>` là một thẻ khối, nó được sử dụng để tạo một phần của trang web. Ví dụ: `<section> This is a section </section>`
- `<article>` là một thẻ khối, nó được sử dụng để tạo một bài viết. Ví dụ: `<article> This is an article </article>`


---

## VII. HTML text fundamentals: h1 -> h6, p, ul, li

![ảnh minh hoạ 8](https://www.tutorialrepublic.com/lib/images/html/html-headings.png)
- `<h1>` là một thẻ khối, nó được sử dụng để tạo một tiêu đề lớn nhất cho trang web hoặc một phần của trang web. Ví dụ: `<h1> This is a heading </h1>`
- `<h2>` là một thẻ khối, nó được sử dụng để tạo một tiêu đề lớn hơn `<h1>` cho trang web hoặc một phần của trang web. Ví dụ: `<h2> This is a heading </h2>`
- ...
- `<p>` là một thẻ khối, nó được sử dụng để tạo một đoạn văn bản. Ví dụ: `<p> This is a paragraph </p>`
- `<ul>` là một thẻ khối, nó được sử dụng để tạo một danh sách không có thứ tự. Nó có thể chứa một hoặc nhiều thẻ `<li>`. Ví dụ: `<ul> This is an unordered list </ul>`
- `<li>` là một thẻ khối, nó được sử dụng để tạo một mục trong danh sách. Nó có thể chứa một hoặc nhiều thẻ `<p>`. Ví dụ: `<li> This is a list item </li>`
- `<ol>` là một thẻ khối, nó được sử dụng để tạo một danh sách có thứ tự. Nó có thể chứa một hoặc nhiều thẻ `<li>`. Ví dụ: `<ol> This is an ordered list </ol>`

![ảnh minh hoạ 9](https://i.ytimg.com/vi/mEbIaatnMa4/maxresdefault.jpg)

---

## VIII. Các thẻ liên quan đến form: form, input, button, label, textarea


- `<form>` là một thẻ khối, nó được sử dụng để tạo một biểu mẫu. Nó có thể chứa một hoặc nhiều thẻ `<input>`, `<button>`, `<label>`, `<textarea>`. Ví dụ: `<form> This is a form </form>`
- `<input>` là một thẻ nội tuyến, nó được sử dụng để tạo một trường nhập liệu. Nó không có thẻ đóng tương ứng. Ví dụ: `<input type="text">`
- `<button>` là một thẻ nội tuyến, nó được sử dụng để tạo một nút. Nó có thể chứa một hoặc nhiều thẻ `<img>`. Ví dụ: `<button> This is a button </button>`
- `<label>` là một thẻ nội tuyến, nó được sử dụng để tạo một nhãn cho một trường nhập liệu. Nó có thể chứa một hoặc nhiều thẻ `<input>`. Ví dụ: `<label> This is a label </label>`
- `<textarea>` là một thẻ khối, nó được sử dụng để tạo một trường nhập liệu dài. Nó không có thẻ đóng tương ứng. Ví dụ: `<textarea> This is a textarea </textarea>`
- `<select>` là một thẻ khối, nó được sử dụng để tạo một trường nhập liệu dạng danh sách thả xuống. Nó có thể chứa một hoặc nhiều thẻ `<option>`. Ví dụ: `<select> This is a select </select>`
- `<option>` là một thẻ khối, nó được sử dụng để tạo một mục trong danh sách thả xuống. Nó không có thẻ đóng tương ứng. Ví dụ: `<option> This is an option </option>`

![ảnh minh hoạ 11](https://www.simplilearn.com/ice9/free_resources_article_thumb/output-user-registration.PNG)

---

## IX. Có thể tìm hiểu các thẻ khác ngoài các thẻ trên các thẻ trên

- `<br>` : Xuống dòng
- `<hr>` : Thẻ ngang
- `<i>` : In nghiêng
- `<b>` : In đậm