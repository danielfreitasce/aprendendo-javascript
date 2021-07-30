function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let f_ano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (f_ano.value.length == 0 || f_ano.value > ano) {
        swal({
            title: "Opa",
            text: "Verifique os dados inseridos e tente novamente",
            icon: "warning",
            button: "Deixa comigo!",
        });

    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(f_ano.value)
        let genero =  '' 
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Masculino' 
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')

            } else if (idade < 18) {
                //jovem
                img.setAttribute('src','img/foto-jovem-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','img/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','img/foto-idoso-m.png')
            }

        } else{ 
            genero = 'Femenino'

            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','img/foto-bebe-f.png')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','img/foto-jovem-f.png')

            } else if (idade < 50){
                //adulto
                img.setAttribute('src','img/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','img/foto-idoso-f.png')
            }
        }
     
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)

    }



}
