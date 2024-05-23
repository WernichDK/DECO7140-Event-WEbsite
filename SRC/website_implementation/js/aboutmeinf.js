//this information is not retained in any way shape or form, i think this would require constructing and endpoint for this data through the use of an API
//I hope we arent meant to know how to set up an API i have no clue :( this is only to show how this would function
const abtBut = document.getElementById('abtmebut');
const abtNamRes = document.getElementById('abtnam');
const abtInfRes = document.getElementById('abtdesc');
const abtProRes = document.getElementById('abtpro');
const dispName = document.getElementById('dispname');
const prefPronoun = document.getElementById('pronoun');
const aboutMeInf = document.getElementById('aboutmeinf');
const aboutMeForm = document.getElementById('aboutmefom');



function abtMe() {       

     
    abtNamRes.textContent = dispName.value;   
    abtProRes.textContent = prefPronoun.value; 
    abtInfRes.textContent = aboutMeInf.value;  
    aboutMeForm.style.display = "none";
    
    
    
};

abtBut.addEventListener("click", abtMe);