

function contador(){
	var total=0;
	document.getElementById('total').innerHTML = 140 - document.form.texto.value.length;
	var tamanho = (document.form.texto.value.length);
	var botao = document.getElementById("bot");

	if(tamanho>0){
		botao.setAttribute("class","botaodois");
	}else{
		botao.setAttribute("class","botao");
	}
	if(tamanho > 140){
		document.getElementById('total').setAttribute("class", "contDois");
	}else{
		document.getElementById('total').setAttribute("class", "contUm");
	} 
}
