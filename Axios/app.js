const form=document.querySelector('#search_form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(form.elements.query.value);
})