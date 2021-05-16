function msg(){
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
   // msg.innerHTML = `Agora sao ${hora}`

    if (hora >= 0 && hora < 12){
        // bom dia
        msg.innerHTML = '<h4>Olá, bom dia e bom trabalho!</p><p>Atenção para taxa de cambio</h4>'
        

    } else if (hora >= 12 && hora < 18){
        // boa tarde
        msg.innerHTML = '<h4>Olá, boa tarde!</p>'

    } else {
        // boa noite
        msg.innerHTML = '<h4>Olá, boa noite!</4h>'

    }

}