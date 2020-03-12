

function languages(){
    var lang = language.value;
  
}


var lang = language.value;


let tercume = document.getElementById("word").value

class Request{
    async get(url){
        const response = await fetch(url);
        const result = response.json();

        return result;
    }

   
}

const request = new Request();

request.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200130T162905Z.98d664746134fc23.f345aacfab64ae8fe0b50d889182724af93c69ab&text='+tercume+'&lang='+lang)
        
.then(data => outputWord.innerHTML=data.text[0])




language.addEventListener("change",function(){
    let flag = this.value
    outputImage.setAttribute("src",flag+".png")
    
    var texts =language.options[language.selectedIndex].text

    outputLanguage.innerHTML=texts
})



button.addEventListener("click",function(){

    var lang = language.value;
    
    let tercume = word.value
    

    class Request{
        async get(url){
            const response = await fetch(url);
            const result = response.json();
    
            return result;
        }}

        const request = new Request();
        request.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200130T162905Z.98d664746134fc23.f345aacfab64ae8fe0b50d889182724af93c69ab&text='+tercume+'&lang='+lang)
            
             .then(data => outputWord.innerHTML=data.text[0])
})




    // .then(data => console.log(data.text[0]))
    // .catch(err => console.log(err))

    // var tercume = data.text[0];

    
    


















