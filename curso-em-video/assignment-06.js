function calcular(){
    const vel_max = 80
    
    let vel = document.getElementById('txtv')
    let res = document.getElementById('res')

    vel = Number(vel.value)

    if(vel >  80){
        res.innerHTML = `<p>Sua velocidade é de ${vel}km</p>`
        res.innerHTML += "Considerando que a velocidade máxima é de 80 km, você está <strong>multado(a)</strong>!"

        let multa = vel - vel_max
        console.log(multa)

        if(multa <= (vel_max * 20)/100){
            res.innerHTML += "<p>Você ultrapassou em até 20% a velocidade máxima permitida, Isso constitui infração média<br> e o valor da multa será <strong>R$ 130,16</strong><br>Você terá <strong>4 pontos</strong> registrados na CNH </p>"
        }else if( (multa > (vel_max * 20)/100) && (multa <= (vel_max * 50)/100) ){
            res.innerHTML += "<p>Você está a mais de 20% e até 50% da velocidade máxima permitida, Isso constitui infração grave<br> e o valor da multa será <strong>R$ 195,23</strong><br>Você terá <strong>5 pontos</strong> registrados na CNH.</p>"
        }else if((multa > (vel_max * 50)/100)){
            res.innerHTML += "<p>Você está a mais de 50% da velocidade máxima permitida, Isso constitui infração gravíssima<br> e o valor da multa será <strong>R$ 880,41</strong><br>Você terá <strong>suspenso</strong> o direito de dirigir.</p>"
        }

    }else if( (vel <= 80) && (vel > 40) ){
        res.innerHTML = "<strong>Parabéns</strong> você está dentro do limite da velocidade máxima!"
    
    }else(vel<40)[
        res.innerHTML = "Você está <strong>muito abaixo</strong> da velocidade permitida. Isso constitui infração média<br> e o valor da multa é de R$ 130,16. Você terá <strong>4 pontos</strong> registrados na CNH.<br>Salvo se estiver na faixa da direita."
    ]

}