/* A queue is a simple data structure that allows elements to be inserted from one end, called the rear (also called tail),
 and deleted from the other end, called the front (also called head). */

/*Applications :
 - Whenever we need to manage objects in order starting with the first one in
 - Scenarios include printing, call center systems... 
 */

 function Queue(){
     this.data = [];

     Queue.prototype.add = function(record) {
        this.data.unshift(record);
      }
      Queue.prototype.remove = function() {
        this.data.pop();
      }
      Queue.prototype.first = function() {
        return this.data[0];
      }
      Queue.prototype.last = function() {
        return this.data[this.data.length - 1];
      }
      Queue.prototype.size = function() {
        return this.data.length;
      }
 }

 const a = new Queue();
 a.add(1);
 a.add(2);
 console.log(a);
 a.remove();
 console.log(a);