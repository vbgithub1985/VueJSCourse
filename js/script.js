const { createApp, ref, reactive } = Vue;
        createApp({
            setup()
            {
                //let user = ref({
                let user = reactive({
                    name:'Viktor',
                    occupation:'DEV',
                    age:39
                });

                function UpdateAge(){
                    setTimeout(()=>{
                        user.age = 40;//reactive
                        //user.value.age = 40;//ref
                    },3000)
                    

                }


                return {
                    UpdateAge,user
                }
            }
        }).mount('#app')