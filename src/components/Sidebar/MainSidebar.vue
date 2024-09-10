<template>
    <div class="sidebar__nav">
        <div class="sidebar__logo">
            <p>Thynet</p>
        </div>

        <div class="horizont-line">
            <hr class="line">
        </div>

        <ul class="nav__list nav__list_items">
            <li class="list__item profile__item inactive" :class="$attrs.profileActive">
                <router-link to="/profile" class="router-link">
                    <div class="profile__icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 
                            1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 
                            2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 
                            3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                        </svg>
                    </div>

                    <div class="profile__title title">
                        <p>Profile</p>
                    </div>
                </router-link>
            </li>

            <li class="list__item friends__item inactive" :class="$attrs.friendsActive">
                <router-link to="friends" class="router-link">
                    <div class="friends__icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 
                            1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 
                            13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 
                            3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                    </div>

                    <div class="friends__title title">
                        <p>Friends</p>
                    </div>
                </router-link>
            </li>

            <li class="list__item messages__item inactive">
                <router-link to="messages" class="router-link">
                    <div class="messages__icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon">
                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 
                            1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 
                            3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                        </svg>
                    </div>

                    <div class="messages__title title">
                        <p>Messages</p>
                    </div>
                </router-link>
            </li>

            <p class="list__acc-settings">Account pages</p>

            <li class="list__item menu__item inactive">
                <router-link to="/" class="router-link">
                    <div class="menu__icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 
                            0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 
                            0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>

                    <div class="menu__title title">
                        <p>Menu</p>
                    </div>
                </router-link>
            </li>

            <li class="list__item settings__item inactive">
                <router-link to="/" class="router-link">
                    <div class="settings__icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="svg-icon">
                            <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 
                            1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 
                            1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 
                            1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 
                            1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 
                            1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 
                            1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 
                            1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 
                            1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 
                            .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 
                            1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 
                            1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 
                            1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                        </svg>
                    </div>

                    <div class="settings__title title">
                        <p>Settings</p>
                    </div>
                </router-link>
            </li>
        </ul>

        <div class="horizont-line">
            <hr class="line">
        </div>

        <div class="nav__recent-messages">
            <div class="recent-messages__title">
                <p>Messages</p>
            </div>

            <ul class="recent-messages__list">
                <li class="list__first-item item">
                    <router-link to="/" class="router-link">
                        <div class="first-item__icon item__icon">
                            <div class="status online"></div>
                        </div>

                        <div class="first-item__title item__title">
                            <p>Lina Bortnikova</p>
                        </div>

                        <div class="first-item__counter item__counter">
                            <p>9+</p>
                        </div>
                    </router-link>
                </li>

                <li class="list__second-item item">
                    <router-link to="/" class="router-link">
                        <div class="second-item__icon item__icon">
                            <div class="status offline"></div>
                        </div>

                        <div class="second-item__title item__title">
                            <p>Vera Selezneva</p>
                        </div>

                        <div class="second-item__counter item__counter">
                            <p>3</p>
                        </div>
                    </router-link>
                </li>

                <li class="list__third-item item">
                    <router-link to="/" class="router-link">
                        <div class="third-item__icon item__icon"></div>

                        <div class="third-item__title item__title">
                            <p>Favorites</p>
                        </div>

                        <!-- <div class="first-item__counter item__counter"></div> -->
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style src="./style.scss" lang="scss"></style>