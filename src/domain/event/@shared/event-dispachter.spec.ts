import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("Domain Events tests", () => {
  it("Should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHadler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductEventCreated", eventHadler);

    expect(eventDispatcher.getEventHandlers["ProductEventCreated"]).toBeDefined();
    expect(eventDispatcher.getEventHandlers["ProductEventCreated"].length).toBe(1);
    expect(eventDispatcher.getEventHandlers["ProductEventCreated"][0]).toMatchObject(eventHadler);

  });

  it("Should unregister an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHadler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHadler);
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHadler);

    eventDispatcher.unregister("ProductCreatedEvent", eventHadler);

    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
  });

  it("Should unregister all event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHadler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHadler);
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHadler);

    eventDispatcher.unregisterAll();

    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeUndefined();
  });

  it("Should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("ProductCreatedEvent", eventHandler);
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

    const productCreatedEvent = new ProductCreatedEvent({
      name: "Product 1",
      description: "Description product",
      price: 50
    });

    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});