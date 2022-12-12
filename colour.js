const click = document.querySelector('.flip')
const banner = document.querySelector('.banner')
const color = document.querySelector('.color')
colorFlip = function(){
    color.classList.remove('shifted')
    color.classList.remove('shifted2')
    const x = Math.trunc(Math.random()*colors.length);
    // console.log(x);
    if(x===5 || x===6 || x===7){
        color.classList.add('shifted')
    }else if(x===3 || x===4){
        color.classList.add('shifted2')
    }else{color.classList.remove('shifted');color.classList.remove('shifted2')}
  banner.style.background = colors[x];
  color.style.color = x===7|| x===4?'black': 'white'
  color.textContent = colorName[x]
}

color.classList.remove('shifted')
color.classList.remove('shifted2')
// color.style.color = 'indigo'
// banner.style.backgroundColor = 'lightred'

const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'lightgreen', 'lightblue', 'lightcyan']
const colorName = [...colors]
// console.log(colorName);

click.addEventListener('click',colorFlip )
document.addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'c'){
        colorFlip()
    }
})
document.addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'Enter'){
        colorFlip()
    }
})

