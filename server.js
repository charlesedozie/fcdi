//var chatServer = "https://app.socket.com.ng";
window.chatServer = "http://localhoet"; 
var domainName = document.domain;
window.apiEnd = window.chatServer;

window.openMenu = async () => {
document.getElementById("backdropMenu").style.display = "block";
document.getElementById("exampleModalMenu").style.display = "block";
document.getElementById("exampleModalMenu").classList.add("show");
document.getElementById("exampleModalMenu").classList.remove("hideElem");
document.getElementById("backdropMenu").classList.remove("hideElem");
}

window.closeMenu = async () => {
document.getElementById("backdropMenu").style.display = "none";
document.getElementById("exampleModalMenu").style.display = "none";
document.getElementById("exampleModalMenu").classList.remove("show");
document.getElementById("exampleModalMenu").classList.add("hideElem");
document.getElementById("backdropMenu").classList.add("hideElem");
}
