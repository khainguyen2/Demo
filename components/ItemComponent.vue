<template>
  <div id="app">
    <div>
      <input v-model="name" />
      <button @click="addData(name)">Add</button>
      <button @click="updateData({ id, name })">Update</button>
      <br />
      <input v-model="nameSearch" />
      <button @click="searchData({ nameSearch, activePage: 1 })">Search</button>
    </div>
    <table v-for="(item, index) in itemReducer.$state.data" :key="item" >
      <tr>
        <td>{{ index + 1 + itemReducer.$state.skip }}</td>
        <td>{{ item.Name }}</td>
        <td>{{}}</td>
        <button @click="deleteData(item._id)">Delete</button>
        <button @click="(id = item._id), (name = item.Name)">Choose</button>
      </tr>
    </table>
    <button v-for="item in itemReducer.$state.totalPage" :key="item" @click="
      itemReducer.$state.textSearch
        ? searchData({
          activePage: item,
          nameSearch: itemReducer.$state.textSearch,
        })
        : getData({ activePage: item })
    " v-bind:style="[
      itemReducer.$state.activePage === item
    ? 'background-color:coral'
    : null,
]">
      {{ item }}
    </button>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
import { useStore } from "../reducer/itemReducer";
import { getData,addData, deleteData, updateData, searchData } from "../saga/itemSaga";
export default defineComponent({
  name: "App",
  setup() {
    const name = ref("");
    const itemReducer = useStore();
    console.log(itemReducer, "ssss");
    getData({ activePage: 1 });
    return {
      itemReducer, name,addData,deleteData,updateData,getData, searchData,
    };
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 1rem 2rem;
}

footer {
  font-size: 0.75rem;
  text-align: right;
  color: darkgray;
}
</style>
