<template>
  <div>
		<header>
			<h1> {{msg}} </h1>
      <router-link to='/' exact> HomePage </router-link>
      <router-link to='/orders' exact> Orders </router-link>
      <router-link to ='/dashboard' exact> Dashboard </router-link>
		</header>
  </div>
</template>

<script>
export default {
	data(){
		return{
			msg : " Tangs Kitchen "
		}
	}
}
</script>

<style scoped>
header{
	background:rgb(106, 61, 211);
  border-style: solid;
  border-color:black;
  border-width: 2px;
  height: 120px;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
h1{
  color:white
}

a{
    color:black;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

.router-link-active{
    background: #eee;
    color: #444;
}
</style>