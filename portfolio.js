'use strict';
function light(){
    let check=document.getElementById('check');
    let bdy=document.getElementById('body');

    if(check.checked){
      
      bdy.style.backgroundImage='linear-gradient(to right,rgba(0,0,0,0.0)50%,rgba(50,50,50,0.7)),url("image/evening.jpg")';
      bdy.style.backgroundSize='cover';
  
      bdy.style.backgroundAttachment='fixed';

    }else{
        bdy.style.backgroundImage='linear-gradient(to right,rgba(0,0,0,0.9)50%,rgba(50,50,50,0.7)),url("image/evening.jpg")';
      bdy.style.backgroundSize='cover';
      bdy.style.backgroundAttachment='fixed';
      
    }
}

function colour(){
    
    let clr=document.getElementById('clr').value;

    let p=document.querySelectorAll('#body h1 ,p,label,button,span,h3');
for(let i=0;i<p.length;i++){
p[i].style.color=clr;
}

}

function skils(){
    
    document.getElementById('exp').style.display='none';
    document.getElementById('skills').style.display='';
    document.getElementById('edu').style.display='none';
    document.getElementById('hire').style.display='none';
    colour();

}

function experience(){
    document.getElementById('skills').style.display='none';
    document.getElementById('exp').style.display='';
    document.getElementById('edu').style.display='none';
    document.getElementById('hire').style.display='none';


    var a=['no experience yet just on learning stage learning from hyd Naresh it institue at hyd ameerpet','will take experinece in internship or i will work as afrehser on comapnies ten i willl go for MNC','after MNC i will take 1 or 2 yr experinece then i wil go to dubai on work permit vissa'];
   let exp=document.getElementById('exp');
   exp.innerHTML='';
    let card='',col='';
    for(let i of a){
     col=document.createElement('div');
     card=document.createElement('div');
 
    card.style.background='linear-gradient(to right,rgba(0,0,0,0.9)50%,rgba(50,50,50,0.7)';
    col.className='col-md-4 col-8 mx-auto';
    card.className='card p-2';
    card.innerHTML=`
    <div class='card-body ' style='height:150px;'>
    <p>${i}</p>
    </div>
    `;
    col.appendChild(card);
    exp.appendChild(col);
    
   }
   colour();
}
function education(){
document.getElementById('skills').style.display='none';
    document.getElementById('exp').style.display='none';
    document.getElementById('edu').style.display='';
    document.getElementById('hire').style.display='none';
     
let data=[
    {'name':'gautam','institute':'I.P.S sr sec school','grade':'80%','standard':'10TH','pdf':'bdedeu'},
    {'name':'gautam','institute':'I.P.S sr sec school','grade':'70%','standard':'12TH','pdf':'bdedeu'},
    {'name':'gautam','institute':'Delhi University','grade':'PASS','standard':'BA Programe','pdf':'bdedeu'},
    {'name':'gautam','institute':'IIT','grade':'PASS','standard':'BCA','pdf':'bdedeu'}
];
document.getElementById('tb').innerHTML='';
for(let i of data){

    let tr=document.createElement('tr');
    let td_N=document.createElement('td');
    let td_I=document.createElement('td');
    let td_S=document.createElement('td');
    let td_G=document.createElement('td');
    let td_M=document.createElement('td');
    let a=document.createElement('a');

td_N.innerHTML=i.name;
td_I.innerHTML=i.institute;
td_S.innerHTML=i.standard;
td_G.innerHTML=i.grade;
a.href='javascript:void(0)';
a.innerHTML='pdf';
td_M.appendChild(a);

tr.appendChild(td_N);
tr.appendChild(td_I);
tr.appendChild(td_S);
tr.appendChild(td_G);
tr.appendChild(td_M);

document.getElementById('tb').appendChild(tr);


}

colour();

}

function hiree(){
    document.getElementById('skills').style.display='none';
    document.getElementById('exp').style.display='none';
    document.getElementById('edu').style.display='none';
    document.getElementById('hire').style.display='';
 
 
 
    var a=[
        {'type':'text','placeholder':'name','element':'input'},
        {'type':'email',"placeholder":'email','element':'input'}
    ]
let j=0;
let col;


let target=document.getElementById('hire_row');
target.innerHTML='';    
    
     for(let i of a){
        let  inp=document.createElement(i.element);
         col=document.createElement('div');
         inp.className='form-control';
         
         col.className='col-6 p-1';
         inp.type=i.type;
         inp.placeholder=i.placeholder;
         j++;
         col.appendChild(inp);
         
         target.insertBefore(col,target.childNodes[0]);

    }
   
    
    //let txt=document.createElement('textarea');
    //txt.placeholder='message!';

    colour();

}

function load(){
    light();
}