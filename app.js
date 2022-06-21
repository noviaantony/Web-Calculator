(function (){

  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){ // check if the button was pressed
      let val = e.target.dataset.num; // retrieve datanum on the button
      screen.value += val; // adds that value to the screen
    });
  });

  equal.addEventListener('click', function(e){
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value); // does the calc for us
      screen.value = answer;
    }
  });

  clear.addEventListener('click', function(e){
    screen.value = '';
  })

})();