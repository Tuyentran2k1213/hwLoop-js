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

function positive(){
    var i = 0;
    var n = 0;
    for(;n <= 1000; i++){
        n += i;
    }
    result.innerText = `Số nguyên dương nhỏ nhất thỏa điều kiện là: n = ${i}`;
}