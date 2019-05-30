<template>
  <div>
    <div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
    }
  },
  methods:{

  }
};
</script>

<style>
html{
  height: 100%;
}
body {
      font: 400 15px/1.8 Lato, sans-serif;
    color: #0D0D0D;
    background-color: #F2F2F2
}
ul.nav-bar-cont.nav.nav-tabs{
      padding: 3px 10px;
        margin-bottom: 4rem;
}
.nav-tabs a{
  color: #0D0D0D;
}

.tab-content:focus{
outline: 0;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #0D0D0D;
    background: none;
    background-color: transparent ;
    border-color: transparent;
    border:0;
}
.nav-tabs .nav-link{
  background: transparent;
}
.nav-tabs{
  font-size: 1.2rem;
}
.router-link-exact-active{
  color:#BF9C8F;
}
</style>
