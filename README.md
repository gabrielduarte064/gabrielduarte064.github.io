# Portfolio - Gabriel Azambuja Duarte

Site pessoal simples, feito para ficar no ar gratuitamente pelo GitHub Pages,
mostrando os projetos publicos no GitHub.

## Arquivos

```
portfolio_gabriel/
├── index.html    conteudo da pagina (texto, secoes, projetos)
├── style.css     aparencia (cores, layout, responsividade)
├── script.js     abre e fecha o menu no celular
└── README.md     este arquivo
```

Nao precisa de nenhuma instalacao, servidor ou linguagem de programacao para
rodar. E so um site estatico: HTML, CSS e um pouco de JavaScript.

## Como publicar no GitHub Pages

### Passo 1 - criar o repositorio com o nome certo

O GitHub Pages tem uma regra especial: se o repositorio se chamar exatamente

```
gabrielduarte064.github.io
```

o site fica no ar automaticamente em `https://gabrielduarte064.github.io`,
sem nenhuma configuracao extra.

No GitHub:
1. Clique em **New repository**.
2. Em **Repository name**, digite exatamente `gabrielduarte064.github.io`
   (trocando pelo seu usuario, se for diferente).
3. Deixe como **Public**.
4. Nao marque nenhuma opcao de adicionar README ou licenca.
5. Clique em **Create repository**.

### Passo 2 - subir os 3 arquivos

Pelo VS Code (do jeito que voce ja fez em outros projetos):
1. Extraia este ZIP em uma pasta no seu computador.
2. Abra essa pasta no VS Code (**File → Open Folder**).
3. Va em **Source Control**, clique em **Initialize Repository** se pedir.
4. Coloque os arquivos em **Staged Changes** (botao "+").
5. Escreva uma mensagem tipo `primeira versao do site` e clique em **Commit**.
6. Clique em **Publish Branch** e escolha o repositorio
   `gabrielduarte064.github.io` que voce acabou de criar.

### Passo 3 - ativar o GitHub Pages

1. No repositorio, va em **Settings**.
2. No menu lateral, clique em **Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Em **Branch**, escolha **main** e a pasta **/ (root)**.
5. Clique em **Save**.

Em alguns minutos, o site fica disponivel em:

```
https://gabrielduarte064.github.io
```

## Como adicionar ou trocar um projeto

Abra o `index.html` e procure por um bloco assim, dentro da secao
`id="projetos"`:

```html
<div class="cartao-projeto">
  <div class="categoria">Categoria do projeto</div>
  <h3>Nome do projeto</h3>
  <p>Descricao curta do que o projeto faz.</p>
  <div class="tags">
    <span>Tecnologia 1</span>
    <span>Tecnologia 2</span>
  </div>
  <div class="links-projeto">
    <a href="LINK_DO_REPOSITORIO_AQUI" target="_blank" rel="noopener">Ver codigo</a>
  </div>
</div>
```

Copie um bloco inteiro (de `<div class="cartao-projeto">` ate o `</div>`
correspondente), cole logo abaixo do ultimo projeto, e troque o titulo, a
descricao e o link. Nao precisa mexer no `style.css` para isso: o layout se
ajusta sozinho, mesmo com mais cards.

## Links que precisam ser conferidos e ajustados

O arquivo `index.html` ja aponta para nomes de repositorio sugeridos. Antes
de publicar, confirme se os nomes dos seus repositorios no GitHub sao
exatamente esses, ou ajuste os links:

| Projeto | Link usado no site |
|---|---|
| Painel Gremio 2026 | `github.com/gabrielduarte064/gremio-2026` |
| Seu Dinheiro Hoje | `github.com/gabrielduarte064/seu-dinheiro-hoje` |
| Pipeline de Dados - Banco Central | `github.com/gabrielduarte064/pipeline-dados-bcb` |

Se voce ainda nao criou esses repositorios, e so subir cada projeto (aqueles
ZIPs que ja foram gerados) em um repositorio novo com o nome correspondente.

Tambem atualize o link do **LinkedIn**, que esta como placeholder
(`https://www.linkedin.com/`) — troque pelo link do seu perfil real.

## Colocando o link no LinkedIn

Depois que o site estiver no ar, na secao **Destaques (Featured)** do seu
perfil do LinkedIn, adicione o link `https://gabrielduarte064.github.io` com
um titulo tipo "Portfolio de Projetos de Dados e Automacao".
