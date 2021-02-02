Vue.component('slide-show', {
  props: ['slide-interval', 'slide-sourse'],
  data: function () {
    return {
      index: 0,
      forTimer: null,
    }
  },
  template: '<img v-bind:src="src" v-on:click="next">',
  mounted: function () {
    this.timeSlide();
  },
  methods: {
    next: function () {
      //проверка на конец массива
      this.index = (this.slideSourse.length > this.index + 1) ? this.index + 1 : 0;
    },
    //автослайд
    timeSlide: function () {
      this.forTimer = setInterval(this.next, this.slideInterval);
    },
  },
  computed: {
    src: function () {
      return this.slideSourse[this.index];
    }
  }
})

var app = new Vue({
  el: '#app',
})

