document.getElementById('login-submit').addEventListener( 'click' , function () {
     const userEmail = document.getElementById('user-email').value ;
     const userPassword   = document.getElementById('user-password').value ;
     if ( userEmail == "vip@gmail.com"  && userPassword == 123) {
         window.location.href="banking.html"
     }
})