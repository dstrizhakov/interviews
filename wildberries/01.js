//#wb  #wildberries

//вопросы про верстку: специфичность селекторов, зачем нужна семантическая верстка, как оптимизировать изображения (в том числе svg)
//как работает браузер, про http протокол, запросы, рассказать про куки и тд что-то еще базовое было, не запомнила

//1)


//2)
// var user = {
//     _name: 'Mike',
//     getIdentity: function (){
//         return this._name;
//     }
// };
//
// var stoleSecretIdentity = user.getIdentity;
//
// console.log(stoleSecretIdentity());  // ? undefined
// console.log(user.getIdentity());   // ? Mike

// 3)
// const obj1 =
//     {
//         a: 10,
//         b: 15,
//         c: 18
//     };
//
// const obj2 = Object.assign({c: 11, d: 12}, obj1);
// console.log(obj2.c, obj2.d); // ?