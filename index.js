// counter program
const countLabel = document.getElementById("countLabel")
let count = 0

function increase_count(){
  count ++;
  countLabel.textContent= count
}
function decrease_count () {
  count --;
  countLabel.textContent= count
}
function reset_count () {
  count = 0
  countLabel.textContent= count
}