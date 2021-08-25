# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [main - v0.0.1]

Primeira versão estável.
- AgentBody
- Sem promessas

## [main - v0.2] - 2021-06-30

- Suporte a promessas
- @Deprecated callback
- Edição ao vivo HTML/CSS
- Edição assistida por agentes do lado do cliente
- Edição assistida por agentes do lado do servidor

Problemas:
- Brain não tá assíncrono.
- Requisições demoram cada vez mais. Porque não fecha conexão com o banco? Porque não tá mantendo os agentes no servidor?

## [main - v0.3] - 2021-08-24

- BREAKING CHANGE hearAnswer -> hear
- BREAKING CHANGE Tirado callback. Agora somente promessas:
    - Brain. 
    - Mind
- Fix problema da conexão
- Add sessões
- Add FileBrain
- Conhecimento LEA em arquivos no ./live
