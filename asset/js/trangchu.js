let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function validate() {
  let x = document.forms["search"]["name"].value;
  let z = document.forms["search"]["dateofbirth"].value;
  let a = document.forms["search"]["email"].value;
  let b = document.forms["search"]["problem"].value;
  let c = document.forms["search"]["message"].value;
  let l = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (x == "") {
    alert("Please fill full name ");
    return false;
  }
  if (z == "") {
    alert("Please fill date of birth ");
    return false;
  }
  if (a == "") {
    alert("Please fill the email");
    return false;
  }
  if (b == "") {
    alert("Please specify the problem ");
    return false;
  }
  if (c == "") {
    alert("Please write information");
    return false;
  }

  else{
    alert("Sent successfully");
    return true;

  }


}

