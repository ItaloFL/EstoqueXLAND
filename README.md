# 🔎 Indice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Ferramentas](#-ferramentas)
- [Developer](#-developer)

---

# 🎉 Preview in the Web

https://user-images.githubusercontent.com/83084631/196461890-1b4e5ae1-edb2-496a-9f92-f7bec9596350.mp4

---

# 📜 Sobre o projeto

Desafio feito pela XLAND de um controle de Estoque.

---

## 🛠 Ferramentas

- [React]()
- [TailwindCSS]()
- [Nodejs]()
- [Prisma]()

---

## Configuração Backend


```bash

  ##Primeiro a configuração do container docker para o banco prisma
  cd server

  ##Baixar dependencias
  yarn ou npm install

  ##Rode esse comando no seu terminal
  docker run -d --name seunomeBanco -e POSTGRES_PASSWORD=suasenhaBanco -p 5432:5432 postgres

  ##crie um .env, onde estão SENHADOBANCO e NOMEDOBANCO escreva oque foi colocado acima
  DATABASE_URL="postgresql://postgres:SENHADOBANCO@localhost:5432/NOMEDOBANCO?schema=public"

  ##Rodar as migrations
  yarn prisma migrate dev

  #Rodar o backend e o seed de Usuarios
  yarn seed && yarn dev
 

```

## Configuração FrontEnd


```bash

  cd web

  #Instalação das dependencias
  yarn ou npm install

  yarn dev
 

```

## Developer

Ítalo Ferreira Lopes

- 💻 - [Github](https://github.com/ItaloFL)
- 📒 - [Linkedin](https://www.linkedin.com/in/italo-ferreira-dev/)

Feito com 💜
