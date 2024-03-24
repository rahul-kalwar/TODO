const list = document.querySelector("ul")
const input = document.querySelector("input")
input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        event.preventDefault()
        const task = input.value.trim()
        console.log(task);
        if(task !== ""){
            const li = document.createElement("li")
            li.setAttribute("class","list-group-item")
            li.textContent =task
            list.append(li)
            input.value = ""
        }
    }
});