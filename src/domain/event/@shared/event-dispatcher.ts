import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler.interface";
import eventHandlerInterface from "./event-handler.interface";
import eventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers;
  }

  register(eventName: string, eventHandle: eventHandlerInterface<eventInterface>): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandle);
  }

  unregister(eventName: string, eventHandle: eventHandlerInterface<eventInterface>): void {
    const index = this.eventHandlers[eventName].indexOf(eventHandle);
    if (index !== -1) {
      this.eventHandlers[eventName].splice(index, 1);
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {};
  }

  notify(event: eventInterface): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach(eventHandler => {
        eventHandler.handle(event);
      });
    }
  }
}