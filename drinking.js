    // Keeping track of what's open
var toclose = [];
var toskip = 0;

    // Opening statlines and remember what's open, i'm actually quite happy with this part
function showstats(p1) {
  toclose.unshift(p1);
  toskip = 1;
  document.getElementById(p1).style.display = "block";
}

    //Closing statlines, leaving only 1 open, unless they click outside of box
window.onclick = function(closing) {
      //Seeing if a statline is open or not, and if the same button was just pressed
  if (toskip == 1) {
    if (toclose[0] == toclose[1]){
      toclose[0] = "a";
    }
    toclose.push("a");
    toskip = 0
  } else {
    toclose.unshift("a");
  }
      //actually closing statlines
  for (i = 0; i+1 < toclose.length; i++) {
    document.getElementById(toclose[i+1]).style.display = "none";
    toclose.pop();
        //i'm not 100% sure why this is needed, hell, i'm not sure why most of this is needed.
    if (toclose.length > 1){
      toclose.pop();
    }
  }
}