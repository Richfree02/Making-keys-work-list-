console.log("Sup planet");

const aBt = document.getElementById('addBtn');

function newLi(){
const tIp = document.getElementById('usI').value;
console.log(tIp);
}



aBt.addEventListener("click",newLi);
document.addEventListener('keydown', (e) => {
  if(e.defaultPrevented){
    return;
  }
  var key = e.key || e.keyCode;
  if(key === 'Enter' || keycode === '13'){
    aBt.click();
  }
});