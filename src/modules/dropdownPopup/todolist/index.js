import options from "../../../consts/options";
import "./index.less";

function buildTodolist() {
    let template = ``;
    for (let i = 0; i < options.todolist.length; i++) {
        if (i < 10) {
            if (options.todolist[i].isdone) {
                template += `<li class="esa-todolist-li todolist-li-isdone">${i + 1}: ${options.todolist[i].title}</li>`;
            } else {
                template += `<li class="esa-todolist-li">${i + 1}: ${options.todolist[i].title}</li>`;
            }
        }
    }
    $("#esa-todolist-ul").append(template);
}

export default buildTodolist;