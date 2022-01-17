var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

const result = document.getElementById('warning');
const x = document.getElementById('x');
const n = document.getElementById('n');
function cal(){
  var xValue = x.value * 1;
  var nValue = n.value * 1;
  if(xValue == 0 || nValue == 0){
    result.innerText = 'Bạn phải nhập đầy đủ các số';
  } else {
      result.innerText = `Tổng S(n) = ${pow(nValue, xValue).toLocaleString()}`
    }
  }

function pow(value, base){
  var total = 0;
  for(i = 1; i <= value; i++){
    total += Math.pow(base, i);
  }
  return total;
}
