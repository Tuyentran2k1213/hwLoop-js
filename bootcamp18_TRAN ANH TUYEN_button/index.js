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
    var data = '';
    for(i = 1; i <= 10; i++){
      if(i % 2 == 1){
        data += `<div class = "odd">${i}</div>`
      }
      if(i % 2 == 0){
        data += `<div class = "even">${i}</div>`
      }
    }
    result.innerHTML = data;
}