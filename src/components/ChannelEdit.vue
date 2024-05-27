<template>
              <el-select 
              :style="{width}"
              :modelValue="modelValue"
              @update:modelValue="emit('update:modelValue',$event)"
              >
                <el-option v-for="(item, index) in hotDay " :key="index" :label="item" :value="item" ></el-option>
              </el-select>
</template>

<script setup>
import {reactive} from 'vue'

defineProps({
    modelValue:{
        type:[Number,String]
    },
    width:{
      type:String
    }
})
const emit = defineEmits(['update:modelValue'])

const hotDay = reactive(['一天内', '三天内', '七天内'])
</script>

<style lang="less" scoped>

.el-select{
  width: 200px;

}

</style>