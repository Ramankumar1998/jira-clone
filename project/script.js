var plus = document.getElementsByClassName("plus")
var plus1 = document.querySelector(".plus")
var X = document.querySelector(".X")
var add = document.querySelectorAll(".item-2.but")

function clickFun(a) {
    console.log(a.target.parentNode)
    
}
for (let index = 0; index < add.length; index++) {
    add[index].addEventListener("click", clickFun)

    
}
function callPlus() {
    document.querySelector(".dialogBox").style.display = "flex";
    console.log("clicked")
}
function callDis() {
    document.querySelector(".dialogBox").style.display = "none";
}
plus1.addEventListener("click", callPlus)
X.addEventListener("click", callDis)

function addItem() {
    callDis()
    var boxes = document.querySelector(".wapper main")
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("form-content")
    var title = document.getElementById("title")
    boxes.innerHTML = puranaHTML + `
    <div class="box">
    <div class="boxHead">
        <div class="item-1 txt">${title.value}</div>
        <button class="item-2 but">+</button>
        <button class="item-3 but">-</button>
        <button class="item-4 but">$</button>
    </div>
    <main>
        <textarea name="" id="" >${boxContent.value}</textarea>
    </main>
</div>
    `
}
