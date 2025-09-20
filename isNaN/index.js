// Global isNaN(value)
// Tries to convert the value to a number first.
// Returns true if the result is NaN.

isNaN(NaN);        // true
isNaN("hello");    // true  (because Number("hello") → NaN)
isNaN(undefined);  // true  (Number(undefined) → NaN)

isNaN(123);        // false
isNaN("123");      // false (Number("123") → 123)
isNaN(true);       // false (Number(true) → 1)

// 🔹 Number.isNaN(value)
// No type coercion.
// Returns true only if the value is exactly the NaN primitive.

Number.isNaN(NaN);        // true
Number.isNaN("hello");    // false (string, not NaN)
Number.isNaN(undefined);  // false
Number.isNaN(123);        // false
Number.isNaN("123");      // false