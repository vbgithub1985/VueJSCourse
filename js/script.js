const { createApp, ref } = Vue;
        createApp({
            setup(){
                const name = ref('Francis');

                function update(){
                    setTimeout(()=>{
                        name.value = 'Steve';
                    },2000)
                }

                return {
                    name,
                    update
                }
            }
        }).mount('#app')