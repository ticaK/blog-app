<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add">Add</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>

  li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    font-weight: bold;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(226, 222, 222);
  }

  li a:hover {
    background-color: #111;
    color:rgb(201, 76, 31);
    text-decoration: none;

  }
</style>