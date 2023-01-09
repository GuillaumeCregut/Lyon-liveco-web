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
    animalName.classList.add('animal-name');
    //Création de la description
    const animalDesc=document.createElement('p');
    animalDesc.innerHTML=animal.description;
    //ajout des éléments au dos de la carte
    backCard.appendChild(animalName);
    backCard.appendChild(animalDesc);
    //Ajout des faces de la carte au inner card
    innerCard.appendChild(frontCard);
    innerCard.appendChild(backCard);
    //ajout du innercard à la card
    card.appendChild(innerCard);
    //ajout de la carte au container
    animalContainer.appendChild(card);
}   

for (let i=0;i<animalList.length;i++){
    createAnimalCard(animalList[i]);
}

const formAdd=document.querySelector('form');
formAdd.addEventListener('submit',(e)=>{
    //On bloque l'envoi du formulaire
    e.preventDefault();
    //Récupérations des valeurs
    const newName=document.getElementById('animal_name').value;
    const newPicture=document.getElementById('animal_picture').value;
    const newDesc=document.getElementById('description').value;
    const newAnimal={
        name:newName,
        picture:newPicture,
        description:newDesc
    }
    //Ajout du nouvel animal
    createAnimalCard(newAnimal);
})