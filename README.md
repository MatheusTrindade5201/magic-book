# Magic Book

Esse é um projeto temático de Harry Potter desenvolvido com React.js Styled-components, que teve como objetivo exercitar o uso da biblioteca de estilos.
  
- [x] Visualizar lista de personagens.
- [x] Mudar de páginas com diferentes filtros.
- [x] Pesquisar um personagem em especifico.
- [x] Trocar o tema da página.
- [x] Responsivo 


  - Link do Site: https://magic-book.vercel.app/ 

## Preview do produto final

![Captura de tela 2022-10-26 205514](https://user-images.githubusercontent.com/104238483/198160286-3feead42-d86d-4a3b-af8a-02812a1dd77a.png)

![Captura de tela 2022-10-26 205545](https://user-images.githubusercontent.com/104238483/198160296-8034d15c-365c-47c9-9814-f8fc021b1053.png)



## Detalhes do projeto: 

#### O projeto foi desenvolvido com react-router-dom para a roteirização das páginas

```
const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Students />} path='/students' />
            <Route element={<Staff />} path='/staff' />
            <Route element={<SpellBook />} path='/spell-book' />
        </Routes>
    )
}
```

#### Para a estilização, foi utilizado o style-components

##### Estilo global:

```
const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${props => props.theme.settings.bg__image});
        background-size:  100vw 100vh;
        background-repeat: no-repeat;
        background-attachment: fixed
    }

`

export default GlobalStyle
```

### Troca de tema

Ainda com o styled-components, foi feito a troca de temas da pagina de forma dinamica

##### dark:

```
export default {
    title: 'dark',
    settings: {
        bg__image: require('../../image/hogwarts-b.jpg'),
        bg__color: 'rgb(217,217,217,.55)',
        text: '#fff',
        title__color: 'rgb(0, 0, 0,.6)',
        spell_card: 'rgb(0, 0, 0,.8)'
    }
}
```

##### light:

```
export default {
    title: 'light',
    settings: {
        bg__image: require('../../image/hogwarts-b-light.jpg'),
        bg__color: 'rgb(0,0,0,.55)',
        text: '#fff',
        title__color: '#fff',
        spell_card: 'rgb(255, 228, 179,.3)'
    }
}
```

#### Lógica de troca de tema:


```
function App() {

  const [theme, setTheme] = useState(light);
  const [themeName, setThemeName] = useState('Nox')
  const [menu, setMenu] = useState('')
  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
        menuMobile={menu} 
        themeName={themeName}
        toggleTheme={()=> {
          setTheme(theme.title == 'light' ? dark : light);
          setThemeName(themeName == 'Nox' ? 'Lumos' : 'Nox')
        }}
        menuOpener={() => setMenu(menu == '' ? 'activated ':'') }/>
        <AppRouter />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
```
Nos trecho acima podemos ver um useState sendo usado para controlar o tema atual, passando para todas as páginas através do componente do styled-components ```<ThemeProvider/>```, e sendo trocado através de um botão com a lógica atribuida na propriedade toggleTheme do Header.




#### Desenvolvimento 

Caso queira fazer o clone do repositório, por favor usar o comando abaixo para download das dependencias:
```
npm intall
```

Será necessário criar suas proprias chaves para o firebase para configuração.

