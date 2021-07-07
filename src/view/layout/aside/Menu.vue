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
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-dashboard"></i>
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
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-dashboard"></i>
          <span class="menu-text">首页</span>
        </a>
      </li>
    </router-link>-->

    <li class="menu-section">
      <h4 class="menu-text">业务功能</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('monitor') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-line-graph"></i>
        <span class="menu-text">{{$t('BUS_MENU.HEALTH_MONITORING.TITLE')}}</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">{{$t('BUS_MENU.HEALTH_MONITORING.TITLE')}}</span>
            </span>
          </li>

          <router-link
            to="/monitor/hardware"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.HEALTH_MONITORING.SUB.HARDWARE_RESOURCE_MONITORING')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/monitor/service"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.HEALTH_MONITORING.SUB.SERVICE_CLUSTER_MONITORING')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/monitor/storage"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.HEALTH_MONITORING.SUB.STORAGE_CLUSTER_MONITORING')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/monitor/deal"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.HEALTH_MONITORING.SUB.DEAL_CLUSTER_MONITORING')}}
                </span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('dr') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-folder"></i>
        <span class="menu-text">
          {{$t('BUS_MENU.DATA_RESOURCE_MONITORING.TITLE')}}
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">{{$t('BUS_MENU.DATA_RESOURCE_MONITORING.TITLE')}}</span>
            </span>
          </li>

          <router-link
            to="/dr/overview"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.DATA_RESOURCE_MONITORING.SUB.OVERVIEW')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/dr/search"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.DATA_RESOURCE_MONITORING.SUB.DATA_RESOURCE_QUERY')}}
                </span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <router-link
      to="/scm"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-gear"></i>
          <span class="menu-text">{{$t('BUS_MENU.SYSTEM_CONFIGURATION_MANAGEMENT')}}</span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('sys') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-users"></i>
        <span class="menu-text">
          {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.TITLE')}}
        </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">{{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.TITLE')}}</span>
            </span>
          </li>

          <router-link
            to="/sys/user"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.USER_MANAGEMENT')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/sys/dept"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.DEPT_MANAGEMENT')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/sys/role"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.ROLE_MANAGEMENT')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/sys/menu"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.MENU_MANAGEMENT')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/sys/authority"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.USER_PRIVILEGE_MANAGEMENT.SUB.AUTHORITY_MANAGEMENT')}}
                </span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('log') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-diagram"></i>
        <span class="menu-text">{{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.TITLE')}}</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">{{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.TITLE')}}</span>
            </span>
          </li>

          <router-link
            to="/log/collection"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.SUB.LOG_COLLECTION_CONFIGURATION')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/log/query"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.SUB.LOG_QUERY_BROWSING')}}
                </span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/log/stat"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">
                  {{$t('BUS_MENU.LOG_COLLECTION_ANALYSIS.SUB.LOG_STATISTICAL_ANALYSIS')}}
                </span>
              </a>
            </li>
          </router-link>
        </ul>
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
  }
};
</script>
