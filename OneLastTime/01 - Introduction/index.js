// console.log('O_o');

// let x = 69

// console.log(x++); // 69
// console.log(x); //70
// console.log(x++); // 70
// console.log(x++); // 71

// console.log(++x); //70
// console.log(++x); //71
// console.log(++x); //72

// x++
// ++x

// x = x + 1

// console.log(x); //70
// ++x // x = x + 1
// console.log(x); //71

// let y = '5'

// console.log(typeof (y));

// x = x + y // 70 + '5'

// console.log(x); // 705
// console.log(typeof(x));

// console.log(++y);// 51? 6?

// let h = parseInt('9A')
    
// console.log(++h);

// let z = x + y
// console.log(z);
//
// console.log(y++);
// console.log(++y);

'use strict'

var msg = 'Welcome to JS'

// console.log(msg);

let firstName = 'Sakib'
let lastName = 'Ahamed'

let numYearsEmployed = 5
let dateBirth = new Date('August 26, 1994')

numYearsEmployed = 7

var dog = '🐕'

// console.log(dog);

var scopeTest = 10

function scopeTestFunc() {
    var scopeTest = 20
    console.log('O_o', scopeTest);
}   

// console.log(scopeTest);
// scopeTestFunc()
// console.log(scopeTest);

//

function upper(strings, ...values) { }

let name = 'Shakib', x = 'shakib94', topic = 'JS'

// console.log(`Hello, ${name} (@${x})! Wellcome to ${topic}!`);

const obj = {
    name: 'Shakib',
    age: 31,
    objFunc: () => {console.log(name)}
}

// let newObj = obj.objFunc()

const blog = {
    title: 'Title',
    content: 'Content',
    author: 'Author',
    publish() { console.log(`Publish ${this.title}`) },
    unpublish() { console.log('Unpublish', this.content) },
    delete() { console.log('Delete', this.author) }
}

// let newBlogPost = blog.publish()
// newBlogPost = blog.unpublish()
// newBlogPost = blog.delete()

// console.log(Object.getPrototypeOf(blog));
// console.log(blog.__proto__);

const myDate = new Date()
myDate.getDate()

// console.log(myDate);

const library = [
    {
        title: 'TitleA',
        author: 'AuthorA',
        status: {
            own: true,
            reading: true,
            read: true
    
        }
    },{
        title: 'TitleB',
        author: 'AuthorB',
        status: {
            own: true,
            reading: true,
            read: true
    
        }
    },{
        title: 'TitleC',
        author: 'AuthorC',
        status: {
            own: true,
            reading: true,
            read: true
    
        }
    }
]

// console.log(library);

library[0].status.read = false
library[1].status.read = false
library[2].status.read = false

library[0].title = 'firstBook'

const {title: firstBook} = library[0]

// console.log(library);

const libraryJSON = JSON.stringify(library)

// console.log(libraryJSON);
// console.log(library[0]["title"]);

delete library[2].title
// console.log(library);

var students = [
    {name: 'NameA', track: 'TrackA', achievement: 'O_oA', points: 67},
    {name: 'NameB', track: 'TrackB', achievement: 'O_oB', points: 69},
    {name: 'NameC', track: 'TrackC', achievement: 'O_oC', points: 111},
    {name: 'NameD', track: 'TrackD', achievement: 'O_oD', points: 666},
    {name: 'NameE', track: 'TrackE', achievement: 'O_oE', points: 707},
]

// students.map(student => console.log(`${student.name} ${student.track} ${student.achievement} ${student.points}`))

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + students[i].achievement + students[i].points);
}