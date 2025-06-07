# 🚌 ONH - Ônibus na Hora

**ONH** (Ônibus na Hora) é um aplicativo open source, gratuito e focado na **experiência do usuário mobile**, que permite visualizar de forma simples, acessível e em tempo real os horários e linhas de ônibus disponíveis.

> 🚧 Projeto em fase inicial. Atualmente utilizando dados mockados para desenvolvimento.

<br/>

## 📱 Preview
- Em breve

<br/>

## 🚀 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) com App Router
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker Compose](https://docs.docker.com/compose/)
- Arquitetura: Clean Architecture + DDD moderno

<br/>

## 🧱 Estrutura de pastas

```
📦 src
├── dominio/          # Entidades e contratos de domínio
├── aplicacao/        # Casos de uso
├── infraestrutura/   # Repositórios (Prisma, serviços, banco)
├── interfaces/       # Páginas, rotas, componentes
├── compartilhado/    # Utilitários, temas, validações
└── estilos/          # Tailwind, temas globais
````

<br/>

## Funcionalidades

### ✅ Implementadas

- [ ] Criar usuários
- [ ] Listar todos os usuários
- [ ] Buscar usuário por ID

### 🔜 Próximas

- [ ] Visualizar linhas de ônibus
- [ ] Ver previsão em tempo real
- [ ] Salvar rotas favoritas
- [ ] Integração com APIs públicas de transporte

<br/>

## 🐳 Rodando com Docker

```bash
docker-compose up --build
````

Acesse em `http://localhost:3000`.

<br/>

## 🧪 Rodando localmente (sem Docker)

```bash
# Instale as dependências
npm install

# Configure o banco
npx prisma generate
npx prisma migrate dev

# Rode o projeto
npm run dev
```

<br/>

## 💻 Contribuindo

Contribuições são muito bem-vindas! Sinta-se livre para abrir issues, enviar PRs ou sugerir melhorias. Leia nosso [CONTRIBUTING.md](CONTRIBUTING.md) para começar.

<br/>

## 💰 Apoie este projeto

Se este projeto te ajuda ou te inspira, considere apoiar financeiramente:

☕ [Apoie no Ko-fi](https://ko-fi.com/onibusnahora)

<br/>

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br/>

## 👩‍💻 Desenvolvido por

Vitor Valente([@onibusnahora](https://github.com/onibusnahora)) com ❤️ e TypeScript.
