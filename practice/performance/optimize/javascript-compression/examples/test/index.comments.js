window.$=function(){
/**
   * @preserve 变量赋值
   */
var temp="temp one";temp="temp two";var unuse="unuse";document.body.innerHTML=temp;
/**
   * @preserve 纯函数
   */function square(value){return value+value}document.body.innerHTML=square("pure function. ");
/**
   * @preserve 副作用函数
   */function effect0(value){return value.effect0}effect0("effect0");function effect1(value){console.log(value);return value+value}effect1("effect1");function effect2(value){console.log(value);return value.effect2}effect2("effect2");function effect3(value){console.log(value);return"effect3".effect3}effect3("effect3");function effect4(value){console.log(value);return value.effect4}effect4("effect4");function effect5(value){console.log(value);return value.effect5}effect5("effect5");function square(x){return x.a}square({a:123});function cube(x){return x.a}cube({a:456})};