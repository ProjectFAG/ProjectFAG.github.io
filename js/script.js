// Recupera o estado do dark mode do localStorage ao carregar a página
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
const icon = document.getElementById('icon');

// Aplica o estado inicial ao carregar a página
document.body.classList.toggle('dark-mode', isDarkModeEnabled);

// Atualiza o ícone com base no estado inicial
if (isDarkModeEnabled) {
    icon.src = 'imagens/sol.png';
} else {
    icon.src = 'imagens/lua.png';
}

// Função para alternar o dark mode
icon.onclick = function () {
    // Alterna a classe dark-mode no corpo do documento
    document.body.classList.toggle('dark-mode');

    // Atualiza o estado do dark mode no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        icon.src = 'imagens/sol.png';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        icon.src = 'imagens/lua.png';
    }
};


// Aqui começa a Ancora//
function scrollToElement(elementSelector, instance = 0) {
    //Selecione todos os elementos que correspondem ao seletor fornecido//
    const elements = document.querySelectorAll(elementSelector);
    //Verifique se existem elementos correspondentes ao seletor e se a instância solicitada existe//
    if(elements.length > instance) {
        //Role até a instância especificada do elemento//
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");

//coloca o id no link do menu//

link1.addEventListener('click', () => {
    scrollToElement('.tag-sobre');
});// chama a class e vai ate ela//

// Fim ancora //



//Box do rating//
var btn = document.querySelectorAll(".btn");// Seleciona todos os elementos com a classe "btn" (botões de estrelas)//
var emoji = document.getElementById("emoji");// Seleciona o elemento com o ID "emoji"//
var ratingValue = 0;// Variável para armazenar o valor da avaliação//

// Adiciona um ouvinte de eventos a cada botão de estrela//
Array.from(btn).forEach((e, index) => {
    e.addEventListener("click", () => {
        
        ratingValue = index + 1; // Atualiza a variável de valor da avaliação com base no índice do botão clicado//

        // Atualiza a cor das estrelas com base no valor da avaliação//
        for (var j = 0; j < btn.length; j++) {
            btn[j].style.color = j < ratingValue ? "#ffc83d" : "white";
        }

        
        switch (index) {// Atualiza o emoji com base no índice clicado//
            case 0:
                emoji.innerHTML = "&#128550";//Emoji desapontado//  
                break;
            case 1:
                emoji.innerHTML = "&#128543";//Emoji chateado// 
                break;
            case 2:
                emoji.innerHTML = "&#128528";//Emoji sem reação//
                break;
            case 3:
                emoji.innerHTML = "&#128578";//Emoji feliz//
                break;
            case 4:
                emoji.innerHTML = "&#128512";//Emoji super feliz//
                break;
        }
    });
});
