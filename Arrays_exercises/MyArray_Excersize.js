var a = {
    id: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
    firstName: 'Sam',
    lastName: 'Hughes',
    Location: "New york City"
};




/*console.log(a['Location']); // quotation for brackets
console.log(a.firstName); // NO quotes for dot
console.log(a.lastName); // NO quotes for dot
console.log(a === undefined); // NO quotes for=== undefined);*/

/*for (let key in a) {
    console.log(key);
    console.log(a[key]);
} // this ouput ALL of the objects property
*/
//-----------------------------------------------------------------------------//
// Ordered like Objects
var codes = {
    Germany: 2990,
    Switzerland: 6239,
    England: 2299.66,
    UnitedStates: 7882.11,
    Australia: "DownUnder"
};
// mulitply by 2

for (var value in codes) {
    if (typeof codes[value] === 'number') {
        return number;

    }
}
console.log(codes[value]);