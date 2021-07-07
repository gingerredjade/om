<template>
  <ul class="menu-nav">
    <router-link
      to="/bs"
      v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> {{ $t('BUS_MENU.BIG_SCREEN') }} </span>
        </a>
      </li>
    </router-link>

    <!--<router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text"> {{ $t('MENU.DASHBOARD') }} </span>
        </a>
      </li>
    </router-link>-->

    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/monitor') }">
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> {{$t('BUS_MENU.HEALTH_MONITORING.TITLE')}} </span>
      </a>
      <div class="menu-submenu menu-submenu-fixed">
        <div class="menu-subnav megamenu" style="max-width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text">
                  {{$t('BUS_MENU.HEALTH_MONITORING.LABEL')}}
                </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/monitor/hardware"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.HEALTH_MONITORING.SUB.HARDWARE_RESOURCE_MONITORING')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/monitor/service"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.HEALTH_MONITORING.SUB.SERVICE_CLUSTER_MONITORING')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/monitor/storage"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.HEALTH_MONITORING.SUB.STORAGE_CLUSTER_MONITORING')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/monitor/deal"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.HEALTH_MONITORING.SUB.DEAL_CLUSTER_MONITORING')}}
                      </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/dr') }">
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> {{$t('BUS_MENU.DATA_RESOURCE_MONITORING.TITLE')}} </span>
      </a>
      <div class="menu-submenu menu-submenu-fixed">
        <div class="menu-subnav megamenu" style="max-width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text">
                  {{$t('BUS_MENU.DATA_RESOURCE_MONITORING.LABEL')}}
                </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/dr/overview"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.DATA_RESOURCE_MONITORING.SUB.OVERVIEW')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/dr/search"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.DATA_RESOURCE_MONITORING.SUB.DATA_RESOURCE_QUERY')}}
                      </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>

    <router-link
      to="/scm"
      v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]">
        <a :href="href" class="menu-link" @click="navigate">
          <span class="menu-text">
            {{$t('BUS_MENU.SYSTEM_CONFIGURATION_MANAGEMENT')}}
          </span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/sys') }">
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.TITLE')}} </span>
      </a>
      <div class="menu-submenu menu-submenu-fixed">
        <div class="menu-subnav megamenu" style="max-width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text">
                  {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.LABEL')}}
                </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/sys/user"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.USER_MANAGEMENT')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/sys/dept"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.DEPT_MANAGEMENT')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/sys/role"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.ROLE_MANAGEMENT')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/sys/menu"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.MENU_MANAGEMENT')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/sys/authority"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.AUTHORITY_MANAGEMENT')}}
                      </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/log') }">
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.TITLE')}} </span>
      </a>
      <div class="menu-submenu menu-submenu-fixed">
        <div class="menu-subnav megamenu" style="max-width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text">
                  {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.LABEL')}}
                </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/log/collection"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.SUB.LOG_COLLECTION_CONFIGURATION')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/log/query"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.SUB.LOG_QUERY_BROWSING')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/log/stat"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.SUB.LOG_STATISTICAL_ANALYSIS')}}
                      </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="click"
      class="menu-item menu-item-submenu menu-item-open-dropdown"
      v-bind:class="{ 'menu-item-active': hasActiveChildren('/test') }">
      <a href="#" class="menu-link menu-toggle">
        <span class="menu-text"> 测试 </span>
      </a>
      <div class="menu-submenu menu-submenu-fixed">
        <div class="menu-subnav megamenu" style="max-width: 1000px;">
          <ul class="menu-content">
            <li class="menu-item">
              <h3 class="menu-heading menu-toggle">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text">
                  测试
                </span>
                <i class="menu-arrow"></i>
              </h3>
              <ul class="menu-inner">
                <router-link
                  to="/dashboard"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text"> {{ $t('MENU.DASHBOARD') }} </span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/test/lm1"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_1')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/lm2"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_2')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/lm3"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_3')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/lm4"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_4')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/lm5"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_5')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/lm6"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_6')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/canvas1"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_7')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/canvas2"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        {{$t('BUS_MENU.LARGE_MONITOR.TITLE_8')}}
                      </span>
                    </a>
                  </li>
                </router-link>
                <router-link
                  to="/test/dict"
                  v-slot="{ href, navigate, isActive, isExactActive }">
                  <li
                    aria-haspopup="true"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active'
                    ]">
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot"><span></span></i>
                      <span class="menu-text">
                        REST测试
                      </span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  },
};
</script>
