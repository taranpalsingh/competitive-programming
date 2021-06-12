const EventEmitter = require('events');
const StockList = require('./stock-list.json');

class Processor extends EventEmitter {

  constructor() {
    super();
    this.stock = StockList;
  }

  placeOrder(data) {
    this.emit('PROCESSING_STARTED', data.orderNumber);
    const items = data.lineItems;
    if(items && items.length>0) {
      for(let item of items) {
        const {itemId, quantity} = item;
        const itemNotAvailable = this.validateItemStock(itemId, quantity);
        if(itemNotAvailable) {
          console.log("itemNotAvailable");
          this.emit('PROCESSING_FAILED', {
            orderNumber: data.orderNumber,
            reason: 'INSUFFICIENT_STOCK',
            itemId: itemId,
          })
          return;
        }
      }
      this.emit('PROCESSING_SUCCESS', data.orderNumber);
    } else {
      this.emit('PROCESSING_FAILED', {
        orderNumber: data.orderNumber,
        reason: 'LINEITEMS_EMPTY',
      })
    }
  }

  validateItemStock(itemId, quantity) {
    const stock = this.stock.find(item => {item.id === itemId && item.stock >= quantity});
    if(!stock) {
      console.log({ itemId, quantity });
      console.log("stock not available");
      return ({ itemId, quantity });
    }
    return 0;
  }
}

module.exports = Processor;