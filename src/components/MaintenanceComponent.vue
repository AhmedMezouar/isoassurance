<template>
    <div>
        <section>
            <img src="Maintenance.png" />
            <h2>Site en maintenance</h2>
            <p>
                On sera de retour dans 10 jours on fait des amélioration sur le site
            </p>
        </section>
    </div>
</template>

<style  scoped>
.whatsapp_float{
    display: none !important;
}
body {
    font-family: "Teko", sans-serif;
    background-color: #f2f2f2;
    margin: 0px;
}

section {
    text-align: center;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h2,
p {
    color: #3867d6;
    margin: 0px;
}

h2 {
    font-size: 62px;
    padding-top: 20px;
}

p {
    font-size: 40px;
    padding-bottom: 20px;
}


img {
    max-width: 100%;
}

a {
    background: #3867d6;
    border-radius: 4px;
    outline: none;
    border: 0px;
    color: #fff;
    font-size: 34px;
    cursor: pointer;
    text-decoration: none;
    padding: 5px 25px;
}

a:hover {
    background-color: #1d56de;
}

@media (max-width: 625px) {
    h2 {
        font-size: 50px;
    }

    p {
        font-size: 30px;
    }
}

@media (max-width: 492px) {
    h2 {
        font-size: 30px;
    }

    a {
        font-size: 25px;
    }

    p {
        font-size: 25px;
        line-height: 26px;
    }
}
</style>

<script>
export default {
    name: 'MaintenanceComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>