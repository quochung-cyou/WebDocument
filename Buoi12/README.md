---
title: Buổi 12
layout: post
---

# Tài liệu Team Web: Buổi 12

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---
ReactJS
- useContext
- useReducer

## useContext


Một số từ khoá

- Provider là một component được cung cấp bởi React để cung cấp giá trị cho các component con.
- Consumer là một component được cung cấp bởi React để lấy giá trị từ Provider.
- createContext là một phương thức của React giúp chúng ta tạo ra một context.
- useContext là một hook giúp chúng ta truy cập vào context mà không cần phải sử dụng Consumer hay Provider.


Vào lí thuyết:

- useContext là một hook giúp chúng ta truy cập vào context mà không cần phải sử dụng Consumer hay Provider.
- useContext nhận vào một context và trả về giá trị của context đó.
- Ví dụ:

``` javascript

import React, { useContext } from 'react';

const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}

```

Như ví dụ trên, chúng ta đã tạo ra một context có tên là ThemeContext. Sau đó, chúng ta đã tạo ra một Provider với giá trị là "dark". Cuối cùng, chúng ta đã tạo ra một component ThemedButton sử dụng useContext để lấy giá trị của context ThemeContext.

- Điều này giúp chúng ta không cần phải sử dụng Consumer hay Provider nữa. Cụ thể nếu không dùng useContext, chúng ta sẽ phải viết như sau:

``` javascript

import React from 'react';

const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeContext.Consumer>
        {theme => <ThemedButton theme={theme} />}
      </ThemeContext.Consumer>
    </div>
  );
}

function ThemedButton({ theme }) {
  return <button>{theme}</button>;
}

```

Như chúng ta có thể thấy, nếu không dùng useContext, chúng ta sẽ phải sử dụng Consumer để lấy giá trị của context ThemeContext.

## useReducer

Một số từ khoá

- Reducer là một function nhận vào state và action, sau đó trả về state mới.
- useReducer là một hook giúp chúng ta quản lý state bằng cách sử dụng reducer.
- useReducer nhận vào reducer và state khởi tạo, sau đó trả về state hiện tại và dispatch.

Ví dụ:

``` javascript

import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

```

Như ví dụ trên, chúng ta đã tạo ra một reducer nhận vào state và action, sau đó trả về state mới. Sau đó, chúng ta đã sử dụng useReducer để quản lý state bằng cách sử dụng reducer. useReducer nhận vào reducer và state khởi tạo, sau đó trả về state hiện tại và dispatch. Chúng ta có thể sử dụng dispatch để gọi reducer và thay đổi state.

- Điều này giúp chúng ta có thể quản lý state bằng cách sử dụng reducer. Chúng ta có thể sử dụng reducer để thay thế cho useState.

### Pros and Cons với useState

- Pros:
    - Giúp chúng ta quản lý state bằng cách sử dụng reducer.
    - Giúp chúng ta có thể tách state thành nhiều state nhỏ hơn.
    - Giúp chúng ta có thể tách logic xử lý state ra khỏi component.

- Cons:

    - Cú pháp phức tạp hơn so với useState.
    - Không thể sử dụng nhiều reducer cho một state.



