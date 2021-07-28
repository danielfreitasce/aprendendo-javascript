function calcular(){
    let vel = document.getElementById('txtv')
    let res = document.getElementById('res')

    vel = Number(vel.value)

    if(vel >  80){
        res.innerHTML = `<p>Sua velocidade é de ${vel}km</p>`
        res.innerHTML += "Considerando que a velocidade máxima é de 80 km, você está <strong>multado(a)</strong>!"
    }
}