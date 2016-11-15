(function(){
  var cross = document.getElementsByName('cross');
  var cross2 = document.getElementsByName('cross2');
//Swap colours of squares to alternatives 
  function swapAltColours(){
    for(var i = 0; i < cross.length; i++){
      cross[i].className = "cross-alt"; 
    }
    for(var i = 0; i < cross2.length; i++){
      cross2[i].className = 'cross-2-alt';  
    }
    console.log("Colours swaped to ALTERNATIVES.");
  }
//Swap colours of squares to deffault
  function swapDeffColours(){
    for(var i = 0; i < cross.length; i++){
      cross[i].className = "cross"; 
    }
    for(var i = 0; i < cross2.length; i++){
      cross2[i].className = 'cross-2';  
    }
    console.log("Colours swaped to DEFFAULT.");
  }
//time - the sum of time of alternatives + deffault
  var time = 2000;
  setTimeout(function(){
    setInterval(function(){swapAltColours();}, time + 1);
  }, 0);

  setTimeout(function(){
    setInterval(function(){swapDeffColours();}, time / 2);
  },time);


  
})();

