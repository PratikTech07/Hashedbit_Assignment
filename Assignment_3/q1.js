
let states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];


function startsWithVowel(state) {
    return /^[AEIOUaeiou]/.test(state);
}


let filteredStates = states.filter(state => !startsWithVowel(state));

console.log(filteredStates);

// ouput

/*0
:
"Bihar"
1
:
"Chhattisgarh"
2
:
"Goa"
3
:
"Gujarat"
4
:
"Haryana"
5
:
"Himachal Pradesh"
6
:
"Jharkhand"
7
:
"Karnataka"
8
:
"Kerala"
9
:
"Madhya Pradesh"
10
:
"Maharashtra"
11
:
"Manipur"
12
:
"Meghalaya"
13
:
"Mizoram"
14
:
"Nagaland"
15
:
"Punjab"
16
:
"Rajasthan"
17
:
"Sikkim"
18
:
"Tamil Nadu"
19
:
"Telangana"
20
:
"Tripura"
21
:
"West Bengal*/