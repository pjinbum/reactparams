# reactparams

# react-router-dom

[Home v6.9.0](https://reactrouter.com/en/main)

**React Router** : 리액트랑 같이 사용할 수 있는 리액트 라이브러리 

현재 v6까지 나와있음. 구버전인 v5랑 v6랑 문법 차이가 많이난다 (지금 우리가 배우는게 최신 문법 v6)

create-react-app 세팅한 Terminal창

```jsx
npm install react-router-dom@6
```

index.js

```jsx
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

App.js (import)

```jsx
import {Routes, Route, Link} from 'react-router-dom';
```

**<Routes>**

- 전 버전에서는 **Routes**가 아니라 **Switch** 였다. 버전이 업그레이드 되면서 이름이 바뀜  (컴포넌트를 상황에 맞춰서 스위치 해주는 역할을 한다.) 그 안에 각각의 페이지를 Route로 정의한다

**<Route>**

- Route 안에는 속성값이 두 개가 들어간다. **(path, element)**
- 페이지가 여러개면 주소도 여러개 여야 한다. / 각 페이지 별로 주소값이 있어야 찾아갈 수 있음
- path : 각 페이지의 주소
- element : 이 주소일 때(path) 보여주고 싶은 페이지
- / ⇒ 슬래시 하나는 기본 경로

URL을 직접 바꾸지 않고 어떻게 하면 Route의 스위치를 왔다 갔다 할 수 있는지?

- Link 또는 useNavigate 사용
- 이 또한 리액트 라우터 돔에서 왔으니까 임포트 해준다

이동하는 방법은 2가지가 있다.

1. Link
2. useNavigate (리액트 훅)

```jsx
import { useNavigate } from 'react-router-dom'
```

### useNavigate

입력한 경로로  페이지를 이동시켜주는 함수

전체 페이지를 하나 만들고 거기서 원하는 상품을 클릭 했을 때 상세 페이지로 이동하고 싶을 때, 선택한 상품에 따라 페이지가 달라지는데 어떤 페이지를 클릭 했는지 알고 싶다면 **useParams**

**restful route ⇒ URL 디자인의 패턴**

![image.webp](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1d3d18d1-a90f-40b7-9fa2-26a213d6a22c/image.webp)

Url과 HTTP Verb를 같이 사용하면 얘를 Show all items 라고 인식을 하자라는 규칙이다

**url + http 명렁어 = 어떤 행동**

**HTTP Verb**

1. **Get** : (fetch해서 데이터 가져올 때 항상 사용하는 명령어) fetch의 기본 HTTP값 = GET
2. **Post** : 새로운 데이터를 생성할 때 사용한다
3. **Put** : 데이터를 수정할 때 사용한다.
4. **Delete** : 데이터를 삭제할 때 사용한다.

(BackEnd로 url을 직접 디자인 해보고 싶다면 관심있게 볼 내용)

/products/:id 

- url에도 파라미터 값이 있다.
- url에 : 이 들어가면 파라미터 ⇒ 여기에 들어가는건 **가변적**이라는 뜻 (우리가 함수에서 매개변수를 사용하는 이유와 동일하다) 동적인 값을 입력할 수 있다
- 디테일한 페이지를 가져오고 싶을 때 아이템의 아이디 값을 파라미터로 넣어주면 된다.

내가 가져오고 싶은 디테일 아이템이 products 관련이 있기 때문에 우선 동일하게 /products 작성하고 그 하위에 가져오고 싶은 url 아이디 값을 파라미터로 받는다.

### usePrams

함수에서도 매개변수 값을 읽어와서 무언가를 하듯이 여기서도 url 파라미터 값을 읽어오고 싶다면 리액트 Hook인 useParams를 사용한다

**nested routes**

```jsx
<Route path='/about' element={<About/>}>
  <Route path='member' element={<About/>}/>
  <Route path='location' element={<About/>}/>
</Route>

<Route path='/about/member' element={<About/>}/>
<Route path='/about/location' element={<About/>}/>
```

1. 장점 코드가 길어질 때 간단해진다
2. 원하는대로 route들을 구성할 수 있다. About 내부에서 member 페이지만 보여주고 싶을 경우 / location만 보여주고 싶을 경우
3. 컴포넌트에서 nested routes를 보여줄 자리에 <Outlet>으로 자리를 표시 해줘야 한다.
