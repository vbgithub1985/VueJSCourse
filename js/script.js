const { createApp, ref } = Vue;
        createApp({
            setup(){
                const user = ref({
                    name:'Alex',
                    age: 20,
                    allowedAge:18
                })

                function checkUser(){
                    return user.name==='Viktor' ? true:false
                }

                

                return {
                    user,
                    checkUser
                }
            }
        }).mount('#app')