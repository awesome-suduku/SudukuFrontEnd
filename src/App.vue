<!--
 * @Description: main
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-04-07 20:45:54
 * @LastEditors: lax
 * @LastEditTime: 2021-04-21 13:50:03
 -->
<template>
	<div id="app">
		<editor></editor>
	</div>
</template>

<script>
import editor from "@/views/editor.vue";
export default {
	name: "home",
	components: {
		editor,
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	height: 100%;
}
</style>
