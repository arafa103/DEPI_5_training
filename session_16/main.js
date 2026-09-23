const url = `http://localhost:3000/notes`


async function getNotes(){
    let res = await fetch(url, {
        method: "GET"
    });
    let notes = await res.json();
    return notes;
}

async function renderNotes(){
    let notes = await getNotes();
    let row = document.querySelector("#notes .row");
    notes.map(n => {
        let note = document.createElement("div");
        note.className = "note-card rounded border text-center py-4 col-lg-4 col-md-6 col-sm-12 my-2";
        note.innerHTML = `
                    <h2 class="fs-5 mb-2">${n.title}</h2>
                    <p>${n.desc}</p>
                    <input type="email" class="form-control mb-2 d-none" id="title" placeholder="" value="${n.title}" class="mb-2">
                    <input type="email" class="form-control d-none" id="desc" placeholder="" value="${n.desc}">
                    <hr>
                    <button class="btn btn-success" onclick="editNote(${n.id})">Edit</button>
                    <button class="btn btn-danger" onClick="deleteNote(${n.id})">Delete</button>
                        `;
        row.appendChild(note);
    })
}

function addNote(){
    event.preventDefault();
    const title = document.querySelector(`input#title`).value;
    const desc = document.querySelector(`textarea#desc`).value;
    const note = {title, desc};
    if(!desc || !title){
        alert(`empty field/s`);
        return;
    }
    console.log(note);
    fetch(url,
        {method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        }
    ).then(res => {alert(`note added`)})
    .catch(err => alert(`${err}, ${err.message}`));
}

function refreshNotes(){
    const row = document.querySelector(`#notes .row`);
    row.innerHTML = "";
    getNotes();
    renderNotes();
}

function deleteNote(id){
    fetch(`${url}/${id}`, {method: "DELETE"})
    .then(() => alert(`note ${id} deleted`))
    .catch(e => console.log(e));
    // refreshNotes();
}

// let isEditModeOn = new Array(100).fill(false);
// let hidden = new Array(100);
// let visible = new Array(100);
// let temporary = new Array(100);

function toggleEditMode(id){
    const titleInput = document.querySelector(`.row :nth-child(${id}) #title`);
    const descInput = document.querySelector(`.row :nth-child(${id}) #desc`);
    const heading = document.querySelector(`.row :nth-child(${id}) h2`);
    const paragraph = document.querySelector(`.row :nth-child(${id}) p`);
    if(!(isEditModeOn[id])){
        titleInput.classList.remove("d-none");
        descInput.classList.remove("d-none");
        heading.classList.add("d-none");
        paragraph.classList.add("d-none");
    }
    else{
        titleInput.classList.add("d-none");
        descInput.classList.add("d-none");
        heading.classList.remove("d-none");
        paragraph.classList.remove("d-none");
    }
    isEditModeOn[id] = !(isEditModeOn[id]);
}

function editNote(id){
    if(isEditModeOn[id]){
        const title = document.querySelector(`.row :nth-child(${id}) #title`).value;
        const desc = document.querySelector(`.row :nth-child(${id}) #desc`).value;
        console.log(`sending request with ${title}, ${desc}`);
        if(!title || !desc){
            alert(`empty field`);
            return;
        }
        let note = {id, desc, title};
        fetch(`${url}/${id}`, 
            {method: "PUT",
                body: JSON.stringify(note),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(res => res.json)
        .then(body => alert(`note title set to ${title}, description set to ${desc}`))
        .catch(e => console.log(e));
    }
    toggleEditMode(id);
}

document.addEventListener("DOMContentLoaded", renderNotes);
document.querySelector(`section .btn-dark`).addEventListener("click", addNote);