# DDD: Modelagem Tática e Patterns
## Curso Full Cycle 3.0 - Eventos de Customer

### Desafio
Nesse desafio você deverá:  

[  ] Implementar dois Eventos de Domínio para o agregado de Customer.<br />
[ X ] O primeiro evento deverá acontecer quando um novo Customer é criado. Nesse ponto, crie 2 handlers exibindo um "console.log". <br />
[ X ] Handler1: EnviaConsoleLog1Handler. Mensagem: "Esse é o primeiro console.log do evento: CustomerCreated".<br />
[ X ] Handler2: EnviaConsoleLog2Handler. Mensagem: "Esse é o segundo console.log do evento: CustomerCreated".<br />
[  ] O segundo evento deverá ser disparado quando o endereço do Customer é trocado (método changeAddress()). Nesse caso, o ID, Nome, bem como os dados do endereço devem ser passados ao evento.<br />
[  ] Handler: EnviaConsoleLogHandler. Mensagem: "Endereço do cliente: {id}, {nome} alterado para: {endereco}".<br />
[  ] Todos os testes devem ser realizados para garantir o bom funcionamento dos eventos.<br />

### Solução
- Primeiro começo criando o evento /src/domain/event/customer/customer-created.event.ts
- Crio os handlers na pasta /src/domain/event/customer/handler
- Implemento os eventos no teste