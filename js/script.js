const { createApp } = Vue;
        createApp({
            setup(){
                const date = new Date().toLocaleString();
                const grettings = 'Hello guys, today is ' +  date;
                const isTrue = true;
                const array = ['Francis','Jane'];
                const obj = {car:'Ferrari'}


                return {
                    grettings,
                    isTrue,
                    array,
                    obj
                }
            }
        }).mount('#app')