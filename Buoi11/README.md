# Tài liệu Team Web: Buổi 11

- Chuẩn bị: Nguyễn Quốc Hưng (quochung-cyou)

---
ReactJS
- Lifecycle
- useEffect
- useRef
- Axios


--- 

## Lifecycle

- Lifecycle là một chuỗi các phương thức được gọi khi một component được tạo ra hoặc bị hủy.
- Lifecycle được chia làm 3 phần:
    - Mounting: Khi component được tạo ra.
    - Updating: Khi component được cập nhật.
    - Unmounting: Khi component bị hủy.
- Mỗi phần sẽ có các phương thức khác nhau.

### Mounting

- Mounting là quá trình khi component được tạo ra.
- Các phương thức trong Mounting:
    - constructor()
    - getDerivedStateFromProps()
    - render()
    - componentDidMount()

### Updating

- Updating là quá trình khi component được cập nhật.

- Các phương thức trong Updating:
    - getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()

### Unmounting

- Unmounting là quá trình khi component bị hủy.

- Các phương thức trong Unmounting:
    - componentWillUnmount()

Ví dụ sử dụng Lifecycle:

``` javascript

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hung',
      age: 20
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

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

## useEffect

- useEffect là một hook được sử dụng để thay thế cho các phương thức Lifecycle.

- useEffect được sử dụng để thực hiện các side effect.

- useEffect được gọi sau mỗi lần render.

- useEffect nhận vào một callback function.

Ví dụ sử dụng useEffect:

``` javascript

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

```

- Như trong ví dụ trên, ta có thể thấy rằng, ta đã sử dụng useEffect để thay thế cho phương thức componentDidMount.
- Cách sử dụng useEffect để thay thế cho phương thức componentDidMount:
    - useEffect nhận vào một callback function.
    - useEffect sẽ được gọi sau mỗi lần render.
    - useEffect sẽ được gọi sau khi component được tạo ra.


- Tối ưu hóa useeffect bằng cách skip useEffect

``` javascript

import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  }, [count]);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;

```

- Như trong ví dụ trên, ta có thể thấy rằng, ta đã sử dụng useEffect để thay thế cho phương thức componentDidUpdate.
- Việc sử dụng như vậy giúp ta tối ưu hóa được performance của ứng dụng, vì useEffect chỉ được gọi khi count thay đổi.

## useRef

- useRef là một hook được sử dụng để tham chiếu đến một phần tử trong DOM.
- useRef được sử dụng để thay thế cho ref.
- useRef nhận vào một giá trị khởi tạo.
- useRef trả về một object.
- useRef trả về một object có thuộc tính current.
- useRef trả về một object có thuộc tính current có giá trị khởi tạo là giá trị truyền vào useRef.

Ví dụ sử dụng useRef:

``` javascript

import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Hello World</h1>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Click</button>
    </div>
  );
}

export default App;

```

- Như trong ví dụ trên, ta có thể thấy rằng, ta đã sử dụng useRef để thay thế cho ref.
- Nó giúp ta tham chiếu đến một phần tử trong DOM. Ví dụ như trong ví dụ trên, ta đã tham chiếu đến input trong DOM. Sau đó ta đã sử dụng inputRef để focus vào input.
- Cách sử dụng useRef để thay thế cho ref:
    - useRef nhận vào một giá trị khởi tạo.
    - useRef trả về một object.
    - useRef trả về một object có thuộc tính current.
    - useRef trả về một object có thuộc tính current có giá trị khởi tạo là giá trị truyền vào useRef.


## Axios

- Axios là một thư viện được sử dụng để gọi API.
- Axios là một thư viện được sử dụng để gọi API bất đồng bộ.
- Axios là một thư viện được sử dụng để gọi API bất đồng bộ dựa trên promise.

Ví dụ sử dụng Axios:

``` javascript

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```

- Như trong ví dụ trên, ta có thể thấy rằng, ta đã sử dụng Axios để gọi API.
- Lí do Axios tối ưu hơn gọi http thông thường là vì:
    - Có sẵn XSRF protection: Axios có thể tự động thêm header X-XSRF-TOKEN vào request.
    - Có thể hủy request: Axios có thể hủy request bất cứ lúc nào.
    - Có thể chuyển đổi data: Axios có thể chuyển đổi data trước khi request.
    - Có thể intercept request và response: Axios có thể intercept request và response trước khi request và response được gửi đi.
    - Có thể hỗ trợ progress: Axios có thể hỗ trợ progress khi upload và download file.
    - Có thể hỗ trợ HTTP authorization: Axios có thể hỗ trợ HTTP authorization bằng cách tự động thêm header Authorization vào request.
    - Có thể hỗ trợ JSON data: Axios có thể hỗ trợ JSON data bằng cách tự động chuyển đổi JSON data thành object.

- Về mặt bản chất, http thuần cũng có thể làm được những điều trên, nhưng Axios giúp ta làm điều đó nhanh hơn với các hàm có sẵn.

