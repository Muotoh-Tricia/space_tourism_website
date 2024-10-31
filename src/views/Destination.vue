<template>
    <div v-if="destinations.length" class="destination-container">
        <!-- Buttons for each destination above the content -->
        <div class="buttons">
            <button v-for="(destination, index) in destinations" :key="destination.id" @click="changeDestination(index)"
                :class="{ active: currentIndex === index }">
                {{ destination.name }}
            </button>
        </div>

        <!-- Display the current destination based on the selected index -->

        <div class="destination">
            <div>
                <img :src="destinations[currentIndex].images.png">
            </div>
            <div>
                <h2>{{ destinations[currentIndex].name.toUpperCase() }}</h2>
                <p id="destination-description">{{ destinations[currentIndex].description }}</p>
                <hr/>

                <div class="d-flex est-distance">
                    <span>
                        <p>AVG. DISTANCE</p>
                        <h3>{{ destinations[currentIndex].distance }}</h3>
                    </span>
                    <span>
                        <p>EST. TRAVEL TIME</p>
                        <h3>{{ destinations[currentIndex].travel }}</h3> 
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            destinations: [],
            currentIndex: 0, // Track the current destination index
        };
    },

    mounted() {
        fetch("http://localhost:3000/destinations")
            .then((response) => response.json())
            .then((data) => (this.destinations = data))
            .catch((error) => console.log(error.message));
    },

    methods: {
        // Change to the destination that corresponds to the button clicked
        changeDestination(index) {
            this.currentIndex = index;
        },
    },
};
</script>

<style scoped>
.destination-container {
    background-image: url(/images/destination/background-destination-desktop.jpg);
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.destination {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 100px;
    width: 80%;
    position: relative;
}

.destination h2 {
    font-size: 4rem;
}

.destination #destination-description {
    width: 70%;
    margin: 40px 0 40px 0;
    color: darkgray;
}

.destination hr {
    width: 70%;
    margin-bottom: 30px;
}

.destination img {
    margin-right: 150px;
}

.est-distance {
    gap: 90px;
}

.est-distance p {
    font-size: 12px;
    margin-bottom: 2px;
}

.buttons {
    display: flex;
    justify-content: right;
    margin: 30px 0 0 350px;
}

button {
    margin: 0 10px;
    background-color: #444;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

button.active {
    background-color: #666;
    font-weight: bold;
}
</style>