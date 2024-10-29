# SorteadordeNumeros
Este projeto é uma aplicação web simples que permite ao usuário sortear uma lista de números aleatórios dentro de um intervalo especificado. Ele foi desenvolvido usando HTML, CSS e JavaScript.

Estrutura do Projeto
index.html: Estrutura HTML da página principal.
style.css: Arquivo de estilos para o layout e formatação da página.
app.js: Arquivo JavaScript que contém a lógica para sortear números e gerenciar a interface.
img/: Pasta que armazena as imagens usadas na interface.
Funcionalidades
Entrada de Dados
O usuário pode inserir a quantidade de números a serem sorteados, o intervalo de números (de um número mínimo a um número máximo).
Sorteio de Números
O botão "Sortear" inicia o sorteio, selecionando números aleatórios e exibindo-os sem duplicações.
Reiniciar
O botão "Reiniciar" limpa os campos de entrada e reseta o resultado.
Arquivos Principais
# 1. index.html
Contém a estrutura da interface do usuário. É dividido em seções:

Título e Descrição: Título da aplicação e instruções.
Campos de Entrada: Três campos de entrada para o usuário definir quantidade e intervalo de números.
Botões: Dois botões, um para "Sortear" e outro para "Reiniciar".
Resultado: Mostra o resultado dos números sorteados.
# 2. app.js
Contém a lógica principal da aplicação:

sortear(): Gera a quantidade de números aleatórios definida pelo usuário, garantindo que não haja números duplicados.
obterNumeroAleatorio(): Função auxiliar para gerar um número aleatório entre o mínimo e o máximo definidos.
alterrarStatusBotao(): Alterna o status dos botões (habilitar/desabilitar) conforme necessário.
reiniciar(): Reseta o formulário e o campo de resultado.
# 3. style.css
Define o estilo e layout da aplicação:

Estilos de Fundo e Texto: Configura gradiente de fundo, cores de texto e fontes importadas.
Formatação de Contêiner: Define os estilos para o contêiner principal e elementos internos.
Estilos de Botões: Inclui diferentes estilos para botões habilitados e desabilitados.
Como Usar
Clone ou faça o download deste repositório.
Abra o arquivo index.html em um navegador.
Preencha os campos de entrada:
Defina a quantidade de números a serem sorteados.
Defina o intervalo dos números com valores mínimos e máximos.
Clique em "Sortear" para ver os números sorteados.
Clique em "Reiniciar" para limpar os valores e começar novamente.
Tecnologias Utilizadas
HTML5: Estruturação do layout.
CSS3: Estilização visual da interface.
JavaScript: Lógica de sorteio e manipulação de DOM.
Créditos
Imagens armazenadas na pasta img e fontes importadas do Google Fonts.

# Licença
Este projeto foi guiado pela Alura.

# Here is the link of deployment if you would like to try: https://sorteadordenumerospriscila.netlify.app

https://github.com/user-attachments/assets/ed7c52c2-5543-4a91-91aa-7cd613833c16



