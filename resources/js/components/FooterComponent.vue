<template>
    <footer class="footer fixed-bottom">
        <div>&copy; {{ anoAtual }}</div>
    </footer>
</template>

<script setup>

import {ref} from 'vue'

const anoAtual = ref('')

const dt = new Date()
anoAtual.value = dt.getFullYear().toString()

</script>