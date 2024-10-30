<template>
    <div>
        <!-- Nav-bar -->
        <header>
            <nav class="navbar navbar-expand-lg my-0 fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="/src/assets/shared/logo.svg" alt="logo"> 
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="d-flex gap-5 navbar-nav">
                            <li class="nav-item">
                                <router-link to="/">00 HOME</router-link>
                            </li>
    
                            <li class="nav-item">
                                <router-link to="/Destination">01 DESTINATION</router-link>
                            </li>
    
                            <li class="nav-item">
                                <router-link to="/Crew">02 CREW</router-link>
                            </li>
    
                            <li class="nav-item  me-5">
                                <router-link to="/Technology">03 TECHNOLOGY</router-link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </header>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

nav {
    padding: 0;
    justify-content: space-evenly;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

nav a {
    text-decoration: none;
    color: lightgray;
    font-size: 16px;
}

nav a:hover {
    border-bottom: red;
}

.navbar-toggler {
    background-color: white;
}

.fixed-top {  
    position: fixed;  
    top: 2%;     
}  

img {
    margin-left: 3rem;
}

.navbar-nav{
    margin-left: 50rem;
    height: 3rem;
    align-items: center;
    background: rgb(7, 2, 21);
}
</style>