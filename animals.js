//importation des animaux existants
const animalList=require('./animalList');

//fonction d'affichage des animaux
const createAnimalCard=(animal)=>{
    //récupération du conteneur 
    const animalContainer=document.getElementById('animals-container');
    //Création du cardContainer
    const card=document.createElement('article');
    card.classList.add('flip-card');
    //création du inner card
    const innerCard=document.createElement('div');
    innerCard.classList.add('flip-card-inner');
    //Création de la face pile
    const frontCard=document.createElement('div');
    frontCard.classList.add('flip-card-front');
    //Création de la photo
    const animalPicture=document.createElement('img');
    animalPicture.classList.add('animal-picture');
    animalPicture.src=animal.picture;
    animalPicture.alt=animal.name;
    //ajout de l'image à la carte
    frontCard.appendChild(animalPicture);
    //création du dos de al carte
    const backCard=document.createElement('div');
    backCard.classList.add('flip-card-back');
    //création du titre
    const animalName=document.createElement('h3');
    animalName.innerHTML=animal.name;
    //Création de la description
    const animalDesc=document.createElement('p');
    animalDesc.innerHTML=animal.description;
    //ajout des éléments au dos de la carte
    backCard.appendChild(animalName);
    backCard.appendChild(animalDesc);
}   

