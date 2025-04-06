const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
const titles=document.querySelectorAll('.title')
 
buttons.forEach( function(button){
    button.addEventListener('click',function(e){
      if(e.target.id==='grey'){
        body.style.background='grey';
        titles.forEach(function(title){
          title.style.color='white';
        });
      }
      if(e.target.id==='white'){
        body.style.background=e.target.id;
        titles.forEach(function(title){
          title.style.color='red';
        });
      }
      if(e.target.id==='blue'){
        body.style.background=e.target.id;
        titles.forEach(function(title){
          title.style.color='yellow';
        });
      }
      if(e.target.id==='lightpink'){
        body.style.background=e.target.id;
        titles.forEach(function(title){
          title.style.color='Black';
        });
      }
    });
});


// USING FOR LOOP:
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');
// const titles = document.querySelectorAll('.title');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function(e) {
//     const id = e.target.id;

//     if (id === 'grey') {
//       body.style.background = 'grey';
//       for (let j = 0; j < titles.length; j++) {
//         titles[j].style.color = 'white';
//       }
//     }

//     if (id === 'white') {
//       body.style.background = 'white';
//       for (let j = 0; j < titles.length; j++) {
//         titles[j].style.color = 'red';
//       }
//     }

//     if (id === 'blue') {
//       body.style.background = 'blue';
//       for (let j = 0; j < titles.length; j++) {
//         titles[j].style.color = 'yellow';
//       }
//     }

//     if (id === 'lightpink') {
//       body.style.background = 'lightpink';
//       for (let j = 0; j < titles.length; j++) {
//         titles[j].style.color = 'black';
//       }
//     }
//   });
// }

