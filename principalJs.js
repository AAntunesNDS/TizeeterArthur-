

function contador(){
	var total=0;
	document.getElementById('total').innerHTML = 140 - document.form.texto.value.length;
	var tamanho = (document.form.texto.value.length);
	var botao = document.getElementById("bot");

	if(tamanho>0 && tamanho<=140){
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



function selectext(){
	/*
	var msgError = "Desculpe, a quantidade de caracteres não é permitida. Reduza.";
	var msgError2 = "Você deve escrever uma texto de até 140 caracteres.";
	var msgEnviada = "Sua mensagem está sendo enviada.";
	*/
	var textarea = document.getElementById('texto');
	var tamanho = (document.form.texto.value.length);
	var botao = document.getElementById("bot");
	if(tamanho>140){
		//textarea.value = msgError;
		//textarea.style.fontSize= "32pt";
		//textarea.setAttribute("class", "tex2");
		botao.disabled = true;
	}else if(tamanho <1){
		//textarea.style.fontSize= "32pt";
		//textarea.value = msgError2;
		//textarea.setAttribute("class", "tex3");
		botao.disabled = true;
	}else{
		botao.disabled = false;
		//textarea.style.fontSize= "32pt";
		/*textarea.value = msgEnviada;
		textarea.setAttribute("class", "tex4");
		*/
	}
}
