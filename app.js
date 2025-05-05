console.log ("build an app that fetches API")
const myform = document.querySelector("form")

myform.addEventListener("submit", handSubmit);
function handleSubmit(event){
    event.preventDefault();

    console.log ("handleSumbithas run");
    const data = new FormData (data)

    console.log ("data",data);
    const formvalues = object.fromEntries(data);
    console.log ("form values are", formValues);

};
const form = document.querySelector("form");
]form.addEventListener("sumbit", (event) => {
   Event.preventDefault();
   const formData = new formData(form);
   console.log(formData);


});
const jSobjectplease = object.fromEntries(formData);
console.log(jsobjectPlease);

console.log("fetch a cup of Tea");
async function await("https://jsonplaceholder.typicode.com/todos/1");
const json = await Response.json();
console.log ("JSON Date", json);

console.log("data.image");
const newimg = document.createElement("img");
newimg.src = data.image;
newImg.Width = 300;
ducument.getElementbyId("responsecontainer").appendchild(newImg);

}
getTea();


