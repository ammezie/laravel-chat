<template>
    <ul class="chat">
        <li class="left clearfix" v-for="message in messages">
            <div class="chat-body clearfix">
                <div class="header">
                    <strong class="primary-font">
                        {{ message.user }}
                    </strong>
                    <small class="pull-right text-muted">
                        <span class="glyphicon glyphicon-time"></span>12 mins ago
                    </small>
                </div>
                <p>
                    {{ message.message }}
                </p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  props: ['messages']
};
</script>