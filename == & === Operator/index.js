// null == undefined   // true
// null === undefined  // false
// ✅ Booleans
// js
// Copy
// Edit
// false == 0     // true
// true == 1      // true
// false == ""    // true
// true == "1"    // true
// false == []    // true
// true == []     // false
// ✅ Strings & Numbers
// js
// Copy
// Edit
// "0" == 0       // true
// "42" == 42     // true
// "" == 0        // true
// " " == 0       // true  (space string becomes 0)
// ✅ Arrays & Objects
// js
// Copy
// Edit
// [] == ""       // true
// [] == 0        // true
// [] == false    // true
// [0] == 0       // true
// [1] == 1       // true
// [1] == "1"     // true
// ✅ Special Ones
// js
// Copy
// Edit
// NaN == NaN     // false (NaN is never equal to anything, even itself)
// 0 == -0        // true
// ⚡ Golden Rule:
// 👉 Always use === (strict equality) unless you really want these coercion rules.
// 👉 Use Object.is() when you want to handle special cases like NaN and -0.




















 






console.log(typeof "undefined");
