console.log("#################Q12################")
let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2002',
    greeting: function() { console.log('Hello!');},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
}
console.log(student.name);
console.log(student.major);
console.log(student['Grad Year']);
student.greeting();
console.log(student['Favorite Teacher']['name']);
console.log(student['Favorite Teacher']['course']);
console.log("########")
for (var i = 0; i<student.courseLoad.length; i++) {
    console.log(student.courseLoad[i])
}
console.log("#############Q13###############")
let a13 = '3' + 2
let b13 = '3' - 2
let c13 = 3 + null
let d13 = '3' + null
let e13 = true + 3
let f13 = false + null
let g13 = '3' + undefined
let h13 = '3' - undefined

console.log("'3' + 2 = ", a13 + " , and type " + typeof a13)
console.log("'3' - 2 = ", b13 + " , and type " + typeof b13)
console.log("3 + null = ", c13 + " , and type " + typeof c13)
console.log("'3' + null = ", d13 + " , and type " + typeof d13)
console.log("true + 3 = ", e13 + " , and type " + typeof e13)
console.log("false + null = ", f13 + " , and type " + typeof f13)
console.log("'3' + undefined = ", g13 + " , and type " + typeof g13)
console.log("'3' - undefined = ", h13 + " , and type " + typeof h13)

console.log("#################Q14###############")
let a14 = ('2' > 1)
let b14 = ('2' < '12')
let c14 = (2 == '2')
let d14 = (2 === '2')
let e14 = (true == 2)
let f14 = (true === Boolean(2))

console.log("'2' > 1 => " + a14)
console.log("'2' < '12' => " + b14)
console.log("2 == '2' => " + c14)
console.log("2 === '2' => " + d14)
console.log("true == 2 => " + e14)
console.log("true === Boolean(2) => " + f14)




