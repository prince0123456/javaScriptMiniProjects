/** 
function addMore(){
    document.getElementById('error').innerHTML="";
    let name=document.getElementById('input').value;
    if(name==''){
        document.getElementById('error').innerHTML="please enter value"
    }else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent=name;
        //box.appendChild(li);
         
        let a=document.createElement('a');
        a.textContent="cut";
        a.href="javascript:void(0)";
        a.className="remove"
        li.appendChild(a)

        let pos=box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
        }else{
            box.insertBefore(li,pos);
        }
    }
    document.getElementById('input').value="";
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
});
*/
//---------------------------------------------
function todo(){
    document.getElementById('error').innerHTML="";
    let name=document.getElementById("input").value;
    if(name==""){
        document.getElementById('error').innerHTML="Please enter input";
    }else{
        let box=document.getElementById('list');
        let li=document.createElement('li');
        li.textContent=name;
        box.appendChild(li);

        //cut or remove element
        let cut=document.createElement('a');
        cut.textContent="delete";
        cut.href="javascript:void(0)";
        li.appendChild(cut);
    }
    document.getElementById("input").innerHTML=" ";
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
  let box=document.getElementById('list');
  let li=e.target.parentNode;
  box.removeChild(li);
});