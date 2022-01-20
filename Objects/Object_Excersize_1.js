var arr = [{
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": 1234567890
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": 1234567890
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": 1234567890
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "New York",
        "phoneNo": 1234567890
    }
];
// using .map() method.............//
getcity = (arr) => arr.city
cityName = [];
/* just lists the cities in an array ['Melbourne', 'Sydney', 'Perth'. 'Perth']*/
for (var i = 0; i < arr.length; i++) {
    var city = getcity(arr[i]);
    cityName.push(city);
}
console.log(cityName);

// ---------------------------------------------------------------------------//