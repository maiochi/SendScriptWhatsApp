async function enviarScript(scriptText){
    console.clear();
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	var enviadas = 0;
	var quantidade = lines.length;
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
    COLOQUE O TEXTO AQUI
`).then(e => console.info(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
