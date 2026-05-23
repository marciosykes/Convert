# Conversor de Moedas

Um projeto web simples e elegante para converter moedas estrangeiras (Dólar Americano, Euro e Libra Esterlina) para o Real Brasileiro (BRL).

## 🚀 Funcionalidades

* **Conversão de Moedas:** Converte valores de USD (Dólar), EUR (Euro) e GBP (Libra) para BRL.
* **Validação de Dados:** O campo de entrada de valor utiliza expressões regulares para aceitar apenas números, prevenindo erros de digitação.
* **Formatação Automática:** Os resultados são formatados automaticamente com as casas decimais corretas e o símbolo da moeda.
* **Interface Dinâmica:** O painel de resultados surge de forma dinâmica apenas após a submissão do formulário com sucesso.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página web.
* **CSS3:** Estilização da interface com um tema escuro (Dark Mode), utilizando Flexbox para o alinhamento.
* **JavaScript (Vanilla):** Lógica de cálculo, manipulação de eventos do DOM (`addEventListener`, `onsubmit`) e tratamento de erros (`try/catch`).

## 📁 Estrutura de Ficheiros

* `index.html`: Ficheiro principal contendo a estrutura da página.
* `styles.css`: Ficheiro de estilos para a aparência da aplicação.
* `script.js`: O motor por detrás da conversão, contendo as taxas de câmbio (estáticas para fins de demonstração) e a lógica.
* `img/`: Diretório que contém os recursos visuais, como o logótipo, ícones e a imagem de fundo.

## 💻 Como Executar o Projeto

1. Clone o repositório para a sua máquina local ou descarregue o código-fonte.
2. Navegue até à pasta do projeto.
3. Abra o ficheiro `index.html` no seu navegador web (browser) preferido.
4. Insira um valor numérico, selecione a moeda que pretende converter e clique em "Converter em reais".

---
*Projeto desenvolvido para fins de estudo e aprimoramento das bases de desenvolvimento web frontend.*