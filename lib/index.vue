<template>
  <popover :show.sync="show" v-show="show">
    <inlineCalendar v-bind="$props" @change="handelChange" @switch="handelSwitch" @onConfirm="onConfirm"></inlineCalendar>
  </popover>
</template>

<script>
import './index.less';
import popover from './popover';
import inlineCalendar from './inlineCalendar';

export default {
  name: 'calendar',
  components: {
    popover,
    inlineCalendar,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    ...inlineCalendar.props
  },
  
  methods: {
    handelChange(val) {
      this.$emit('change', val);
    },
    handelSwitch(val) {
      this.$emit('switch', val);
    },
    onConfirm(val) {
      this.$emit('onConfirm', val);
    }
  },
};
</script>
