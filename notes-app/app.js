const notesContainer = document.querySelector('.notes-container');
const btn = document.querySelector('.btn');
let notes = document.querySelectorAll('.userInput');

function notesData(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

notesData();

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML)
}

btn.addEventListener('click', ()=>{
    let userInput = document.createElement('p');
    let img = document.createElement('img');
    userInput.className ='userInput';
    userInput.setAttribute('contenteditable', 'true');
    img.src = 'assets/delete.png'
    notesContainer.appendChild(userInput).appendChild(img);
})

notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.userInput');
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


