let liste = [];

    
//liste.push("Badehose");
//liste.push("Flip Flops");
//liste.push("Sonnencreme");
//liste.push("Reisepass");
//liste.push("Auslandskrankenschein");

for (let i = 0; i < 5; i++) {
    let eingabe = prompt("Pack was in den Koffer:");
    liste.push(eingabe);
}


console.log("Koffer:")
for (let i = 0; i < liste.length; i++) {
    console.log(liste[i]);
}
