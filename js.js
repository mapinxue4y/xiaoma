const myDiv=document.querySelector(".outterDiv");
const footer=document.querySelector(".footer");
const Story=document.createElement('p');
myDiv.appendChild(Story);
Story.textContent='this is para';
Story.onclick=function (){
  const newStory=document.createElement('p');
  footer.appendChild(newStory);
  newStory.textContent='this is footer';
}
