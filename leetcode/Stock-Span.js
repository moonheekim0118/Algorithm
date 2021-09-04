
var StockSpanner = function() {
    this.stock = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span  = 0;
    this.stock.push(price);
    this.stock.forEach((num)=>{
        if(num <= price) span ++;
        else span = 0;
    })
    
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */