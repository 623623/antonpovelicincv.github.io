var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if(this.prevScrollpos < currentScrollpos){
        this.document.getElementById("navbar").style.top ="0"
    }else{
        this.document.getElementById("navbar").style.top = "hide"
    }
    this.prevScrollpos = currentScrollpos;
}
