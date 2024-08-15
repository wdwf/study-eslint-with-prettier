# Study eslint with prettier

## 🚀 Objetivo

O objetivo principal deste projeto foi entender o que é eslint e prettier e como eles interagem entre si.

## 📖 Relato

Tive dificuldades de instalar o eslint pois como houve uma atualização no mesmo ele passou de json para ecma o que diferencia um pouco a formatação no arquivo de configuração e a integração com o prettier.

A configuração entre as duas libs foi feita usando a lib [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) que desativa algumas regras que podem entrar em conflito quando essas ferramentas são utilizadas. Foi visto que para ela funcionar era necessário definir o uso do import "eslintConfigPrettier" sempre ao final do arquivo do eslint

Se fez necessário instalar as extensões de ambas as libs (eslint e prettier) e criar também o arquivo `.prettierrc` para que fosse definido as regras de estilização do prettier.

# ✍ Notas

## [Eslint](https://eslint.org/)

- Ferramenta de analise estática para identificação e correção de problemas em código Javascript (Typescript tbm).
- Aplica regra no código da aplicação sendo uma melhor pratica seguida por times de dev.
  - Exemplo de regra: Uso obrigatório de `;` ao final do código.
- Responsável por encontrar problemas na aplicação em questão de sintaxe.

### Instalação

❗ _(pode mudar com o tempo)_

```
npm install -D eslint
npx eslint --init

- Verificação -> npx eslint [file.js]
- Auto Correção -> npx eslint --fix .
```

## [Prettier](https://prettier.io/docs/en/integrating-with-linters.html)

- É um formatador de código opinativo.
- Garante estilo consistente seguindo regras pre-definidas

### Instalação

❗ _(pode mudar com o tempo)_

```
npm install --save-dev eslint-config-prettier

- No arquivo do eslint import:
import eslintConfigPrettier from "eslint-config-prettier";

- Ao final do arquivo do eslint add:
export default [
  ...,
  eslintConfigPrettier,
];

- Crie o aquivo .prettierrc na raiz e defina:
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  ...
}
```

---

👨‍💻 Desenvolvido com muita garra por [Weslley Ferreira de Moraes](https://www.linkedin.com/in/weslleyferreira/).
