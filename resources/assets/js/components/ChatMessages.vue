<template>
    <ul class="chat">
        <message v-for="message in messages" :message="message"></message>
    </ul>
</template>

<script>
export default {
  props: ['messages']
};
</script>