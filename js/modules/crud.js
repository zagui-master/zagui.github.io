const contenTask=document.getElementById("conten_card_tasks_crud"),card=document.getElementById("card_task_crud"),form=document.getElementById("form_crud");let taskArray=[];const CreateTask=(e,t)=>{let a={title:e,description:t,state:"Pending "};return taskArray.push(a),a},SafeTaskBd=()=>{localStorage.setItem("task",JSON.stringify(taskArray)),PrintTask()},DeleteTask=e=>{let t=taskArray.findIndex((t=>t.title===e));taskArray.splice(t,1),SafeTaskBd()},UpdateTask=e=>{let t=taskArray.findIndex((t=>t.title===e));taskArray[t].state="Complete",SafeTaskBd()},PrintTask=()=>{if(contenTask.innerHTML="",taskArray=JSON.parse(localStorage.getItem("task")),null===taskArray)return taskArray=[],taskArray;taskArray.forEach((e=>{let t=document.createElement("div");t.className="card-task-crud",t.id="card_task_crud";let a=document.createElement("div");a.className="conten-icon-delete";let s=document.createElement("img");s.src="./assets/icons/delete/icon_delete.svg",s.alt="icon delete",s.id="icon_delete_task",s.dataset.test="icon_delete_task",s.className="icon-delete-task",a.append(s);let n=document.createElement("div");n.className="conten-title-task";let d=document.createElement("span");d.className="title-task",d.dataset.test="title_task",d.innerHTML=e.title,n.append(d);let r=document.createElement("div");r.className="conte-description-task";let c=document.createElement("p");c.className="description-task",c.dataset.test="description_task",c.innerHTML=e.description,r.append(c);let l=document.createElement("div");l.className="conten-btn-status-task";let i=document.createElement("div");"Complete"===e.state?i.className="btn-status-task stadoTrue":i.className="btn-status-task",i.id="btn_status_task",i.dataset.test="btn_status_task",i.innerHTML=e.state,l.append(i),t.append(a),t.append(n),t.append(r),t.append(l),contenTask.append(t)}))};form.addEventListener("submit",(e=>{e.preventDefault();let t=document.getElementById("input_title-task").value,a=document.getElementById("input_description_task").value;""===t?alert("La terea debe tener titulo"):""===a?alert("La tarea debe tener una descripcion"):(CreateTask(t,a),SafeTaskBd()),form.reset()})),document.addEventListener("DOMContentLoaded",PrintTask),contenTask.addEventListener("click",(e=>{let t=e.composedPath()[2].children[1].children[0].innerHTML,a=e.composedPath()[1].childNodes[0].id;"icon_delete_task"===a&&DeleteTask(t),"btn_status_task"===a&&UpdateTask(t)}));