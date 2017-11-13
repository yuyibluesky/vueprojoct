<template>
<div>
<talk :id='id'></talk>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
import areaname from '../../kits/areaname.js'
import talk from '../childcomponent/talklog.vue'
export default {
    components:{talk},
  data () {
    return {
        id:this.$route.params.id

    };
  }
}
</script>

<style lang="css" scoped>

</style>