function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    let imgContainer = document.querySelector(".img-container")

    imgContainer.innerHTML = ""

    res.classList.add("letra-grande")

    if (fano.value.length == 0 || fano.value > ano) {
        alert("Erro! Verifique os dados e tente novamente!")        
    } else { 
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = "Homem"   
            if (idade >= 0 && idade <=12) {
                imgContainer.innerHTML = `<img src="imagem/bebe-homem.jpg" alt="bebe masculino">`

            } else if (idade >=13 && idade < 20){
                imgContainer.innerHTML = `<img src="imagem/jovem-homem.jpg" alt="jovem masculino">`
                
            }  else if (idade > 20 && idade <= 60) {
                imgContainer.innerHTML = `<img src="imagem/adulto-homem.jpg" alt="adulto masculino">`
            }  else if (idade > 60) {
                imgContainer.innerHTML = `<img src="imagem/idoso-homem.jpg" alt="idoso masculino">`
                           
            }    
        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade <=12) {
                imgContainer.innerHTML = `<img src="imagem/bebe-mulher.jpg" alt="bebe feminino">`
            } else if (idade >=13 && idade < 20){
                imgContainer.innerHTML = `<img src="imagem/jovem-mulher.jpg" alt="jovem feminino">`
                
            }  else if (idade > 20 && idade <= 60) {
                imgContainer.innerHTML = `<img src="imagem/adulto-mulher.jpg" alt="adulto feminino">`
                
            }  else if (idade > 60) {
                imgContainer.innerHTML = `<img src="imagem/idosa-mulher.jpg" alt="idoso feminino">`
               
            }            
        }
      res.innerHTML = `Sua idade é ${idade} anos`
    }
    
}