<template>
    <div v-if="crews.length" class="crew-container">

        <div class="crew">
            <div class="crew-content">
                <h2> {{ crews[currrentIndex].role.toUpperCase() }} </h2>
                <h1> {{ crews[currrentIndex].name.toUpperCase() }} </h1>
                <p> {{ crews[currrentIndex].bio }} </p>
            </div>

            <div>
                <img :src="crews[currrentIndex].images.png" alt="crew-image" />
            </div>
        </div>


        <div class="buttons">
            <button v-for="(crew, index) in crews" :key="crew.id" @click="changeCrew(index)"
                :class="{ active: currrentIndex === index }">
            </button>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            crews: [],
            currrentIndex: 0,
        };
    },

    mounted() {
        fetch("http://localhost:3000/crew")
            .then((response) => response.json())
            .then((data) => (this.crews = data))
            .catch((error) => console.log(error.message));
    },

    methods: {
        changeCrew(index) {
            this.currrentIndex = index;
        },
    },

};
</script>

<style scoped>
.crew-container {
    background-image: url(/src/assets/crew/background-crew-desktop.jpg);
    color: white;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}

.crew {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 100px;
    gap: 100px;
    width: 80%;
}

.crew img {
    width: 85%;
    height: 85%;
    margin: 120px 480px 0 0;
}

.crew-content {
    margin-left: 110px;
}

.crew-content h1 {
    font-size: 4rem;
    font-weight: 350;
    margin: 15px 0 15px 0;
}

.crew-content p {
    width: 90%;
}

.crew-content h2 {
    color: darkgray;
    font-weight: lighter;
}

.buttons {
    display: flex;
    justify-content: right;
    position: fixed;
    bottom: 50px;
    left: 199px;
}

button {
    margin: 0 10px;
    background-color: #444;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    padding: 6px;
}

button:hover {
    background-color: #555;
}

button.active {
    background-color: #fff;
    font-weight: bold;
}
</style>