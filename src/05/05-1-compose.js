[multiplyTwo, multiplyThree, addFour].reduce(
  function(prevFunc, nextFunc) {
    return function(value) {
      return nextFunc(prevFunc(value));
    };
  },
  function(k) {
    return k;
  },
);
//풀이
/*
function(value){
    return addFour(
    function(value){
        return multiplyThree(
            function(value){
                return multiplyTwo(
                    (k => k)(value)
                );
            }(value)
        );
    }(value)
);}
*/
//compose()함수로 간결하게 쓰기
function compose(funcArr) {
  return funcArry.reduce(
    function(prevFunc, nextFunc) {
      return function(value) {
        return nextFunc(prevFunc(value));
      };
    },
    function(k) {
      return k;
    },
  );
}
const formulaWithCompose = compose([multiplyTwo, multiplyThree, addFour]);
