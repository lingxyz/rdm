/**
 * 排期工具
 */
<template lang="pug">
a-form(layout="inline" :model="formState" @finish="onFinish")
  //- a-form-item
  //-   a-input(v-model:value="formState.user" placeholder="Username")
  //-     template#prefix
  //-       UserOutlined(style="color: rgba(0, 0, 0, 0.25)")
  a-form-item
    a-select(
      v-model:value="formState.users"
      mode="multiple"
      style="width: 200px"
      placeholder="请选择人员"
      :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
      @change="handleChange")
  a-form-item
    a-select(
      v-model:value="formState.demands"
      mode="multiple"
      style="width: 200px"
      placeholder="请选择需求"
      :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
      @change="handleChange")
  a-form-item
    a-button(
      type="primary"
      html-type="submit"
      :disabled="!formState.users.length && !formState.demands.length"
    ) 过滤

//- 需求列表
demand
  div(style="text-decoration: line-through;") ✅ 过滤：需求选择、人选择
  div ☑️ 视图切换：按需求的维度、按人的维度(右侧)
  div 🔘 fullcalendar-scheduler 插件
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';
import type { FormProps } from 'ant-design-vue';
import demand from '../../../components/demand.vue'

interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    demand,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      users: [],
      demands: [],
    });
    const handleChange = (value: string[]) => {
      console.log(`selected ${value}`);
    };
    const handleFinish: FormProps['onFinish'] = values => {
      console.log(values, formState);
    };
    const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
      console.log(errors);
    };
    return {
      formState,
      handleChange,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>

<style scoped lang="stylus">

</style>