let totalmarks = prompt('what is your total numbers?')

document.querySelector('.marks').innerText = totalmarks

if(totalmarks  <= 30){
  document.querySelector('.result').innerText = ' sorry!you are fail'
}
 
else if(totalmarks  <= 35 ){
    document.querySelector('.result').innerText = ' Sorry!you are reappear '
}
else if(totalmarks > 35){
    document.querySelector('.result').innerText = 'you are passed'
}
