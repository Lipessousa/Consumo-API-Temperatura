function consulta(){
    let chave = 'cccd2d992e3500744f5d08079865c5f7'
    let cidade = document.querySelector('#cidade').value;
    
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${chave}` 


    if(cidade.length <= 4){
        alert('Digite o nome de uma cidade')
    }



    fetch(urlAPI)
    .then((resp) => resp.json())
    .then((resp) => (resp))
    .then((conteudo) => dados(conteudo))
     

       
    function dados(dados){


        let dataImg = document.getElementById('data-img')

        let maxima = (dados.main.temp_max).toFixed(1)
        let minima = (dados.main.temp_min).toFixed(1)
        let sencTermica = (dados.main.feels_like).toFixed(1)

        document.getElementById('cidade').innerText = (`Cidade: ${dados.name}`)
        document.getElementById('tempMax').innerText = (`Máx: ${maxima}ºC`)
        document.getElementById('tempMin').innerText = (`Mín: ${minima}ºC`)  
        document.getElementById('senc_termica').innerText = (`Senc Térmica: ${sencTermica}ºC`)         
        document.getElementById('descricao').innerText = (dados.weather[0].description)
        document.getElementById('vento').innerText = (`Ventos: ${dados.wind.speed}Km/h`)  
        
        document.getElementById('corpo').style.maxWidth = 'max-content' 

        if(dados.weather[0].main === 'Clouds'){
            dataImg.setAttribute('src', 'dia-nublado.png')
        }else if(dados.weather[0].main === 'Clear'){
            dataImg.setAttribute('src', 'dia-ensolarado.png')
        }else if(dados.weather[0].main === 'Rain'){
            dataImg.setAttribute('src', 'chuva.png')
        }

    }
    
}