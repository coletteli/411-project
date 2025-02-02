function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr(profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have successfully signed out");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
  }