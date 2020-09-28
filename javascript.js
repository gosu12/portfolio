let anchorlinks = document.querySelectorAll('a[href^="#"]')
for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
function myFunction4() {
    let str = "my github";
    document.getElementById("link").innerHTML = str.link("http://github.com/gosu12");
}
function myFunction1() {
    document.getElementById("temp1").innerHTML = "Below is my github link <br>" + myFunction4();
}
function myFunction2() {
    document.getElementById("temp2").innerHTML = " a few small pictures below ... ";
}
function myFunction3() {
    document.getElementById("temp3").innerHTML = "solo yasuo ko anh oi????";
}
let modal = document.getElementById
('id01');
// When the user clicks anywhere
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
