//const logo = document.querySelector('img');

//function onclick(e) {console.log(e)}

///logo.addEventListener('click', onclick )



//document.body.addEventListener('click', function(e){
  //  console.log(e.target)
    //console.log(e.currentTarget)
    
///})



const itemInput = document.getElementById('item-input')

const onKeyPress = (e) => {
    console.log('keypress')
}

itemInput.addEventListener('keypress', onKeyPress)