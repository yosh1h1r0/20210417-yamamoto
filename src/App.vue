  <template>
  <div id="app">
   <input type="text" v-model="zipcode" />
     <button @click="postcode">検索</button>

<p> Address: {{address}}</p>


  </div>
</template>

<script>
import axios from 'axios';
export default {
data() {
  return {
    zipcode:"",
    address:"",
  };
},
methods: {
 postcode() {
  axios
        .get(`https://apis.postcode-jp.com/api/v4/postcodes/${this.zipcode}?apiKey=Bg0aVQSV58OYBHMknWIp4oOExVs0XeZjd3I7EEx`
        )
        .then(response =>{
          this.address = response.data[0].allAddress;
        })
  },
}
};
</script>

<style>
</style>
