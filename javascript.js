const form = document.getElementById("shell-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
const hours = document.getElementById("hours").value;
const votes = document.getElementById("votes").value;

if(!name || isNaN(hours) || isNaN(votes))
{
    const result = document.getElementById("result");
    result.innerText = "Please fill all the field correctly";
}
else{ 

    if(hours != 0 || votes !=0){

        if(hours == 0){
            result.innerText = "Without Work Don't Deserve a Penny";

        }
else{

        const hoursPoint = hours * 5;
const votesPoint = votes * 2
const totalPoint = hoursPoint + votesPoint / 2;


result.innerHTML = `For Your Project " ${name}, You Worked for  ${hours}  hours,and You Recieved <strong> ${votes}</strong> Votes. <br><br> Your total points are <strong> ${totalPoint} shells. `;
   
}

}

    else{
        result.innerText = "Atleast One Value Should Greater than Zero.";
    }


}
});
cancelAnimationFrame.apply("text").addEventListener
// complete 