<template>
  <div class="hello">
	  <b-carousel
	  	id="carousel-1"
		v-model="slide"
		:interval="400"
		controls
		indicators
		background="#ababab"
		img-width="1024"
		img-height="480"
		style="text-shadow: 1px 1px 2px #333"
		@sliding-start="onSlideStart"
		@sliding-end="onSlideEnd"
	  >
	  	<b-carousel-slide
			caption="first slide"
			text="Nulla"
			img-src="https://picsum.photos/1024/480/?image=52"
		></b-carousel-slide>

		<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
			<h1>你好，Richard Lau</h1>
		</b-carousel-slide>

		<b-carousel-side img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-side>

	  </b-carousel>
	<p>我是BootStrap的Carousel</p>
	<p>我的相关文档是 <b-link href="https://bootstrap-vue.js.org/docs">这里</b-link></p>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Login',
  data () {
    return {
	  slide: 0,
	  sliding: null
    }
  },
  methods: {
	  onSlideStart(side) {
		  this.sliding = true;
	  },
	  onSlideEnd(slide) {
		  this.sliding = false;
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
