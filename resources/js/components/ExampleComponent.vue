x<template>

    <ul class="">
        <li class="list-group-item" v-for="(e,index) in equipe">
            <membro-component :nome=e />
        </li>
    </ul>

</template>

<script setup>

import {ref} from 'vue';

const equipe = ref(['Igor','Leonardo', 'Matheus']);
    
</script>
