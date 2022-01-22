//####################//
// for mobile devices //
//####################//

/* search box click event */
let searchIcon = document.querySelector(".searchbox img");
let searchBox = document.querySelector(".searchbox input");
function displaySearchBox(){
    if(searchBox.style.display===''||searchBox.style.display === 'none'){
        searchBox.style.display = 'flex';
    }
    else{
        searchBox.style.display = 'none';
    }
}
searchIcon.addEventListener('click',displaySearchBox);
/*navi icon click event*/
let navIcon = document.querySelector(".navIcon");
let lside = document.querySelector(".lside");
let newLeftSidePara = document.querySelector(".lsideWarning");
navIcon.addEventListener('click',displayLside);
lside.style.left = '-51vw';
function displayLside()
{
    if(lside.style.left[0]==='-'){
        lside.style.left = '0vw';
        newLeftSidePara.style.display = 'block';
    }
    else{
        lside.style.left = '-51vw'; 
        newLeftSidePara.style.display = 'none';
    }
}

/*a timer at footer*/
let timer = document.querySelector(".timer");
function updateTimer(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let str = `当前时间：<br>${year}年${month}月${day}日<br>${hour}时${minutes}分${seconds}秒`
    timer.innerHTML = str;
}
setInterval(updateTimer,1000);