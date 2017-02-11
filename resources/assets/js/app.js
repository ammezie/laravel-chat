
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('chat-messages', require('./components/ChatMessages.vue'));
Vue.component('chat-form', require('./components/ChatForm.vue'));

const app = new Vue({
    el: '#app',
    data: {
        messages: [
            {
                message: 'Hey!',
                user: 'John Doe'
            },
            {
                message: 'Hello!',
                user: 'Jane Doe'
            }
        ]
    },
    created: {
        this.fetchMessages;
    }
    methods: {
        addMessage(message) {
            this.messages.push(message);
            // persist to database
        },
        fetchMessages() {
            axios.get('/messages')
                .then(response => {
                    this.messages = response;
                })
                .catch();
        }
    }
});
