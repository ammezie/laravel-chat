<template>
    <span>
        <li class="left clearfix">
            <div class="chat-body clearfix">
                <div class="header">
                    <strong class="primary-font">
                        {{ message.user.name }}
                    </strong>
                </div>
                <p>
                    {{ message.message }}
                </p>
            </div>
        </li>
    </span>
</template>

<script>
export default {
  props: ['message', 'authUserID']
};
</script>