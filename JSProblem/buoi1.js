//Bài 1
//---
function bai1() {
    let a = [1, 5, 7, 8, 9, 4, 10];

    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            sum += a[i];
        }
    }
    console.log(sum);
}


//Bài 2
//---
function bai2() {
    let word = ['A', 'B', 'B', 'C', 'D', 'A', 'B', 'C'];
    //xoá phần tử trùng
    const unique = [...new Set(word)];
    console.log(unique);
}

//Bài 3
//---
function bai3() {
    let test = 'test';
    let arr = Array(3).fill(test);
    console.log(arr);
}

//Bài 4
//---
function bai4() {
    const data = [['a', 1], ['b', 2], ['c', 3]];
    const obj = Object.fromEntries(data);
    console.log(obj);
}

//Bài 5
//---
function bai5() {
    const studentNames = [
        { id: 1, name: 'Nguyễn Hoàng Quân' },
        { id: 2, name: 'Phạm Văn Kiên' },
        { id: 3, name: 'Hoàng Văn Nam' },
        { id: 4, name: 'Vũ Thị Huế' },
        { id: 5, name: 'Nguyễn Nhật Minh' },
        { id: 6, name: 'Phí Duy Quân' },
        { id: 7, name: 'Trần Minh Khôi' },
    ];
    let find = "Trần Minh Khôi";
    let highestId = 0;
    let name = '';
    for (let i = 0; i < studentNames.length; i++) {
        if (studentNames[i].name == find) {
            if (studentNames[i].id > highestId) {
                highestId = studentNames[i].id;
                name = studentNames[i].name;
            }
        }
    }
    console.log(name + " " + highestId);
}

//Bài 6
//---
function bai6() {
    const obj = [
        { a: 1 },
        { b: 2 },
        { a: 3 },
        { c: 4 },
        { b: 5 },
    ];
    let newObj = {};
    for (let i = 0; i < obj.length; i++) {
            for (const key in obj[i]) {
                if (key != 'a' && key != 'b') continue;
                if (newObj.hasOwnProperty(key)) {
                    newObj[key] += obj[i][key];
                } else {
                    newObj[key] = obj[i][key];
                }
            }
        
    }
    console.log(newObj);
}



bai1();
bai2();
bai3();
bai4();
bai5();
bai6();
