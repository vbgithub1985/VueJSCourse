const { createApp } = Vue;
        createApp({
            setup(){
                const message = () => "Message from function";


                return {
                    message
                }
            },
            methods:{
                welcome(){
                    return "Hello guys";
                }
            }
        }).mount('#app')