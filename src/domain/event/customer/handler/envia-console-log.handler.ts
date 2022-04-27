import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerChangeAddressEvent from "../customer-change-address.event";


export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<CustomerChangeAddressEvent>{
  handle(event: CustomerChangeAddressEvent): void {
    const { id, name, street, number, zip, city } = event.eventData;
    console.log(`Endereço do cliente: ${id}, ${name} foi alterado para: ${street} número ${number} - cidade: ${city} - CEP: ${zip}`);
  }

}