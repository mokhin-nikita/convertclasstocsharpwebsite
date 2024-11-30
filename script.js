const WebApp = window.Telegram.WebApp;
const btnStatics = document.querySelectorAll(".btn-static");
const className = document.querySelector("#className");
const generateButton = document.querySelector(".btn-generate");
const inside = document.querySelector('.inside');
const typeName = document.getElementById('typeName');
const fieldName = document.getElementById('fieldName');
btnStatics.forEach((btnStatic) => {
    btnStatic.addEventListener("click", () => {
        btnStatic.classList.toggle("active");
    })
});
function AddField(){
    if(typeName.value != null && fieldName.value != null){
        if(!inside.innerHTML.includes(`${typeName.value} ${fieldName.value}`)) inside.innerHTML += `<div>
            ${typeName.value} ${fieldName.value}
        </div>`;
        else console.error("field is once");
    }
}
function AddFunction(){
    if(typeName.value != null && fieldName.value != null){
        if(!inside.innerHTML.includes(`${typeName.value} ${fieldName.value}`)) inside.innerHTML += `<div>
            ${typeName.value} ${fieldName.value}
        </div>`;
        else console.error("field is once");
    }
}
let generated = false;
generateButton.addEventListener("click", () => {
    if(className.value == null || className.value == "") return;
    if(!generated){
        generated = true;
        console.time("Генерация");
        console.timeEnd("Генерация");
        generateButton.classList.add(["generated"])
        generateButton.innerHTML = "&darr; Download"
    }else{
        WebApp.downloadFile([`${className.value}.cs`], ()=>{
            
        })
    }
})