function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementsByClassName("content")[0].style.marginLeft = "200px";
  document.getElementsByTagName("nav")[0].style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementsByClassName("content")[0].style.marginLeft = "0";
  document.getElementsByTagName("nav")[0].style.display = "block";
}

const photo = document.getElementById('photo');

        photo.addEventListener('click', open3DView);

        function open3DView() {
            
            photo.classList.add('three-d-view');

            
            const backButton = document.createElement('button');
            backButton.innerText = 'Back';
            backButton.addEventListener('click', close3DView);
            document.body.appendChild(backButton);
        }

        function close3DView() {
       
            photo.classList.remove('three-d-view');

           
            const backButton = document.querySelector('button');
            backButton.parentNode.removeChild(backButton);
        }


        function submitForm() {
          var email = document.getElementById("email").value;
          alert("Thank you for submitting your email: " + email);
        }