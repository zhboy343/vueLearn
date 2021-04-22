<template>
     <div>
        <h4>{{message}}</h4>
        <div class="ddd">dddddddd</div>
    </div>
</template>

<script>
export default {
    name: "cpp",
    data() {
        return {
            message: '子组件3'
        }
    }
}
</script>

<style scoped>
    .ddd {
        color: white;
        border: 2px;
    }
</style>