console.log("connected");
//1.What is the difference between a comparison operator and an assignment operator?
///ans. The '=' is the so-called assignment operator and is used to assign the result of the expression on the right side of the operator to the variable on the left side. The '==' is the so-called equality comparison operator and is used to check whether the two expressions on both sides are equal or not. It returns true of they are equal, and false if they are not.

//2.What is a Boolean? What does it represent?
//ans. A Boolean data type has one of two possible values (usually denoted true and false), intended to represent the two truth values of logic and Boolean algebra.

//3.How is the += operator different than + operator?
// ans. + is an arithmetic operator while += is an assignment operator.

// Code Part
//1.Set two variables equal to two different numbers. Use a comparison operator to compare these two variables. Change one of their values by using the +=, -=, *=, or /= operator. Then, compare their values again.

let a = 5; b = 6;
console.log(a == 5); // true
console.log(b == 6); // true
console.log( a += 5); // 5 + 5 = 10
console.log( a -= 5); // 10 - 5 = 5
console.log( a *= 5); // 5 * 5 = 25
console.log( a /= 5); // 25 / 5 = 5
console.log( a == 5); // true
console.log( b += 6); // 6 + 6 =12
console.log( b -= 6); // 12 - 6 = 6
console.log( b *= 6); // 6 * 6 = 36
console.log( b /= 6); // 36 / 6 = 6
console.log( b == 6); // true

//2.Try out the <= and >= operators.
console.log( a <= b); // true
console.log( a >= b); // false

//3.Try to use the !== operator.
console.log( a !== b); // true
