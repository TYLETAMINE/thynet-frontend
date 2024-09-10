<template src="./index.html"></template>
<style lang="scss" src="./style.scss"></style>

<script>
window.addEventListener('DOMContentLoaded', function () {
    const addPostButton = this.document.getElementById('addPostButton')

    addPostButton.addEventListener('click', function () {
        const newPostTextarea = document.getElementById('newPostTextarea')
        newPostTextarea.focus()
    })
})
</script>