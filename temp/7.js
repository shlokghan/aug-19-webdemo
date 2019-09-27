var add = function() {
   const  ref = document.querySelector('.container');

   const textRef = ref.children[0];

   const taskRef = ref.children[2];
   const btnRef = ref.children[3];

   const taskClone = taskRef.cloneNode(true);
   taskClone.innerHTML = textRef.value;

   const btnClone = btnRef.cloneNode(true);

   ref.appendChild(taskClone);
   ref.appendChild(btnClone);

   textRef.value = "";
}

const del = function(ref) {
    console.log(ref);

    const taskRef = ref.previousElementSibling;
    ref.remove();
    taskRef.remove();
}