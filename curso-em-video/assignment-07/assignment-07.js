function carregar(){
    let msg = document.getElementById('msg')
    let imagem = document.getElementById('foto')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}h${minutos}m`

    if(hora >=0 && hora <12){
        //bom dia!
        imagem.innerHTML= '<img src="manha.jpg">'
        document.body.style.background = '#e2cd9f'
        imagem.innerHTML +='<p>Tenha um belo dia!!!.</p>'
    }else if(hora >=12 && hora < 18){
        //boa tarde
        imagem.innerHTML= '<img src="tarde.jpg">'
        document.body.style.background = '#b9846'
        imagem.innerHTML +='<p>Tenha uma boa tarde.</p>'
    }else{
        //boa noite
        imagem.innerHTML= '<img src="noite.jpg">'
        document.body.style.background = '#515154'
        imagem.innerHTML +='<p>Tenha uma boa noite.</p>'
    }   
}
