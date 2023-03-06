let list = ['','','','','','','','',''];
let count = 0;
let player = document.querySelector('#player');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var endgame = false;
let user1 = {
    play: 'O',
    name: '輪到第二位玩家'
}
let user2 = {
    play: 'X',
    name: '輪到第一位玩家'
}
document.querySelector('#reset').addEventListener('click', () => {
    history.go(0);
})
document.getElementById('btn1').addEventListener('click', () => {
    if(list[0]===''){
    add(one , 0);
    }
});
document.getElementById('btn2').addEventListener('click', () => {
    if(list[1]===''){
    add(two , 1);
    }
});
document.getElementById('btn3').addEventListener('click', () => {
    if(list[2]===''){
    add(three , 2);
    }
});
document.getElementById('btn4').addEventListener('click', () => {
    if(list[3]===''){
    add(four , 3);
    }
});
document.getElementById('btn5').addEventListener('click', () => {
    if(list[4]===''){
    add(five , 4);
    }
});
document.getElementById('btn6').addEventListener('click', () => {
    if(list[5]===''){
    add(six , 5);
    }
});
document.getElementById('btn7').addEventListener('click', () => {
    if(list[6]===''){
    add(seven , 6);
    }
});
document.getElementById('btn8').addEventListener('click', () => {
    if(list[7]===''){
    add(eight , 7);
    }
});
document.getElementById('btn9').addEventListener('click', () => {
    if(list[8]===''){
    add(nine , 8);
    }
});

function add(num1 , num2 ){
    if (count % 2 == 0 && count < 9) {
        num1.innerHTML = user1.play;
        player.innerHTML = user1.name;
        list[num2] = user1.play;
    }
    else if (count % 2 != 0 && count < 9) {
        num1.innerHTML = user2.play;
        player.innerHTML = user2.name;
        list[num2] = user2.play;
    }
    count++;
    //判斷是否獲勝
    check(0,1,2);
    check(3,4,5);
    check(6,7,8);
    check(0,3,6);
    check(1,4,7);
    check(2,5,8);
    check(0,4,8);
    check(2,4,6);
    if (count == 9 && endgame===false){
        endgame = true;
        alert('平手');
        history.go(0);
    }
}

function check(num1 , num2 ,num3) {
    console.log(count);
    console.log(endgame);
    //判斷是否一樣
    if (list[num1] === list[num2] && list[num1] === list[num3]) {
        if (list[num1] === 'O' && endgame===false) {
            alert("第一位玩家 win");
            history.go(0);
            endgame = true;

        }
        else if (list[num1] === "X"  && endgame===false) {
            alert("第二位玩家 win");
            history.go(0);
            endgame = true;

        }  
    }
}
