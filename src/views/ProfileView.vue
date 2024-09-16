<template>
    <div class="wrapper">
        <MainSidebar profileActive="active" />
        <div class="profile_page">
            <MainProfile />
            <ProfileConnect />
        </div>
    </div>
</template>

<script>
import MainSidebar from '@/components/Sidebar/MainSidebar.vue';
import MainProfile from '@/components/Profile/MainProfile.vue';

import ProfileConnect from '@/components/Profile/Connections/ProfileConnect.vue';

export default ({
    components: {
        MainSidebar,
        MainProfile,
        ProfileConnect,
    }
})
</script>

<style lang="scss">
.profile_page {
    width: 100%;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 60% auto;
}
</style>