new Vue({
  el: '#app',
  // data is not reactive
  data: {
    title: 'Hello World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    x: 0,
    y: 0,
    name: 'Joe'
  },
  methods: {
    changeTitle: function(event) {
      // this calls the data object
      this.title = event.target.value;
    },
    // sayHello: function() {
    //   this.title = 'Hello!';
    //   return this.title;
    // },
    increase1: function(step) {
      this.counter1 += step;
    },
    increase2: function(event) {
      this.counter2 += event;
    },
    // increase4: function() {
    //   this.counter4++;
    //   this.result4 = this.counter4 > 5 ? 'Greater 5' : 'Smaller 5';
    // },
    // decrease4: function() {
    //   this.counter4--;
    //   this.result4 = this.counter4 > 5 ? 'Greater 5' : 'Smaller 5';
    // },
    result4() {
      return this.counter4 > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    // dummy: function(event) {
    //   // To make sure that this does not propagate up to elements holding this element, you can use:
    //   event.stopPropagation();
    //   // ...but you can also use v-on:mousemove.stop in the span, and remove the function altogether.
    // }
    alertMe: function() {
      alert('Hi!');
    }
  }
});
