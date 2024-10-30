<template>
    <div class="space-container">
        <div class="space-content">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>Lets face it; if you want to go the space, you might as well genuienly go to outer space and not hover kind of on the edge of it. Well sit back, and relax becaue we'll give you a truly out of this world experience! </p>
        </div>
        <div>
            <router-link to="/destination" class="buttons">EXPLORE</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.space-container {
    background: url(/src/assets/home/background-home-desktop.jpg);
    color: white;
    display: flex;
    width: 100vw;
    height: 100vh;
}

.space-content {
    width: 35%;
    margin: 15% 100px 0 220px;
}

.space-content h1 {
    font-size: 6rem;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: .5rem;
    margin: 12px 0 12px 0;
}

.space-content h5 {
    font-weight: lighter;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: darkgrey;
}

.space-content p {
    color: darkgray;
    width: 94%;
}

.buttons {
    width: 200px;   
    height: 200px;  
    border: none;  
    border-radius: 50%; 
    margin: 250px 0 0 110px;  
    font-size: 25px;  
    display: flex; 
    align-items: center;
    justify-content: center;  
    cursor: pointer; 
    background-color: white;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
    animation: blink infinite 2.0s;
}

.buttons:hover {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.1)
}

@keyframes blink{
    0%{
        background-color: white;
    }
    100%{
        background-color: transparent;
    }
}


</style>