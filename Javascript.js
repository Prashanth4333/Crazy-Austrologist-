a = prompt("•Hey 👋...  ");
b = prompt("•Could you tell me your name please 😁.. ?  ");
c = prompt("•So I'm an astrologist. Could I predict your future 😉... ? Type y/n - ");

if (c === "y") {
    alert("Thanks 👍 for your Confirmation ☺️ ");
} else if (c === "n") {
    alert("Ok Fine 😁.. Have a nice day ☺️ ");
    alert("🚨 Kuka savu sasthav ☺️... Natho jathakam chapinchukoka pothey ☺️... chusuko mala 😉")
}

do {
    c = prompt("•So I'm an astrologist. Could I predict your future 😉... ? Type y/n - ");
    if (c === "y") {
        alert("Thanks 👍 for your Confirmation ☺️ ");
    } else if (c === "n") {
        alert("Ok Fine 😁.. Have a nice day ☺️ ");
        alert("🚨 Kuka savu sasthav ☺️... Natho jathakam chapinchukoka pothey ☺️... chusuko mala 😉");
    } else {
        alert("Please type 'y' or 'n'.");
    }
} while (c !== "y");
if (c.toLowerCase() === "y"){
   let g = prompt("•Please enter the birth DATE...  ");
   g = Number.parseInt(g);
if (g<5){
           alert("Endhuko 🙄 antha thondhara telusukovali ani 😏");
}          
else if (g>5&&g<=10){         
            alert("Puttinav ga 😏 apuko koni days");
}  
else if (g<15){
    alert("Endhuku.. endhuku pudatharo ardham khadhu 😒... ochestaru brathakaniki peh 😒...")
}
else if (g>15&&g<=20){
    alert("Pothav le zaldhi 😏 Paiki... wait chai 😁 ")
}
else if (g<25){
    alert("Vidhi adindhi nitho vintha natakam 😁.. savey inka po 😏... samanlu sadhuruko...")
}
else if (g>25&&g<=30){
    alert("Puttina vadiki maranam thapadhu... Maraninchina vadu malli puttaniki siggundadhu 😒... Em undhi le inka 😏 KUDHAFIZ 😁 ")
}
else {
    alert("Month lo undedhe 30 days 🙄... Nuvu out of range estav endhi ra 😒 anaconda mokapoda 😡")
}
