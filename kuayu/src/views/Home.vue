<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  mounted(){
    document.cookie="name=haibin"
    document.cookie="age=18"
    document.domain = 'localhost'
    console.log(document.domain);
    console.log(document.cookie);
  }
}
</script>
