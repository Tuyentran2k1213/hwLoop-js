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
const n = document.getElementById('x');
function cal(){
  var nValue = n.value * 1;
  if(nValue == 0){
    result.innerText = 'Bạn phải nhập số';
  } else {
      result.innerText = `Giai thừa của n! là: ${pow(nValue).toLocaleString()}`
    }
  }

function pow(value){
  var total = 1;
  for(i = 1; i <= value; i++){
    total *= i;
  }
  return total;
}
