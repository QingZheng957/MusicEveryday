<template>
  <div id="app" class="container-flex box-ver">
    <!-- 引入welcome组件-->
    <welcome @afterLeave="toSongs"></welcome>
    <form id="form-app" @submit.prevent="handleSearch()">
      <div class="container-flex">
        <div class="f1">
          <mt-field v-model="value" placeholder="输入歌曲名或歌手名"></mt-field>
        </div>
        <div style="margin-left: 20px" v-tap="{ methods: handleSearch }">
          <mt-button type="primary">搜索</mt-button>
        </div>
      </div>
      <div class="my-badges">
        <transition-group name="list">
          <mt-badge
            type="primary"
            size="large"
            v-for="word of searchWordArr"
            :key="word"
          >
            <span @click="handleWord(word)">{{ word }}</span>
          </mt-badge>
        </transition-group>
      </div>
    </form>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
import Welcome from "./components/Welcome";
import { Toast } from "mint-ui";
export default {
  name: "app",
  data: function () {
    return {
      value: "",
      searchWordArr: this.$store.state.searchWordArr,
    };
  },
  components: {
    Welcome,
  },
  methods: {
    handleSearch() {
      console.log("click:" + this.value);
      if (this.value == "") {
        Toast({
          message: "搜索关键字不可为空",
          position: "bottom",
          duration: 5000,
        });
        return;
      }
      if (!this.$store.state.showWelcome) {
        this.toSongs();
      } else {
        this.$store.commit("hideWelcome");
      }
    },
    handleWord(word) {
      this.value = word;
      this.handleSearch();
    },
    toSongs() {
      if (this.value == "") {
        return;
      }
      console.log("run toSongs");
      this.$router.push({ path: "/songs/" + this.value });
      this.$store.commit("addSearchWord", { value: this.value });
    },
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #6ecc9e;
  height: 100vh;
}
a {
  text-decoration: none;
}
.mint-cell {
  border-radius: 0.4em;
}
.container-flex {
  display: flex;
  /* position:relative; */
  margin: 2px 4px;
}
.f1 {
  position: relative;
  flex: 1;
}
.box-ver {
  flex-direction: column;
}
.my-badges {
  margin: 0.4em 0 0.8em 0;
  overflow: hidden;
}
.mint-badge {
  margin: 0.1em 0.2em;
}
.mint-cell-title {
  min-width: 6em;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
@media (min-width: 1024px) {
  #app {
    width: 480px;
    min-height: 800px;
    padding: 10px;
    border: 1px solid #030303;
    border-radius: 0.3em;
    margin: 0 auto;
  }
}
</style>
