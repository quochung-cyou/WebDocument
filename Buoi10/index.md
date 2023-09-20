---
title: Tài liệu Team Web: Buổi 10
layout: post
---

# Tài liệu Team Web: Buổi 10

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---


JSX là gì? Những ưu điểm và nhược điểm
Props và State
List and keys
Handling

---

## JSX là gì? Những ưu điểm và nhược điểm

- JSX là một phần mở rộng của Javascript, nó cho phép chúng ta viết HTML trong Javascript.
- JSX có thể được sử dụng để viết code cho ReactJS.

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

- Như trong ví dụ trên, ta có thể thấy rằng, ta đã viết HTML trong Javascript.

- Ưu điểm của JSX:

    - JSX giúp chúng ta viết code dễ dàng hơn.
    - JSX giúp chúng ta dễ dàng hơn trong việc debug.
    - JSX giúp chúng ta dễ dàng hơn trong việc viết các biểu thức.
    - JSX giúp chúng ta dễ dàng hơn trong việc viết các hàm.
    - JSX khiến code chạy nhanh hơn (vì html sẽ được optimize)

- Nhược điểm của JSX:
    
    - JSX chỉ hỗ trợ một một số ít các tag HTML.
    - JSX khiến code khó đọc hơn (vì phải viết HTML trong Javascript).
    - Phá vỡ nguyên tắc tách biệt giữa HTML và Javascript.
    - JSX khiến việc viết các biểu thức phức tạp hơn.

## Props và State

### Props là gì ?

- Props là một thuộc tính của component.
- Props được sử dụng để truyền dữ liệu từ component cha sang component con.
- Props là một object.
- Props là một object bất biến (immutable).

Ví dụ:
    
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

### Children là gì ?

- Children cho phép biến đổi và truyền dữ liệu JSX vào các component, dưới dạng "child - con" của một component.

Ví dụ:

``` javascript

import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ChildComponent>
        <h2>ReactJS</h2>
      </ChildComponent>
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default App;

```

Như trong ví dụ trên, ta có thể thấy rằng, ta đã truyền dữ liệu từ component cha sang component con thông qua children.

- Cách truyền dữ liệu từ component cha sang component con thông qua children

    - Truyền dữ liệu từ component cha sang component con thông qua children bằng cách truyền dữ liệu vào trong thẻ của component con.

### State là gì ?

- State là một thuộc tính của component.
- State được sử dụng để lưu trữ các giá trị của component.
- State là một object.

Ví dụ - bài tập về nhà về việc ấn nút sẽ thay đổi giá trị hiển thị

``` javascript

import React, { Component } from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ChildComponent />
    </div>
  );
}

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ReactJS',
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.setState({ name: 'ReactJS Team' })}>
          Click me!
        </button>
      </div>
    );
  }
}

export default App;

```

Như trong ví dụ trên, ta có thể thấy rằng, ta đã sử dụng state để lưu trữ giá trị của component.

- Cách sử dụng state

    - Sử dụng state bằng cách khai báo state trong constructor của component.
    - Sử dụng state bằng cách gọi this.state trong phương thức render của component.
    - Sử dụng state bằng cách gọi this.setState trong phương thức render của component.

## List and keys

- List là một danh sách các phần tử.
- Key là một thuộc tính của một phần tử trong List.
- Key được sử dụng để xác định các phần tử trong List.
- Key là một string.

Ví dụ:

``` javascript

import React from 'react';

function App() {
  const list = ['ReactJS', 'NodeJS', 'AngularJS'];
  return (
    <div>
      <h1>Hello World</h1>
      <ChildComponent list={list} />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```

Như trong ví dụ trên, ta có thể thấy rằng, ta đã sử dụng key để xác định các phần tử trong List.

- Cách sử dụng key

    - Sử dụng key bằng cách truyền key vào trong thẻ của phần tử trong List.

## Handling

- Handling là một sự kiện.
- Handling được sử dụng để xử lý các sự kiện.
- Handling là một function.

Ví dụ:

``` javascript

import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  const handleClick = () => {
    alert('Hello World');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;

```

Như trong ví dụ trên, ta có thể thấy rằng, ta đã sử dụng handling để xử lý các sự kiện.

- Cách sử dụng handling

    - Sử dụng handling bằng cách truyền handling vào trong thẻ của phần tử trong List.







