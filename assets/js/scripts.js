// Função para verificar o tamanho da tela e adicionar/remover classes
function verificarTamanhoTela() {
	const elemento = document.querySelector('.main-nav');
	const botaoLogin = document.querySelector('.botoes');

	if (!elemento) {
		console.error('Elemento com classe "main-nav" não encontrado.');
		return;
	}

	// Verifica se o elemento .botoes existe
	if (!botaoLogin) {
		console.error('Elemento com classe "botoes" não encontrado.');
		return;
	}

	if (window.innerWidth < 1025) {
		elemento.classList.add('ocultar');
	} else {
		elemento.classList.remove('ocultar');
	}

	if (window.innerWidth < 768) {
		botaoLogin.classList.add('ocultar');
	} else {
		botaoLogin.classList.remove('ocultar');
	}
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', verificarTamanhoTela);
// Executa ao redimensionar a janela
window.addEventListener('resize', verificarTamanhoTela);
