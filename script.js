function consulta(){
    let chave = 'cccd2d992e3500744f5d08079865c5f7'
    let cidade = document.querySelector('#cidade').value;
    
    let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${chave}` 


    if(cidade.length <= 3){
        alert('Digite o nome de uma cidade')
    }

    fetch(urlAPI)
    .then((resp) => resp.json())
    .then((resp) => (resp))
    .then((conteudo) => dados(conteudo))
     

       
    function dados(dados){

        let maxima = (dados.main.temp_max).toFixed(1)
        let minima = (dados.main.temp_min).toFixed(1)
        let sencTermica = (dados.main.feels_like).toFixed(1)

        document.getElementById('cidade').innerText = (`Cidade: ${dados.name}`)
        document.getElementById('tempMax').innerText = (`Máxima: ${maxima}ºC`)
        document.getElementById('tempMin').innerText = (`Mínima: ${minima}ºC`)  
        document.getElementById('senc_termica').innerText = (`Sensação Térmica: ${sencTermica}ºC`)         
        document.getElementById('umidade').innerText = (`Umidade: ${dados.main.humidity}%`)
        document.getElementById('vento').innerText = (`Velocidade do vento: ${dados.wind.speed}Km/h`)       

    }
    
}