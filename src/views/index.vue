<template>
  <div class="gugu" flex="dir:top main:justify">
    <div>
      <div class="header" flex="main:justify cross:center">
        <div class="label">欢迎使用咕语翻译器
          <br>明鸽不说暗话：о̆古о̌古о̄古о̂古 о̇古咕о̋古о̉古 ӧ古о̍古о̅古о̎古
          <!-- <br>耳仔直播QQ群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=3O7u4ch54NyJOYWdfF_P4wl6abbLFnjY&jump_from=webapi">1143106153</a>
          <br>B站账号：<a target="_blank" href="https://space.bilibili.com/745463">UID:745463</a>
          <br>B站直播间：<a target="_blank" href="https://live.bilibili.com/22800732?spm_id_from=333.999.0.0">房间号：22800732</a> 
          -->
        </div>
      </div>
      <div class="input">
        <img class="clear" @click="clearHandle" v-if="msg" src="../assets/del_1.svg" alt="">
        <van-field
          v-model="msg"
          label="内容"
          ref="inputRef"
          type="textarea"
          :autosize="{ maxHeight: 300, minHeight: 70 }"
          placeholder="请输入要翻译的内容/咕咕语"
          autofocus
        />
      </div>
      <van-button :data-clipboard-text="result" class="copy copyJs" type="primary">复制结果</van-button>
      <p class="result">{{ result }}</p>
    </div>
    <div class="foot">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="API" name="1">
          <div>
            <label>api服务：</label>
            <span>POST http://106.14.123.83:8082</span>
          </div>
          <div>
            <label>content-type：</label>
            <span>application/json</span>
          </div>
          <div>
            <label>请求参数：</label>
            <span>{text: string}</span>
          </div>
          <a href="https://github.com/hyw123456/gugu"> Github地址</a>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Clipboard from 'clipboard'
  import { computed, onMounted, ref } from 'vue'
  import { translateEachOther } from '@/util'
  import { Toast } from 'vant'

  const msg = ref<string>('')
  const inputRef: any = ref(null)
  const result = computed(() => {
    return translateEachOther(msg.value)
  })
  const clearHandle = () => {
    msg.value = ''
    inputRef.value.focus()
  }
  onMounted(() => {
    const cli = new Clipboard('.copyJs')
    cli.on('success', function (e) {
      Toast('复制成功')
      e.clearSelection()
    })
  })
  const activeNames = ref([])

</script>

<style scoped>
a {
  color: #1989fa;
}

.gugu {
  padding: 16px 24px;
  position: relative;
  min-height: 100vh;
  .foot{
    margin-top: 8px;
    a{
      line-height: 20px;
    }
  }
}

.input {
  position: relative;

  .clear {
    top: 4px;
    right: 4px;
    position: absolute;
    width: 14px;
    z-index: 3;
  }
}

.header {
  padding: 8px 16px;

  .label {
  }
}

.copy {
  float: right;
  margin: 8px 0;
}

.result {
  clear: both;
  position: relative;
}
</style>
