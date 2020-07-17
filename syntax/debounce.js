export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

// const run = debounce(val => console.log(val), 100);

// run('a');
// run('b');
// run('2');
// .... 100ms이후
// 2
// 디바운스란 어떤 내용을 입력하다가 특정 시간동안 대기하고 있으면 마지막에 입력된 내용을 바탕으로 서버요청을 하는 방법
//ex) 네이버 연관검색어창
