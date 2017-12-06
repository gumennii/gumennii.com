var app = (function(){
  
  var hamburger = document.getElementById('js-hamburger')

  function toggleHamburger() {
    if (hamburger.classList.contains('is-active')) {
      hamburger.classList.remove('is-active')
    } else {
      hamburger.classList.add('is-active')
    }
  }

  hamburger.addEventListener('click', toggleHamburger)

})()
