<template>
  <div id="app">
   <input type="number" v-model="postcode" />
     <button @click="postcode">検索</button>
    <p >Address: {{ address }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
data() {
  return {
    address:""
  };
},
methods: {
async postcode() {
      const item = await axios.get(
        `https://apis.postcode-jp.com/api/v4/postcodes/postcode?filterBg0aVQSV58OYBHMknWIp4oOExVs0XeZjd3I7EEx`
      );
      const zipcode = item.data;
      this.address = zipcode.address;
  }
}
};
</script>

<style>

</style>
