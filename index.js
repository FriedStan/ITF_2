set_username = () =>{
    var new_user = document.getElementById("username").value
    document.getElementById("current_user").innerHTML = new_user + "'s gallery"
}

set_profile = () =>{
    var new_pic = document.getElementById("img-url").value
    document.getElementById("profile-pic").style.backgroundImage = "url("+new_pic+")"
}