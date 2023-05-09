function menuClick(){
     var menu = document.getElementById("mobileMenu");
     if(menu.classList.contains('hidden')) {
           menu.classList.remove('hidden')
     }else{
        menu.classList.add('hidden')
     }
}

function showQuestions() {
     var question1 = document.getElementById("question1");
     var question2 = document.getElementById("question2");
     var question3 = document.getElementById("question3");
     var messages = ["Validating your responses", "Checking for availability", "Redirecting you to the registration page"];
     var messageIndex = 0;

     if (!question1.classList.contains('hidden')) {
      question1.classList.add('hidden');
      question2.classList.remove('hidden');
    } else if (!question2.classList.contains('hidden')) {
      question2.classList.add('hidden');
      question3.classList.remove('hidden');
    } else if (!question3.classList.contains('hidden')) {
      question3.classList.add('hidden');
      message1.classList.remove('hidden');
      setTimeout(function() {
        message1.classList.add('hidden');
        message2.classList.remove('hidden');
      }, 3000); // display message2 after 1 second
      setTimeout(function() {
        message2.classList.add('hidden');
        message3.classList.remove('hidden');
      }, 5000); // display message3 after 2 seconds
      setTimeout(function() {
        window.location.href = "https://gdmtrck.com/?a=127540&c=331989&co=173820&mt=8"; // redirect to offer page after 3 seconds
      }, 7000);
    }
}
    
