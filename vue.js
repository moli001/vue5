<div id="app">
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">教程 demo1</div>
</div>
    
<script>
new Vue({
  el: '#app',
  data: {
    ok: true,
    message: 'RUNOOB',
    id : 1
  }
})
