<template>
  <transition name="m-fade">
    <div class="m-popover" v-show="show"  @click="onPopoverClick">
      <transition name="m-slide">
        <div class="m-popover-container" v-show="show">
          <inlineCalendar v-bind="$props" @change="handelChange" @switch="handelSwitch" ref="calendar" @onConfirm="onConfirm" @onClose="onClose" />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import './popover.less';
import inlineCalendar from './inlineCalendar';

export default {
  name: 'calendar',
  components: {
    inlineCalendar,
  },
  props: {
    ...inlineCalendar.props,
    show: {
      type: Boolean,
      default: false,
    },
    closeByClickMask: {
      type: Boolean,
      default: true,
    }
  },
  watch:{
    show(newValue){
      if (newValue == true) {
        this.forbidBodyScroll()

        // 将当天的日期值显示为今天
        // let elToday = document.querySelector(".m-today");
        // elToday.innerHTML = elToday.index();


      }
      else {
        this.allowBodyScroll()
      }
    }
  },
  methods: {
    onPopoverClick(e) {
      if (this.closeByClickMask && !this.$refs.calendar.$refs.calendar.contains(e.target)) {
        this.$emit('update:show', false);
      }
    },
    handelChange(val) {
      this.$emit('change', val);
    },
    handelSwitch(val) {
      this.$emit('switch', val);
    },
    onConfirm(val){
      this.$emit('onConfirm', val);
      this.$emit('update:show', false);
    },
    onClose(){
      this.$emit('update:show', false);
    },
    /**
     * @desc 解决日期弹框穿透问题，禁止滚动
     */
    forbidBodyScroll() {
      let layer = document.querySelector(".m-popover");
      layer.style.display = "block";
      layer.addEventListener("touchmove", function(e) {
        e.preventDefault();
      });
    },
    /**
     * @desc 解决日期弹框穿透问题，释放滚动
     */
    allowBodyScroll() {
      let layer = document.querySelector(".m-popover");
      layer.style.display = "none";
    }
  },
};
</script>
