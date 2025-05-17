<template>
    <div>
        
        <h1>Este é um componente</h1>
        <p>{{ titulo }}</p>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const titulo = ref("Rota teste")
</script>