$(document).ready(function () {
    
    // creating a new todo task template
    const createNewTask = (todo, element) => {
        // no element passed means create all new template
        if (element == null) {
            $('.tasks_list').append(`
                <li>
                    <div class="list">
                        <input type="checkbox" class="tick">
                    
                        <span class="text">${todo}</span>
                    
                        <button class="edit">Edit</button>
                    
                        <button class="delete">Delete</button>
                    </div>
                </li >`);
        } else {
            //element passed means replace element with following template
            element.parent().html(`
                <li>
                    <div class="list">
                        <input type="checkbox" class="tick">
                    
                        <span class="text">${todo}</span>
                    
                        <button class="edit">Edit</button>
                    
                        <button class="delete">Delete</button>
                    </div>
                </li>`);
        }
    }
        
    // creating update element
    const createUpdateElement = (element) => {
    
    element.parent().html(`
        <div class="update_list">
            <input type="text" class="update_text">
    
            <button class="update">Update</button>
    
            <button class="delete">Delete</button>
        </div>`);
    }
    
    // event listener for input field to crate new task
    $('.input').submit(function (e) {
        e.preventDefault();

        // creating new template if length is not 0 and resetting form
        const todo = $.trim($(".user_input").val());
        if(todo.length){
            createNewTask(todo);
            document.querySelector('.input').reset();
        }
    });

    $('.tasks_list').click(function (event) {
        // deleting specific task from list
        if ($(event.target).hasClass('delete')) {
            $(event.target).parent().remove();
        }

        //ticking or unticking specific task from list
        if ($(event.target).hasClass('tick')) {
            $(event.target).next("span").toggleClass('done');
        }

        //initializing updating specific task from list
        if ($(event.target).hasClass('edit')) {
            createUpdateElement($(event.target).parent());
        }

        //finally updating specific task from list
        if ($(event.target).hasClass('update')) {
            const new_todo = $.trim($(event.target).prev().val());
            createNewTask(new_todo, $(event.target).parent());
        }
    });
});