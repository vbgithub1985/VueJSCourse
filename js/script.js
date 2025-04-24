const { createApp, ref } = Vue;
        createApp({
            setup(){
                
                const name = ref('Viktor');
                const coord = ref({x:0,y:0});
                function updateName(){
                    
                    if (name.value == 'Helen')
                        name.value = 'Viktor'
                    else if (name.value == 'Viktor')
                        name.value = 'Helen';
                }

                function getCoord(event){
                    coord.value.x = event.clientX;
                    coord.value.y = event.clientY;
                }

                return {
                    name,
                    updateName,
                    coord,
                    getCoord
                }
            }
        }).mount('#app')