<template>
  <transition name="slide-up" v-on:after-leave="afterLeave">
    <div v-show="show" class="welcome neonText">
      <h1>{{ msg }}</h1>
      <h2>好听的音乐尽在此处，感谢你的选择</h2>
    </div>
  </transition>
</template>
<script>
export default {
  name: "welcome",
  computed: {
    show() {
      return this.$store.state.showWelcome;
    },
  },
  data() {
    return {
      msg: "天天音乐",
    };
  },
  methods: {
    afterLeave() {
      this.$emit("afterLeave");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  text-align: center;
  height: 15em;
  overflow: hidden;
  line-height: 2em;
}
h1 {
  margin-top: 30px;
  color: #533bff;
  text-shadow: 0 2px 0 #12cc20, 0 3px 0 #c9c9c9, 0 4px 0 #bb5453,
    0 5px 0 #b9b9b9, 0 6px 0 #aaa, 0 7px 2px rgba(0, 0, 0, 0.1),
    0 0 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3),
    0 4px 5px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.25);
}
.neonText h2 {
  color: #4789ff;
}
.slide-up-enter-active {
  transition: all 0.5s ease;
}
.slide-up-leave-active {
  transition: all 0.8s ease;
}
.slide-up-enter,
.slide-up-leave-active {
  transform: scale(0, 0);
}
</style>
