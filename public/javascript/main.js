let item_todos = document.querySelectorAll(".btn-edit")
let img_todos = document.querySelectorAll(".img-edit")



img_todos.forEach((img_todo) => {

    img_todo.addEventListener('click', () => {


        // change logo + set form and button post
        img_todo.firstElementChild.src = `asset/save.png`
        input_todo = img_todo.parentElement.parentElement.parentElement.querySelector(".body__box-content-item-input")
        input_todo.removeAttribute("readonly");
        input_todo.focus();
        
        let check_todo = img_todo.parentElement.parentElement.querySelector(".completed")
        check_todo.classList.remove("hidden");
        check_todo.addEventListener('click', e => {
            check_todo.removeAttribute("checked")
            if(check_todo.checked){
                check_todo.value = true
            }
            if(!check_todo.checked) {
                check_todo.value = false
            }   
        })

        let todo_id = img_todo.parentElement.parentElement.firstElementChild.textContent
        let form_todo = img_todo.parentElement.parentElement
        form_todo.action =  `/todo/updateTodo/${todo_id}`

        img_todo.addEventListener('click', e => {
            img_todo.type = ""
            // e.preventDefault()
        })
        
    })
})



