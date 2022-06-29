function nextCard() {
  var cardBtns = document.querySelector('#cardBtn');
  var mainDiv = document.querySelector('#mainDiv');
 if(cardBtns.style.display = "inline-block") {
  cardBtns.style.display = "none"; 
   p = document.createElement('p');
   p.style.marginTop = "-34.6px";
   p.style.height = "6rem";
   p.style.width = "23.9rem";
   p.style.backgroundColor = "white";
   p.style.borderRadius = "8px";
   p1 = document.createElement('p1');
   p1.innerHTML = "<input type = 'textarea'   id = 'input' onkeydown = 'textArea(event)' onclick = 'textFocus()' placeholder = 'Enter Card Name...' style = 'width: 25.5rem; margin-top:2px; border-radius: 4px; outline:none; height: 2rem; font-size: 18px; border:2px solid rgb(209, 224, 224)'>"
   var divBtns = document.createElement('div');
   divBtns.innerHTML = "<div class = 'btn btn-primary' id='addBtn' onclick = 'smallCards()'>Add Card</div> <div class = 'btn btn-danger' id = 'rmBtn' onclick='homeFunc()'>X</div>"
   divBtns.style.marginTop = "25px";
   divBtns.style.marginLeft = "20px";
   divBtns.style.marginRight = "20px";
   divBtns.style.display = "flex";
   divBtns.style.justifyContent = "space-between";
   p.appendChild(p1);
   p.appendChild(divBtns);
   mainDiv.appendChild(p);  
    } 
}

  var mainDiv = document.querySelector('#mainDiv')
  var cardBtns = document.querySelector('#cardBtn');
 function homeFunc() {
if(mainDiv.style.display ='inline-block') {
  divB.style.height = '3.2rem';
  divB.className = 'pt-3'
  divB.style.marginTop = '-36px';
cardBtns.style.display = 'inline-block';
cardBtns.style.marginTop = '16px';
  mainDiv.removeChild(p);
}
}


function textFocus() {
  document.querySelector('#input').style.boxShadow = '2px 2px 10px 1px blue';
}


function textArea(e) {
var inputData = document.querySelector('#input').value;
if(inputData.length<1 && e.key === 'Enter') {
  alert('Enter the atleast one card!');
} else if(e.key === 'Enter') {
  var myPara = document.createElement('p');
  myPara.className = 'col-4 bg-light border border-black rounded text-white';
  myPara.style.height = '4rem';
  myPara.style.width = '100%'; 
  myPara.style.fontSize = '14px';
  myPara.style.marginBottom = '1px';
  myPara.style.display = 'flex';
  myPara.style.justifyContent = 'space-between';
  var paraText = document.createElement('p');
  paraText.innerHTML = inputData;
  paraText.style.marginTop = '5px';
  paraText.style.marginLeft = '25px';
  paraText.style.fontSize = '16px';
  paraText.style.color = 'black';
  myPara.appendChild(paraText);
  var buttonPara = document.createElement('p');
  buttonPara.innerHTML = '<p class = "btn btn-danger"  onclick = "removeCards(this)">X</p>'
  buttonPara.style.marginRight = '20px';
  buttonPara.style.marginTop = '13px';
  myPara.appendChild(buttonPara);
}
document.querySelector('#subDiv').appendChild(myPara);
var inputData = document.querySelector('#input').value = "";
}


function smallCards() {
var inputData = document.querySelector('#input').value; 
if(inputData=="") {
  alert('enter atleast one card!');
}else {
  var myPara = document.createElement('p');
  myPara.className = 'col-4 bg-light border border-black rounded text-white';
  myPara.style.height = '4rem';
  myPara.style.width = '100%'; 
  myPara.style.fontSize = '14px';
  myPara.style.marginBottom = '1px';
  myPara.style.display = 'flex';
  myPara.style.justifyContent = 'space-between';
  var paraText = document.createElement('p');
  paraText.innerHTML = inputData;
  paraText.style.marginTop = '5px';
  paraText.style.marginLeft = '25px';
  paraText.style.fontSize = '15px';
  paraText.style.color = 'black';
  myPara.appendChild(paraText);
  var buttonPara = document.createElement('p');
  buttonPara.innerHTML = '<p class = "btn btn-danger"  onclick = "removeCards(this)">X</p>'
  buttonPara.style.marginRight = '20px';
  buttonPara.style.marginTop = '13px';
  myPara.appendChild(buttonPara);
}
document.querySelector('#subDiv').appendChild(myPara);
var inputData = document.querySelector('#input').value = "";
}

function removeCards(e)  {
var subDiv =  document.querySelector('#subDiv');
var element = e.parentElement.parentElement;
subDiv.removeChild(element);
}    