<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#"><img :src=logo></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"  v-for="(item,index) in items" :key="index">
          <a  v-if="item.descr=='Home'"  class="nav-link" href="/">Inicio <span class="sr-only">(current)</span></a>
          <a  v-else :href="item.link" class="nav-link">{{ item.descr }}</a> 
        </li>
      </ul>               
    </div>
  </div>
</nav>
</template>

<script setup>
import { ref, reactive } from 'vue';

const logo = ref("https://placehold.co/132x40")

// Correção na definição de `ref` e na estruturação do array de objetos
const items = reactive([
    {
        link: "/",
        descr: "Home", 
    },
    {
        link: "/teste",
        descr: "Rota teste",
    },
    {
        link: "/curso/cadastrar",
        descr: "Cadastrar curso",
    }
]);
</script>