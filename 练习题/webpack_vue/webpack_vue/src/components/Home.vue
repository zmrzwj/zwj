<template id="contact">
  <div>
    <h1>Home</h1>
    <p>This is the tutorial about Contact.</p>
    <div class="">
      <div class="row">
        <router-link to="/home/home01/2345"><div class="col-xs-3 col-sm-3  col-md-3 col-lg-3 col">one</div></router-link>
        <div class="col-xs-3 col-sm-3  col-md-3 col-lg-3 col"><router-link to="/home/home02">two</router-link></div>
        <div class="col-xs-3 col-sm-3  col-md-3 col-lg-3 col"><router-link to="/home/home03">three</router-link></div>
        <div class="col-xs-3 col-sm-3  col-md-3 col-lg-3 col"><router-link to="/home/home04">four</router-link></div>
      </div>
      <div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    '/hello': 'Hello'
  }
</script>

<style>
  .col{
    border-bottom: 2px solid #1b6d85;
  }

  .col:hover{
    background: #1b6d85;
    color: white;
  }

  .fade-enter-active,.fade-leave-active{
      transition:opacity 0.3s ease;
  }

  .fade-in,.fade-leave-active{
    opacity: 0;
  }

</style>
