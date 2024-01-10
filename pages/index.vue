<template>
    <div class="content">
        <h1>S/Y BODIL</h1>
        <p>To get an overview over S/Y Bodil's electrical system I've created the diagram below.</p>

        <v-network-graph :nodes="data.nodes" :edges="data.edges" :layouts="data.layouts" :configs="data.configs">
            <template #edge-label="{ edge, ...slotProps }">
                <!-- <v-edge-label :text="edge.length + ' cm, ' + edge.size + ' mm²'" align="center" vertical-align="above" v-bind="slotProps" v-if="edge.color === 'black'" /> -->
            </template>
        </v-network-graph>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import * as vNG from "v-network-graph";
import data from "../data/graph-data.ts";
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Roboto:wght@400;700&display=swap');

:root {
    --textColor: #333;
	--buttonShadowColor: rgba(36,54,56,0.25);

	--gutter: 12px;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
	font-size: 62.5%;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
body {
	color: var(--textColor);
	font-family: 'Roboto', sans-serif;
	font-size: 1.6rem;
	line-height: 1.5em;
}

h1 {
	font-family: 'Montserrat', sans-serif;
	font-size: 3.6rem;
	font-weight: 700;
	line-height: 1em;
	margin-bottom: 3.2rem;
	margin-top: 3.2rem;
	text-transform: uppercase;
}
h2 {
	font-family: 'Montserrat', sans-serif;
	font-size: 2.4rem;
	font-weight: 700;
	line-height: 1em;
	margin-bottom: 3.2rem;
	margin-top: 3.2rem;
}
p {
	margin-bottom: 2em;
	margin-top: 2em;
}

hr {
	border: 1px solid var(--textColor);
	margin-bottom: 6em;
	margin-top: 6em;
}

kbd {
	border: 1px solid var(--textColor);
    border-radius: 2px;
	box-shadow: 0 2px 0 2px var(--buttonShadowColor);
	display: inline-block;
	font-size: 75%;
	margin: calc(var(--gutter) / 4);
	min-width: calc(var(--gutter) * 2);
	padding: 0 calc(var(--gutter) / 2);
	text-align: center;
}

.content {
	margin: 2em auto;
	max-width: 480px;
}
@media all and (min-width: 840px) {
	.content {
		max-width: 720px;
	}
}
</style>
