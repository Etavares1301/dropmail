<h1>Dropmail - Criar Emails Temporários</h1>

<h2>Desafio Proposto pela Empresa Coodesh para vaga Desenvolvedor Frontend Angular</h2>

<h2> Sobre o Projeto</h2>
<p>Dropmail é uma aplicação frontend desenvolvida em angular.</p>
<p>A aplicação consiste em uma caixa de email temporário (duração de 10 minutos) utilizando a Api pública do Dropmail.me, onde pode ser feito um email temporário, receber emails e visualizar as mensagens recebidas .</p>

<h2>Pré-requisito:</h2>
<ul>
    <li>Angluar cli versão 14</li>
    <li>Node versão 16</li>
    <li>npm / yarn</li>
</ul>

<h2>Técnolias utilizadas:</h2>
<ul>
    <li>HTML5</li>
    <li>CSS</li>
    <li>SCSS</li>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>Angular</li>
    <li>Bootstrap</li>
</ul>

<h2> Como execultar o programa:</h2>
<ol>
    <li>Clonar o repositório</li>
    <li>Abrir o Terminal na pasta do projeto</li>
    <li>Execultar o comando 'npm i ' para instação</li>
</ol>

<h2> Como rodar o projeto</h2>
<ol>
    <li>No Terminal da pasta do projeto execulte o comando 'ng serve'</li>
    <li>Abra o Browser</li>
    <li>Navegue para http://localhost:4200/inbox.</li>
</ol>

<h2>Ultilizando o programa:</h2>
<p>Na pagina principal do programa temos uma barra de navegação com um botão "Copiar" que ao clicar será gravado na sua área de transferência, assim podendo colar na onde achar necessário(usar as teclas "Ctrl" + "V" ou clicar com o botão direito do mouse e seguir até a opção colar), um span onde aparece o email gerado, um boão para Gerar email temporário e uma imagem demonstrando que não há emails recebidos</p>
<p>Ao clicar no botão "Criar Email Temporário", será  criado um email e sua caixa de entrada </p>

![image](https://github.com/Etavares1301/singers-search/assets/53662188/93316b52-0e5f-4141-8a63-ed670935aa08)

<p>O programa faz uma verificaçao a cada 15 segundos  e ao receber um email aparecerá um caixa um sino para ativar as notificações e uma caixa com o remetente, assunto do email e botão para dowload</p>

![image](https://github.com/Etavares1301/singers-search/assets/53662188/b340a09a-fc8f-4ddd-912f-673733c4d085)


<p>Ao clicar na caixa abrirá a mensagem destinada a você e um botão para voltar a sua caixa de entrada</p>

![image](https://github.com/Etavares1301/singers-search/assets/53662188/bc87ea59-7e55-464c-a1f3-aa41b368411b)

<p>Ao clicar no sino de notificação aparecerá uma caixa mostrando quantos email há na sua caixa de entrada</p>

![image](https://github.com/Etavares1301/singers-search/assets/53662188/ec3c1d04-42f0-4de5-8183-c0ca7880a8e0)

<p>O seu email tem duração de apenas 10 minutos, nesse tempo ele ficará salvo no localstorage do seu navegador e após esse tempo seu localstorage será limpo e todos os emails recebidos serão apagados do navegador</p>

<h2>Autor</h2>
<p>Eduardo Tavares Bellomo</p>
https://www.linkedin.com/in/eduardotbellomo