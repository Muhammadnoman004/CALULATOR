function press(e){
    document.getElementById('inp').value += e
}

function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    var b = document.getElementById('inp')
    b.value = b.value.slice(0,-1)
}
function clrAll(){
    document.getElementById('inp').value = ''
}