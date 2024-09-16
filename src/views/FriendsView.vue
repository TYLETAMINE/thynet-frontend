<template>
    <div class="wrapper">
        <MainSidebar friendsActive="active" />
        <MainFriends />
    </div>
</template>

<script>
import MainSidebar from '@/components/Sidebar/MainSidebar.vue';
import MainFriends from '@/components/Friends/MainFriends.vue';

export default ({
    components: {
        MainSidebar,
        MainFriends,
    }
})
</script>