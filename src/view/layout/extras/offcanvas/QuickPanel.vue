<template>
  <div class="topbar-item">
    <div
      class="btn btn-icon btn-hover-transparent-white btn-lg mr-1"
      id="kt_quick_panel_toggle"
    >
      <span class="svg-icon svg-icon-xl">
        <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" />
      </span>
    </div>

    <!-- begin::Quick Panel -->
    <div
      id="kt_quick_panel"
      ref="kt_quick_panel"
      class="offcanvas offcanvas-right pt-5 pb-10"
      style="overflow: hidden;"
    >
      <!--begin::Header-->
      <div
        class="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5"
      >
        <ul
          class="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              v-on:click="setActiveTab"
              data-tab="0"
              data-toggle="tab"
              href="#"
              role="tab"
              aria-selected="true"
            >
              {{$t('SYSTEM.LAYOUT.TITLE')}}
            </a>
          </li>
          <!--<li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="1"
              data-toggle="tab"
              href="#"
              role="tab"
              aria-selected="false"
            >
              Notifications
            </a>
          </li>-->
          <!--<li class="nav-item">
            <a
              class="nav-link"
              v-on:click="setActiveTab"
              data-tab="2"
              data-toggle="tab"
              href="#"
              role="tab"
              aria-selected="false"
            >
              Audit Logs
            </a>
          </li>-->
        </ul>
        <div class="offcanvas-close mt-n1 pr-5">
          <a
            href="#"
            class="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_panel_close"
          >
            <i class="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
      </div>
      <!--end::Header-->

      <div class="offcanvas-content px-10">
        <div class="tab-content">
          <b-tabs class="hide-tabs" v-model="tabIndex" no-nav-style>
            <b-tab active>
              <div class="scroll pr-7 mr-n7" id="kt_quick_panel_settings">
                <form class="form">
                  <!--begin::Section-->
                  <div>
                    <h5 class="font-weight-bold mb-3">
                      {{$t('SYSTEM.LAYOUT.HEADER_SET.TITLE')}}
                    </h5>
                    <!--<div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.HEADER_SET.DESKTOP_FIXED_HEADER')}}:
                      </label>
                      <div class="col-4 text-right">
                        <span class="switch switch-success switch-sm">
                          <label>
                            <input type="checkbox" checked="checked" name=""
                                   v-model="config.header.self.fixed.desktop" />
                            <span></span>
                          </label>
                        </span>
                      </div>
                    </div>-->
                    <!--<div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.HEADER_SET.MOBILE_FIXED_HEADER')}}:
                      </label>
                      <div class="col-4 text-right">
                        <span class="switch switch-success switch-sm">
                          <label>
                            <input
                              type="checkbox"
                              name=""
                              v-model="config.header.self.fixed.mobile"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                    </div>-->
                    <!--<div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.HEADER_SET.HEADER_MENU_ARROWS')}}:
                      </label>
                      <div class="col-4 text-right">
                        <span class="switch switch-success switch-sm">
                          <label>
                            <input
                              type="checkbox"
                              name=""
                              v-model="config.header.menu.self['root-arrow']"
                            />
                            <span></span>
                          </label>
                        </span>
                      </div>
                    </div>-->
                    <div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.HEADER_SET.HEADER_WIDTH')}}:
                      </label>
                      <div class="col-4 text-right">
                        <select
                          class="form-control"
                          v-model="config.header.self.width"
                        >
                          <option value="fluid" selected="">Fluid</option>
                          <option value="fixed">Fixed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!--end::Section-->

                  <div class="separator separator-dashed my-6"></div>

                  <!--begin::Section-->
                  <div class="pt-2">
                    <h5 class="font-weight-bold mb-3">
                      {{$t('SYSTEM.LAYOUT.SUBHEADER_SET.TITLE')}}
                    </h5>
                    <div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.SUBHEADER_SET.DISPLAY_SUBHEADER')}}:
                      </label>
                      <div class="col-4 text-right">
                        <span class="switch switch-sm switch-success">
                          <label>
                            <input type="checkbox" checked="checked" name=""
                                   v-model="config.subheader.display" />
                            <span></span>
                          </label>
                        </span>
                      </div>
                    </div>
                    <div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.SUBHEADER_SET.SUBHEADER_WIDTH')}}:
                      </label>
                      <div class="col-4 text-right">
                        <select class="form-control" v-model="config.subheader.width">
                          <option value="fluid" selected="">Fluid</option>
                          <option value="fixed">Fixed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!--end::Section-->

                  <!--<div class="separator separator-dashed my-6"></div>-->

                  <!--begin::Section-->
                  <!--<div class="pt-2">
                    <h5 class="font-weight-bold mb-3">
                      {{$t('SYSTEM.LAYOUT.CONTENT_SET.TITLE')}}
                    </h5>
                    <div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.CONTENT_SET.CONTENT_WIDTH')}}:
                      </label>
                      <div class="col-4 text-right">
                        <select class="form-control" v-model="config.content.width">
                          <option value="fluid">Fluid</option>
                          <option value="fixed" selected="">Fixed</option>
                        </select>
                      </div>
                    </div>
                  </div>-->
                  <!--end::Section-->

                  <div class="separator separator-dashed my-6"></div>

                  <!--begin::Section-->
                  <div class="pt-2">
                    <h5 class="font-weight-bold mb-3">
                      {{$t('SYSTEM.LAYOUT.ASIDE_SET.TITLE')}}
                    </h5>
                    <div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.ASIDE_SET.DISPLAY_ASIDE')}}:
                      </label>
                      <div class="col-4 text-right">
                        <span class="switch switch-sm switch-danger">
                          <label>
                            <input type="checkbox" checked="checked" name=""
                                   @click="onAsideToggle"
                                   v-model="config.aside.self.display"/>
                            <span></span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <!--end::Section-->

                  <div class="separator separator-dashed my-6"></div>

                  <!--begin::Section-->
                  <div class="pt-2">
                    <h5 class="font-weight-bold mb-3">
                      {{$t('SYSTEM.LAYOUT.FOOTER_SET.TITLE')}}
                    </h5>
                    <div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.FOOTER_SET.FOOTER_WIDTH')}}:
                      </label>
                      <div class="col-4 text-right">
                        <select class="form-control" v-model="config.footer.width">
                          <option value="fluid" selected="">Fluid</option>
                          <option value="fixed">Fixed</option>
                        </select>
                      </div>
                    </div>
                    <!--<div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.FOOTER_SET.FOOTER_LAYOUT')}}:
                      </label>
                      <div class="col-4 text-right">
                        <select class="form-control" v-model="config.footer.layout">
                          <option value="extended" selected="">Extended</option>
                          <option value="compact">Compact</option>
                        </select>
                      </div>
                    </div>-->
                  </div>
                  <!--end::Section-->

                  <!--<div class="separator separator-dashed my-6"></div>-->

                  <!--begin::Section-->
                  <!--<div class="pt-2">
                    <h5 class="font-weight-bold mb-3">
                      {{$t('SYSTEM.LAYOUT.TOOLBAR_SET.TITLE')}}
                    </h5>
                    <div class="form-group mb-0 row">
                      <label class="col-8 col-form-label">
                        {{$t('SYSTEM.LAYOUT.TOOLBAR_SET.SHOW_TOOLBAR')}}:
                      </label>
                      <div class="col-4 text-right">
                        <span class="switch switch-sm switch-primary">
                          <label>
                            <input type="checkbox" checked="checked" name=""
                            v-model="config.toolbar.display" />
                            <span></span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>-->
                  <!--end::Section-->
                </form>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
    <!-- end::Quick Panel -->
  </div>
</template>

<script>
import KTLayoutQuickPanel from "@/assets/js/layout/extended/quick-panel.js";
import { mapGetters } from "vuex";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME
} from "@/core/services/store/htmlclass.module";
import store from "@/core/services/store";

export default {
  name: "KTQuickPanel",
  data() {
    return {
      tabIndex: 0,
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    config() {
      return this.layoutConfig();
    }
  },
  mounted() {
    // Init Quick Offcanvas Panel
    KTLayoutQuickPanel.init(this.$refs["kt_quick_panel"]);
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

      // set current active tab
      event.target.classList.add("active");
    },

    onAsideToggle() {
      // console.log(this.$store.state);
      // console.log(this.$store.state.config.config.aside.self.display);

      //this.$store.state.config.config.aside.self.display = !this.layoutConfig("aside.self.display");
      this.$store.state.config.config.aside.self.display = !this.config.aside.self.display;
      // Add aside class enabled in body
      store.dispatch(ADD_BODY_CLASSNAME, "aside-enabled");
    }
  }
};
</script>
