 // Function to save the user's name to local storage
 function saveName() {
    const userName = document.getElementById('name').value;
    localStorage.setItem('userName', userName);
    displayGreeting();
}

// Function to clear the user's name from local storage
function clearName() {
    localStorage.removeItem('userName');
    displayGreeting();
}

// Function to display the personalized greeting
function displayGreeting() {
    const userName = localStorage.getItem('userName');
    const greetingDiv = document.getElementById('greeting');

    if (userName) {
        greetingDiv.innerHTML = '<p>Welcome, ' + userName + '!</p>';
    } else {
        greetingDiv.innerHTML = '<p>Please enter your name above.</p>';
        greetingDiv.style.textAlign = "center";
    }
}
displayGreeting();


//================== count down timer=====================
   // Set the target date and time (feburary 1, 2024 at 00:00:00 UTC)
   const targetDate = new Date('2024-02-01T00:00:00Z').getTime();
   const countdownInterval = setInterval(function () {
   const currentDate = new Date().getTime();
   const timeDifference = targetDate - currentDate;

   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

       // Display the countdown
       var countdownElement = document.getElementById('countdown');
       countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

       // Check if the target date and time have passed
       if (timeDifference < 0) {
           clearInterval(countdownInterval); 
           countdownElement.innerHTML = 'yaay its the launching of lash||fitness';
       }
   }, 1000); 