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
- 리액트 컴포넌트 (3-5 ~ 3-6)
> * 생명주기 함수
> > + constructor(props)함수 : 맨 처음에 생성될 때 한번만 호출, 상태(state or object 변수)를 선언할 때 사용
> > + render()함수 : 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출되는 함수
> > + static getDerivedStateFromProps(props, state)함수 : 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용, 반환값으로 state 변경
> > + componentDidMount()함수 : render()함수가 JSX를 화면에 그린 이후에 호출되는 함수 (컴포넌트가 화면에 모두 표현된 이후 해야하는 작업들은 여기에서 하면 됨)
> > + shouldComponentUpdate(nextProps, nextState)함수 : 프로퍼티를 변경하거나 setState()로 state값을 변경하면 '화면을 새로 출력해야 하는지'판단하는 함수 **리액트 성능에 많은 영향**
> > + getSnapshotBeforeUpdate(prevPros, prevState)함수 : 컴포넌트의 변경된 내용이 가상화면에 완성된 이후 호출되는 함수, 화면에 실제 출력 전에 DOM정보에 접근할 때 사용
> > + componentDidUpdate(prevProps, prevState, snapshot)함수 : 컴포넌트가 실제 화면에 출력된 이후 호출되는 함수, DOM정보를 변경할 때 사용
> > + componentWillUnmount()함수 : 컴포넌트가 소멸되기 직전에 호출되는 함수, 컴포넌트에서 감시하고있는 작업들을 해제할 때 필요한 함수. 생략되면 메모리 누수현상이 생겨 작동을 멈추기도 함
> * 클래스형 컴포넌트
> > + shallowEqual()함수로 얕은비교
> > + Component대신 얕은 비교를 사용하는 PureComponent로 컴포넌트를 만들어 리액트 앱의 성능을 높임

###  Day8 [20-07-20]
- 리액트 컴포넌트 (3-7)
> * 함수형 컴포넌트
> > + 상위 컴포넌트로부터 전달받은 프로퍼티와 컨텍스트만을 이용하여 화면을 구성
> > + state와 생명주기함수 사용 불가

### Day9 [20-07-21]
- 리액트 컴포넌트 (3-8 ~ 3-10)
> * 배열 컴포넌트
> > + 배열 컴포넌트의 경우 배열 요소의 개수만큼 반복하므로 성능에 영향을 많이 준다.
> > + **따라서 배열 컴포넌트에는 키값을 key로 꼭 정의해주어야 함**(다시 출력해야 하는 경우 리액트 엔진이 기존의 컴포넌트를 재활용하여 성능을 높이기 때문)
> > + 키값 정의 방법 => <div **key={??}>** <div />
> * 컴포넌트에서 콜백함수와 이벤트 처리
> > + 콜백 함수 : 정의된 위치에서 실행되지 않고, 이후 특정상황에서 실행되는 함수 (즉, 콜백 함수를 프로퍼티로 전달하면 됨)

### Day10 [20-07-22]
- 에어비앤비 디자인 시스템 따라하기 
> * 스토리북 설치

### Day11 [20-07-23]
> 노드제이에스 버전 이상으로 인한 업그레이드, 재설치

### Day12 [20-07-24]
- 스토리북(비주얼 테스트로 더 쉽게 개발하기)
> 스토리북 설치 및 스토리 추가와 Action, JSX 보는 법 이해

### Day13 [20-07-25]
- CSS로 컴포넌트 스타일 적용하기
> CDN방식으로 머터리얼 디자인 적용, scss적용
> 컴포넌트에 머터리얼 디자인 적용
> 자세한 사용 방법은 Materialize 공식 웹(https://materializecss.com/) 참조

### Day14 [20-07-26]
- 스타일 컴포넌트 만들기 (react-with-styles적용) (4-3)
> + button Component 만들기
> + 반응형 스타일 구성
- 테스트 위주 개발 방법 사용해 보기 (4-4)
> + OO.test.jsx로 저장하고 'yarn test'하면 테스트 구동
> + enzyme 라이브러리
> > : 컴포넌트의 기능만 손쉽게 검사해주는 도구
> > * toThrow() 함수 : 컴포넌트의 출력 오류 검사
> > * expect() 함수 : 특정 변수를 비교하거나 함수를 실행하여 발생한 결과값을 검증
> > * beforEach(), afterEach() 함수 : 각 테스트 코드가 실행되기 이전과 이후에 특정 설정을 추가하고 변경된 설정을 초기화 하기위한 함수
> > * **find() 함수 : input, label, span 엘리먼트가 출력되는지 검사**
> > * **prop(), props() 함수 : Input 컴포넌트에 전달된 프로퍼티의 값이 의도대로 render()함수에서 할당되었는지 검사**
> > * **setProps() 함수 : 컴포넌트의 변경된 값에 맞춰 화면 출력 state를 검증하려면 프로퍼티를 바꿔야함 -> 바꿀수 있도록 제공하는 함수**
> > * **simulate() 함수 : 가상 이벤트를 작동하여 이벤트에 반응하는 콜백 함수가 정상적으로 동작하는지 검사**
> > * **mount() 함수 : 하이어오더 컴포넌트를 출력**
> > * **dive() 함수 : 하위 컴포넌트 출력**

### Day15 [20-07-27]
- CheckBox 컴포넌트 만들며 복습하기 (4-5)

### Day16 [20-07-28]
- 커링과 조합 개념 공부 (5-1)
> + 커링 : 반환값이 함수인 디자인 패턴(함수), 중복된 코드를 반복적으로 입력하지 않고 원하는 기능을 조합하여 적재적소에 사용할 수 있다
</br> > -> '함수의 재활용'을 위해 사용, **인자를 나눠 받아 실행할 수 있다**
`
const multiply = (a,b) => a*b;
const add = (a,b) => a+b;

const multiplyX = x => a => multiply(a,2);
const addX = x => add(x,a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = x => addFour(multiplyThree(multiplyTwo(x)));`
