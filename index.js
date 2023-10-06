document.getElementById("outcome_desktop").style.display="none"
document.getElementById("outcome_mobile").style.display="none"
// Get all the elements with the class "options"

let user_pick = document.getElementById("user-pick")
let house_pick = document.getElementById("house-pick")
let user_pick_image = document.getElementById("user-pick-image")
let house_pick_image = document.getElementById("house-pick-image")

let user_pick_mobile = document.getElementById("user-pick-mobile")
let house_pick_mobile = document.getElementById("house-pick-mobile")
let user_pick_image_mobile = document.getElementById("user-pick-image-mobile")
let house_pick_image_mobile = document.getElementById("house-pick-image-mobile")

const images = document.querySelectorAll('.options');

// Loop through each image and add a click event listener
let score = 0;
document.getElementById("score").innerHTML=score

const songUrl = 'song.mp3'; // Replace with the URL to your song
const playButton = document.getElementById('playButton');
const audio = new Audio(songUrl);


images.forEach(image => {
    image.addEventListener('click', function() {
        song()
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if( width >=450 ){
            document.getElementById("game-div").style.display="none"
            document.getElementById("outcome_desktop").style.display="flex"
            }
        else{
            document.getElementById("game-div").style.display="none"
            document.getElementById("outcome_mobile").style.display="flex"
            document.getElementById("winner-mobile").style.display="flex"

        }

        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);

        let user_choice = this.id        
        let house_choice = choices[randomIndex];

        
        console.log(`You chose ${user_choice}`);
        console.log(`The house chose ${house_choice}`);


        //for pc
        if( width >=450 ){
            
        if (user_choice == "scissors"){
            user_pick.style.borderColor="hsl(39, 89%, 49%)hsl(40, 84%, 53%)";
            user_pick_image.src="./images/icon-scissors.png"
        }
        
        if (house_choice == "scissors"){
            house_pick.style.borderColor="hsl(39, 89%, 49%)hsl(40, 84%, 53%)";
            house_pick_image.src="./images/icon-scissors.png"
        }
        
        if (user_choice == "paper"){
            user_pick.style.borderColor="hsl(230, 89%, 62%)  hsl(230, 89%, 65%)";
            user_pick_image.src="./images/icon-paper.png"
        }
        if (house_choice == "paper"){
            house_pick.style.borderColor="hsl(230, 89%, 62%)  hsl(230, 89%, 65%)";
            house_pick_image.src="./images/icon-paper.png"
        }
        
         
        if (user_choice == "rock"){
            user_pick.style.borderColor="hsl(349, 71%, 52%)  hsl(349, 70%, 56%)";
            user_pick_image.src="./images/icon-rock.png"
        }

        if (house_choice == "rock"){
            house_pick.style.borderColor="hsl(349, 71%, 52%)  hsl(349, 70%, 56%)";
            house_pick_image.src="./images/icon-rock.png"
        }
    }

        //for mobile    
    else{
            
        if (user_choice == "scissors"){
            user_pick_mobile.style.borderColor="hsl(39, 89%, 49%)hsl(40, 84%, 53%)";
            user_pick_image_mobile.src="./images/icon-scissors.png"
        }
        
        if (house_choice == "scissors"){
            house_pick_mobile.style.borderColor="hsl(39, 89%, 49%)hsl(40, 84%, 53%)";
            house_pick_image_mobile.src="./images/icon-scissors.png"
        }
        
        if (user_choice == "paper"){
            user_pick_mobile.style.borderColor="hsl(230, 89%, 62%)  hsl(230, 89%, 65%)";
            user_pick_image_mobile.src="./images/icon-paper.png"
        }
        if (house_choice == "paper"){
            house_pick_mobile.style.borderColor="hsl(230, 89%, 62%)  hsl(230, 89%, 65%)";
            house_pick_image_mobile.src="./images/icon-paper.png"
        }
        
         
        if (user_choice == "rock"){
            user_pick_mobile.style.borderColor="hsl(349, 71%, 52%)  hsl(349, 70%, 56%)";
            user_pick_image_mobile.src="./images/icon-rock.png"
        }

        if (house_choice == "rock"){
            house_pick_mobile.style.borderColor="hsl(349, 71%, 52%)  hsl(349, 70%, 56%)";
            house_pick_image_mobile.src="./images/icon-rock.png"
        }
    }





        // logic for winner


        if (user_choice == house_choice){
            document.getElementById("win").innerHTML ="DRAW"
            document.getElementById("win-mobile").innerHTML ="DRAW"
        }


        else if(user_choice == "scissors" && house_choice =="paper"){
            document.getElementById("win").innerHTML ="YOU WIN"
            document.getElementById("win-mobile").innerHTML ="YOU WIN"
            score++;
           document.getElementById("score").innerHTML=score;
        }


        else if(user_choice == "scissors" && house_choice =="rock"){
            document.getElementById("win").innerHTML ="YOU LOSE"
            document.getElementById("win-mobile").innerHTML ="YOU LOSE"
            score--;
           document.getElementById("score").innerHTML=score

        }
        else if(user_choice == "paper" && house_choice =="scissors"){
            document.getElementById("win").innerHTML ="YOU LOSE"
            document.getElementById("win-mobile").innerHTML ="YOU LOSE"
            score--;
           document.getElementById("score").innerHTML=score

        }
        else if(user_choice == "paper" && house_choice =="rock"){
            document.getElementById("win").innerHTML ="YOU WIN"
            document.getElementById("win-mobile").innerHTML ="YOU WIN"
            score++;
           document.getElementById("score").innerHTML=score
        }
        else if(user_choice == "rock" && house_choice =="paper"){
            document.getElementById("win").innerHTML ="YOU LOSE"
            document.getElementById("win-mobile").innerHTML ="YOU LOSE"
            score--;
           document.getElementById("score").innerHTML=score

        }
        else if(user_choice == "rock" && house_choice =="scissors"){
            document.getElementById("win").innerHTML ="YOU WIN"
            document.getElementById("win-mobile").innerHTML ="YOU WIN"
            score++;
           document.getElementById("score").innerHTML=score
        }
    });
});



function again(){
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if( width >=450 ){
    document.getElementById("game-div").style.display="flex"
    document.getElementById("outcome_desktop").style.display="none"
    }
    else{
        document.getElementById("game-div").style.display="flex"
    document.getElementById("outcome_mobile").style.display="none"
    document.getElementById("winner-mobile").style.display="none"
    }
}



 function song() {
    audio.play()
        .then(() => {
            console.log('Audio started playing.');
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
};





var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}