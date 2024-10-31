<template>
    
    <div v-if="technologys.length" class="technology-container">

        <div class="technology">
            <!-- button for toggling the images -->
            <div class="buttons">
                <button v-for="(technology, index) in technologys" :key="technology.id" @click="changeTechnology(index)"
                    :class="{ active: currentIndex === index }">
                    {{ index + 1 }}
                </button>
            </div>

            <div>
                <H5>03 SPACE LAUNCH 101</H5>
                <h3>THE TERMINOLOGY..</h3>
                <h1> {{ technologys[currentIndex].name.toUpperCase() }} </h1>
                <p> {{ technologys[currentIndex].description }} </p>
            </div>

            <img class="mt-5" :src="technologys[currentIndex].images.portrait" alt="technology-image" />
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            technologys: [],
            currentIndex: 0,
        };
    },

    mounted() {
        fetch("http://localhost:3000/technology")
            .then((response) => response.json())
            .then((data) => (this.technologys = data))
            .catch((error) => console.log(error.message));
    },

    methods: {
        // change to the destination 
        changeTechnology(index) {
            this.currentIndex = index;
        },
    },

};
</script>

<style scoped>
/*.technology-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 5rem;

}
*/

.technology-container {
    background-image: url(/images/technology/background-technology-desktop.jpg);
    color: white;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.technology {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
    width: 80%;
    position: relative;
}

.buttons {
    display: flex;
    flex-direction: column;
    justify-content: right;
    gap: 30px;
}

button {
    margin: 0 10px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    font-size: 14px;
    height: 50px;
    width:50px;
    border: 1px solid darkgray; 
    background: none;

}



button:hover {
    background-color: #fff;
    color: black;
}

button.active {
    background-color: #fff;
    color: #000;
    font-weight: bold;
}

@media screen and (min-width:320px) and (max-width: 480px) {
    .technology-container {
        background: url(/images/technology/background-technology-mobile.jpg);
        height: 100%;
    }
    .technology{
        flex-direction: column;
        position: relative;

    }
     .buttons{
        position: absolute;
        bottom: -40%;
        flex-direction: row;
     }
    
}
</style>