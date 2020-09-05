<template>
  <div>
    <button v-on:click="increase">
      Click me
    </button>
    <p>{{counter}}</p>
  </div>

<!--  v-on:mousemove-->
<!--  <div>-->
<!--    <button v-on:click="increase">Click me</button>-->
<!--    <p v-on:mousemove="updateCoordinates"> Coordinates: {{ x }} / {{ y }}</p>-->
<!--  </div>-->

<!--  Modifieng events >-->

<!--  <div>-->
<!--    <p v-on:mousemove="updateCoordinates">-->
<!--      Coordinates: {{ x }} / {{ y }}-->
<!--      - <span v-on:mousemove.stop>DEAD SPOT</span>-->
<!--    </p>-->
<!--    <input type="text" v-on:keyup.enter.space="alert">-->
<!--  </div>-->

<!--  Only for read-->
<!--  Writting js code in templates -->
<!--  Show increase  <button v-on:click="increase++">Click me</button>-->
<!--  String interpolation {{ counter * 2 }}-->
<!--  Ternar operation {{ counter * 2 > 10 ? 'Greater than 10': 'Smaller than 10'}}-->
</template>

<script>

export default {
  name: 'Events',

  data() {
    return {
      counter: 0,
    }
  },

  methods: {
    increase() {
      this.counter++;
    },

    updateCoordinates(event) {
      console.log(event);
      this.x = event.clientX;
      this.y = event.clientY;
    },

    alert() {
      alert('Alert!!!!');
    }
  }
}
</script>

<style>
</style>