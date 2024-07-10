async function enviarScript(scriptText){
    console.clear();
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	var enviadas = 0;
	var quantidade = lines.length;

	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		enviadas++;
		console.info('['+enviadas+'/'+quantidade+'] '+line);
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Hoje vai ser uma festa
Bolo e guaraná
Muito doce pra você

É o seu aniversário
Vamos festejar
E os amigos receber

Mil felicidades
E amor no coração
Que a sua vida seja
Sempre doce e emoção

Bate, bate palma
Que é hora de cantar
Agora todos juntos
Vamos lá!

Parabéns, parabéns!
Hoje é o seu dia
Que dia mais feliz

Parabéns, parabéns!
Cante novamente
Que a gente pede bis

É big, é big
É big, é big, é big
É hora, é hora
É hora, é hora, é hora
Rá-tim-bum!

Hoje vai ser uma festa
Bolo e guaraná
Muito doce pra você

É o seu aniversário
Vamos festejar
E os amigos receber

Mil felicidades
E amor no coração
Que a sua vida seja
Sempre doce e emoção

Bate, bate palma
Que é hora de cantar
Agora todos juntos
Vamos lá!

Parabéns, parabéns!
Hoje é o seu dia
Que dia mais feliz

Parabéns, parabéns!
Cante novamente
Que a gente pede bis

Parabéns, parabéns!
Hoje é o seu dia
Que dia mais feliz

Parabéns, parabéns!
Cante novamente
Que a gente pede bis

Parabéns, parabéns!
Hoje é o seu dia
Que dia mais feliz

Parabéns, parabéns!
Cante novamente
Que a gente pede bis
`).then(e => console.info(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
