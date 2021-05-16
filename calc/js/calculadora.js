function calculo()
		{
//passando os valores do campo do form para as variaveis
tarifa = Number(document.meu_form.tarifa.value);
taxaEmbarque = Number(document.meu_form.taxaEmbarque.value);
cambio = Number(document.meu_form.cambio.value);


soma1step = eval(tarifa + taxaEmbarque); //fazendo a soma
soma1step = (soma1step * cambio);

document.meu_form.valor_total.value = soma1step.toFixed(2);


//fazendo o segundo passo

taxaP2D = (0.10);
soma2step = (soma1step + (soma1step * taxaP2D));
document.meu_form.valor_total2.value = soma2step.toFixed(2);

//fazendo segundo passo

soma3step = ((soma2step)*0.05);
document.meu_form.valor_total3.value = soma3step.toFixed(2);


//no evento do onblur para que nao apareça 'undefined'
//eu faço a seguinte condição
//se a soma for diferente de undefined ele mostra no valor total



}