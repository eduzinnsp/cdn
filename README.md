# Projeto de CDN com TypeScript e MongoDB

Este projeto é uma implementação de uma Content Delivery Network (CDN) utilizando TypeScript para o backend e MongoDB como banco de dados.

## Visão Geral

A CDN é um serviço essencial para fornecer conteúdo estático, como imagens, vídeos e arquivos JavaScript, de forma rápida e eficiente para usuários finais em todo o mundo. Este projeto visa fornecer uma solução escalável e de alto desempenho para atender a essa demanda.

## Funcionalidades Principais

- **Armazenamento de Conteúdo Estático**: Os arquivos estáticos são armazenados e servidos a partir do MongoDB, garantindo alta disponibilidade e desempenho.
- **Segurança**: Implementa medidas de segurança para proteger contra ameaças como DDoS e injeção de código malicioso.
- **API Restful**: Oferece uma API RESTful para gerenciamento de conteúdo, permitindo adicionar e excluir arquivos de forma programática.

## Pré-requisitos

- [Node.js ](https://nodejs.org/) | Versão: >= 18
- [MongoDB ](https://mongodb.com/)
- [Git Cli ](https://git-scm.com/downloads)
  
## Instalação e Uso

1. Clone este repositório:

```bash
git clone https://github.com/eduzinnsp/cdn.git

cd cdn && npm install
```

2. Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:

```text
MONGODB="URL DA SUA MONGODB"
```

3. Inicie o servidor:
```bash
nodemon src/server.ts
```

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request com melhorias ou correções.

## Licença
Este projeto está licenciado sob a Licença MIT.

# Créditos
Desenvolvido com ❤ por Edu.
