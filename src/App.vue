<template>
    <RouterView />
</template>

<style lang="scss">
@font-face {
    font-family: Montserrat;
    src: url(assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf);
}

:root {
    --body__background: rgb(250, 250, 250);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Montserrat;

    body {
        background-color: var(--body__background);

        .wrapper {
            padding: 15px;
            display: grid;
            grid-gap: 15px;
            grid-template-columns: 21.5% auto;
        }
    }
}
</style>