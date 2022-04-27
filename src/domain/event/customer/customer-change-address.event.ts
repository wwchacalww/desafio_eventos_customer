import EventInterface from "../@shared/event.interface";
interface ICustomerEvent {
  id: string;
  name: string;
  street: string;
  number: number;
  zip: string;
  city: string;
}
export default class CustomerChangeAddressEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: ICustomerEvent;

  constructor(eventData: any) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }

}