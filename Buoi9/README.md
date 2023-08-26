# Tài liệu Team Web: Buổi 9

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---

- Npm, npx là gì ?
- ReactJS là gì ?
- Tạo 1 dự án với create-react-app, xem trong dự án có những file và folder gì ?
- Component trong reactJS là gì, một số cách tạo component, một số khái niệm liên quan tới component như props, children ?

---

## Npm, npx là gì ?

![npm](https://media.geeksforgeeks.org/wp-content/uploads/20200205103253/Untitled-Diagram-1410.png)

- Npm là gì ?

  - Npm là một công cụ quản lý thư viện Javascript, được sử dụng phổ biến nhất hiện nay.
  - Npm là viết tắt của Node Package Manager.
  - Npm được cài đặt cùng với NodeJS, nên khi cài đặt NodeJS thì npm cũng được cài đặt theo.

- Npx là gì ?

    - Npx là một công cụ giúp chúng ta chạy các file Javascript mà không cần cài đặt NodeJS.
    - Npx được cài đặt cùng với npm, nên khi cài đặt npm thì npx cũng được cài đặt theo.

- Cách cài đặt npm và npx

    - Cài đặt NodeJS: https://nodejs.org/en/download/
    - Kiểm tra phiên bản npm và npx: `npm -v` và `npx -v`

![npm](https://www.boardinfinity.com/blog/content/images/2023/05/npm-and-npx.png)
---

## ReactJS là gì ?
![reactjs](https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg)

- ReactJS là một thư viện Javascript được sử dụng để xây dựng các giao diện người dùng (UI) đơn giản và nhanh chóng.
- ReactJS được phát triển bởi Facebook và được sử dụng bởi các công ty lớn như: Facebook, Instagram, Netflix, Paypal, Uber, Twitter, ...
- ReactJS là một thư viện, không phải là một framework.
- ReactJS được phát triển dựa trên ngôn ngữ Javascript.
- ReactJS được phát triển dựa trên các khái niệm sau:
  - Component
  - Props
  - State
  - Lifecycle
  - Virtual DOM

---

## Tạo 1 dự án với create-react-app, xem trong dự án có những file và folder gì ?

- create-react-app là gì ?

  - create-react-app là một công cụ giúp chúng ta tạo ra một dự án ReactJS một cách nhanh chóng.
  - create-react-app được cài đặt bằng npm, nên khi cài đặt npm thì create-react-app cũng được cài đặt theo.

- Cách cài đặt create-react-app

  - Cài đặt create-react-app: `npm install -g create-react-app`

- Cách tạo 1 dự án với create-react-app

  - Tạo 1 dự án mới: `create-react-app <tên dự án>`
  - Chạy dự án: `npm start`

- Các file và folder trong dự án
    
      - node_modules: chứa các thư viện cần thiết cho dự án
      - public: chứa các file tĩnh như html, css, ảnh, ...
      - src: chứa các file javascript
      - package.json: chứa các thông tin về dự án
      - package-lock.json: chứa các thông tin về các thư viện được cài đặt trong dự án
      - README.md: chứa các thông tin về dự án

- package.json

  - Các thông tin trong package.json

    - name: tên dự án
    - version: phiên bản dự án
    - description: mô tả dự án
    - main: file chính của dự án
    - scripts: các lệnh để chạy dự án

    - Các lệnh để chạy dự án
    
        - start: chạy dự án
        - build: build dự án
        - test: test dự án
        - eject: tách các file cấu hình ra khỏi dự án

- package-lock.json
    
      - Các thông tin trong package-lock.json
    
     - name: tên dự án
     - version: phiên bản dự án
     - lockfileVersion: phiên bản của file package-lock.json
     - dependencies: các thư viện được cài đặt trong dự án
     - packages: các thư viện được cài đặt trong dự án
        - devDependencies: các thư viện được cài đặt trong dự án
        - react-scripts: các thư viện được cài đặt trong dự án
        - react: các thư viện được cài đặt trong dự án
        - react-dom: các thư viện được cài đặt trong dự án

Khác biệt giữa package.json và package-lock.json

- package.json: chứa các thông tin về dự án
- package-lock.json: chứa các thông tin về các thư viện được cài đặt trong dự án



--- 

## Component trong reactJS là gì, một số cách tạo component, một số khái niệm liên quan tới component như props, children ?

- Component là gì ?

  - Component là một khối độc lập, có thể tái sử dụng trong ReactJS.
  - Component trong ReactJS được chia thành 2 loại: Functional Component và Class Component.

- Functional Component là gì ?

    - Functional Component là một function trong ReactJS.
    - Functional Component được viết dưới dạng function.
    - Functional Component không có state.
    - Functional Component không có lifecycle.
    - Functional Component không có this.
    - Functional Component không có render.
    - Functional Component không có constructor.
    - Functional Component không có các phương thức như: componentDidMount, componentDidUpdate, componentWillUnmount, ...
    - Functional Component không có các thuộc tính như: state, props, ...

Ví dụ:
    
    ``` javascript

    import React from 'react';

    function App() {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      );
    }

    export default App;

    ```
Cấu trúc:
    
        ``` javascript
    
        import React from 'react';
    
        function <tên component>() {
        return (
            <div>
            <h1>Hello World</h1>
            </div>
        );
        }
    
        export default <tên component>;
    
        ```

- Class Component là gì ?

    - Class Component là một class trong ReactJS.
    - Class Component được viết dưới dạng class.
    - Class Component có state.
    - Class Component có lifecycle.
    - Class Component có this.
    - Class Component có render.
    - Class Component có constructor.
    - Class Component có các phương thức như: componentDidMount, componentDidUpdate, componentWillUnmount, ...
    - Class Component có các thuộc tính như: state, props, ...

Ví dụ:
    
    ``` javascript

    import React from 'react';

    class App extends React.Component {
      render() {
        return (
          <div>
            <h1>Hello World</h1>
          </div>
        );
      }
    }

    export default App;

    ```

Props là gì ?

- Props là một thuộc tính của component.
- Props được sử dụng để truyền dữ liệu từ component cha sang component con.
- Props là một object.
- Props là một object bất biến (immutable).

Ví dụ thực tế:
        
        ``` javascript
    
        import React from 'react';
    
        function App() {
        return (
            <div>
            <h1>Hello World</h1>
            <ChildComponent name="ReactJS" />
            </div>
        );
        }
    
        function ChildComponent(props) {
        return (
            <div>
            <h2>{props.name}</h2>
            </div>
        );
        }
    
        export default App;
    
        ```

Như trong ví dụ trên, ta có thể thấy rằng, ta đã truyền dữ liệu từ component cha sang component con thông qua props.

- Cách truyền dữ liệu từ component cha sang component con thông qua props

    - Truyền dữ liệu từ component cha sang component con thông qua props bằng cách truyền dữ liệu vào trong thẻ của component con.

Children là gì ?

- Children cho phép biến đổi và truyền dữ liệu JSX vào các component.

Ví dụ:

    ``` javascript

    import React from 'react';

    const mappedChildren = Children.map(children, child =>
    <div className="Row">
        {child}
    </div>
    );

    export default App;

    ```

Một số hàm:

- Children.map: trả về một mảng các phần tử đã được biến đổi.
- Children.forEach: thực thi một hàm cho mỗi phần tử.
- Children.count: trả về số lượng phần tử.
- Children.only: trả về phần tử duy nhất.
- Children.toArray: trả về một mảng các phần tử.

Ví dụ:
    
        ``` javascript
    
        import React from 'react';

        function RowList({ children }) {
        return (
            <div className="RowList">
            {Children.map(children, child =>
                <div className="Row">
                {child}
                </div>
            )}
            </div>
        );
    
        export default App;
    
        ```

Như ví dụ trên, RowList là một component, nó có chức năng là hiển thị các phần tử con của nó theo dạng danh sách.

Ví dụ với một

```

<RowList>
  <p>This is the first item.</p>
  <p>This is the second item.</p>
  <p>This is the third item.</p>
</RowList>

```

Kết quả:

```

<div class="RowList">
  <div class="Row">
    <p>This is the first item.</p>
  </div>
  <div class="Row">
    <p>This is the second item.</p>
  </div>
  <div class="Row">
    <p>This is the third item.</p>
  </div>
</div>
