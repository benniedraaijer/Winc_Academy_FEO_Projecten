const taskContainer = document.querySelector('.task-container')

const createAllElements = async () => {
    const data = await getData()
    return data.forEach(data => {
        const rows = document.createElement('li');
        rows.className = 'rows'
        rows.target = data.id

        const show = document.createElement('div');
        show.className = 'show'

        const edit = document.createElement('div');
        edit.className = 'edit'
        edit.id = data.id

        const date = document.createElement('div');
        date.className = 'date';
        date.innerHTML = data.time;

        const description = document.createElement('div');
        description.className = 'description';
        description.innerHTML = data.description;
        if (data.done) {
            description.style.textDecoration = "line-through";
        } else {

        }

        const buttons = document.createElement('div');
        buttons.className = 'buttons';

        show.appendChild(date);
        show.appendChild(description);
        show.appendChild(buttons);

        //Create Button div
        const buttonA = document.createElement('div');
        buttonA.className = 'button-A';

        const buttonB = document.createElement('div');
        buttonB.className = 'button-B';

        const buttonC = document.createElement('div');
        buttonC.className = 'button-C';

        //Create the buttons
        const btnCheck = document.createElement('button');
        btnCheck.className = 'btn-check';
        btnCheck.value = data.id;

        const btnEdit = document.createElement('button');
        btnEdit.className = 'btn-edit';
        btnEdit.value = data.id;
        btnEdit.value1 = data.description

        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete';
        btnDelete.value = data.id;

        // Create Button Icons
        const btnCheckIcon = document.createElement('li');
        btnCheckIcon.className = "fas fa-check";

        const btnEditIcon = document.createElement('li');
        btnEditIcon.className = "far fa-edit";

        const btnDeleteIcon = document.createElement('li');
        btnDeleteIcon.className = "fas fa-trash-alt";

        //Put it all together
        rows.appendChild(show);
        rows.appendChild(edit);

        buttons.appendChild(buttonA);
        buttons.appendChild(buttonB);
        buttons.appendChild(buttonC);

        buttonA.appendChild(btnCheck);
        buttonB.appendChild(btnEdit);
        buttonC.appendChild(btnDelete);

        btnCheck.appendChild(btnCheckIcon);
        btnEdit.appendChild(btnEditIcon);
        btnDelete.appendChild(btnDeleteIcon);

        document.querySelector('.task-container').appendChild(rows);
    });
}

document.querySelector('.add-task').onsubmit = (event) => {
    postData(event.target.description.value);
}

taskContainer.onclick = async item => {
    if (item.target.className === 'btn-check') {
        await putData(item.target.value, "", true)
        resetList()
    } else if (item.target.className === 'btn-edit') {

        const editDescription = document.createElement('div');
        editDescription.className = 'edit-description';

        const editButton = document.createElement('div');
        editButton.className = 'edit-button';

        const buttonD = document.createElement('div');
        buttonD.className = 'button-D';

        const buttonSaveEdit = document.createElement('button')
        buttonSaveEdit.value = item.target.value;
        buttonSaveEdit.className = 'btn-save-edit';
        buttonSaveEdit.innerText = "Wijziging Opslaan";

        const input = document.createElement('input');
        input.className = 'edit-input';
        input.type = 'text';
        input.value = item.target.value1

        editButton.appendChild(buttonD)
        buttonD.appendChild(buttonSaveEdit);

        editDescription.appendChild(input);
        document.querySelector(`#${item.target.value}`).appendChild(editDescription);
        document.querySelector(`#${item.target.value}`).appendChild(editButton);
        document.querySelector(`#${item.target.value}`).style.display = "grid";

        //resetList()

    } else if (item.target.className === 'btn-delete') {
        await deleteData(item.target.value)
        resetList()
    } else if (item.target.className === 'btn-save-edit') {
        await putData(item.target.value, document.querySelector('.edit-input').value)
        resetList()
    }
}

const resetList = () => {
    while (document.querySelector('.task-container').firstChild) {
        document.querySelector('.task-container').removeChild(document.querySelector('.task-container').firstChild);
    }
    createAllElements()
}

createAllElements()