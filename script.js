share.onclick = function hidenSocial() {
   let shownBlock = document.getElementById("social_wrap")
   if (shownBlock.style.visibility == "visible") {
      shownBlock.style.visibility = "hidden"
   } else {
      shownBlock.style.visibility = "visible"
   }
}