let select = document.getElementById("states");
select.addEventListener('change', function(){
    let name = select.options[select.selectedIndex].text;
    document.getElementById("postcard").style.backgroundImage = 'url("../img/'+this.value+'@2x.jpg")';
    document.getElementById("greeting").innerText = 'Greetings from';
    document.getElementById("state-heading").innerText = name;
    console.log('url("../img/'+this.value+'@2x.jpg")')
}, false);

