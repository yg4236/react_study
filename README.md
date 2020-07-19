# REACT STUDY recode [20-07-13 start]

### Day1 [20-07-13]
- 리액트 개발환경 설치 및 앱수정

### Day2 [20-07-14]
- 리액트 ES6 문법(2-1 ~ 2-5)
> 템플릿 문자열, 전개 연산자, 가변 변수와 불변 변수, 클래스, 화살표 함수

### Day3 [20-07-15]
- 리액트 ES6 문법(2-6)
>> 객체 확장 표현식과 구조 분해 할당

### Day4 [20-07-16]
- 리액트 ES6 문법(2-7)
> 라이브러리 의존성 관리

### Day5 [20-07-17]
- 리액트 ES6 문법(2-8 ~ 2-10)
> 배열 함수, 비동기 함수, 디바운스와 스로틀
- 리액트 컴포넌트(3-1 ~ 3-3)
> JSX(JavaScriptXML) : JavaSpript + XML property : 상위 component가 하위 component에 값을 전달할 때 사용(값 수정 불가)

### Day6 [20-07-18]
- 리액트 컴포넌트 (3-4)
> state : 값을 저장하거나 변경할 수 있는 객체
> > state 사용시 주의할 점
> > 1. consturctor에서 반드시 초기화해야함
> > 2. state값을 변경할 때는 setState() 함수를 반드시 사용 (직접 변경 불가, 또는 forceUpdate()함수를 호출하여 강제로 화면을 새로고침)
> > 3. setState()함수는 비동기ㅣ로 처리되며, setState()코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거침

### Day7 [20-07-19]
- 리액트 컴포넌트 (3-5)
> 생명주기 함수
> > + constructor(props)함수 : 맨 처음에 생성될 때 한번만 호출, 상태(state or object 변수)를 선언할 때 사용
> > + render()함수 : 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수
> > + static getDerivedStateFromProps(props, state)함수 : 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용, 반환값으로 state 변경
> > + componentDidMount()함수 : render()함수가 JSX를 화면에 그린 이후에 호출되는 함수 (컴포넌트가 화면에 모두 표현된 이후 해야하는 작업들은 여기에서 하면 됨)
> > + shouldComponentUpdate(nextProps, nextState)함수 : 프로퍼티를 변경하거나 setState()로 state값을 변경하면 '화면을 새로 출력해야 하는지'판단하는 함수 **리액트 성능에 많은 영향**
> > + getSnapshotBeforeUpdate(prevPros, prevState)함수 : 컴포넌트의 변경된 내용이 가상화면에 완성된 이후 호출되는 함수, 화면에 실제 출력 전에 DOM정보에 접근할 때 사용
> > + componentDidUpdate(prevProps, prevState, snapshot)함수 : 컴포넌트가 실제 화면에 출력된 이후 호출되는 함수, DOM정보를 변경할 때 사용
> > + componentWillUnmount()함수 : 컴포넌트가 소멸되기 직전에 호출되는 함수, 컴포넌트에서 감시하고있는 작업들을 해제할 때 필요한 함수. 생략되면 메모리 누수현상이 생겨 작동을 멈추기도 함
