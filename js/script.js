const { createApp, ref } = Vue;
        createApp({
            setup(){
                const names = ref(['Helen','Viktor','Kyryl']);
                const cars = ref([
                    {brand:'Ferrari',color:'red'},
                    {brand:'Mercedes',color:'black'},
                    {brand:'hyundai',color:'Violet'}
                ]);
                const user = {
                    name:'Fransis',
                    lastname:'Jones',
                    age:22
                }


                return {
                    names,
                    cars,
                    user
                }
            }
        }).mount('#app')