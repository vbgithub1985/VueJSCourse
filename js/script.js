const { createApp, ref } = Vue;
        createApp({
            setup(){
                


                const name = ref('Viktor');
                const coord = ref({x:0,y:0});
                function updateName(newName,event){
                    console.log(event)
                    name.value = newName;
                }

                function handleForm(event){
                    //event.preventDefault();
                    console.log('form submitted');
                }

                return {
                    name,
                    updateName,
                    coord,
                    handleForm
                }
            }
        }).mount('#app')