<template>
  <div class="user">
    <div class="box">
      <ul class="opera">
        <li>
          <div class="button" @click="index">index</div>
          <span>GET     /posts</span>
        </li>
        <li>
          <div class="button" @click="_new">new</div>
          <span>GET     /posts/new</span>
        </li>
        <li>
          <div class="button" @click="show">show</div>
          <span>GET     /posts/:id</span>
        </li>
        <li>
          <div class="button" @click="edit">edit</div>
          <span>GET     /posts/:id/edit</span>
        </li>
        <li>
          <div class="button" @click="create">create</div>
          <span>POST    /posts</span>
        </li>
        <li>
          <div class="button" @click="update">update</div>
          <span>PUT     /posts/:id</span>
        </li>
        <li>
          <div class="button" @click="destroy">destroy</div>
          <span>DELETE  /posts/:id</span>
        </li>
      </ul>
      <ul
        @click="select = $event.target.dataset.index"
        v-for="(item, index) in user"
        :key="index"
      >
        <li :class="select == index ? 'color' : ''" :data-index="index">
          {{ item.id }} - {{ item.name }} - {{ item.created_at }} -
          {{ item.updated_at }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
import mock from '@/mock.js'
import {
  getUser,
  showUser,
  createUser,
  putUser,
  deleteUser
} from "@/services/api";
export default {
  name: "user",
  data() {
    return {
      user: [],
      select: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    index() {
      getUser().then(res => {
        this.user = res.data;
      });
    },
    _new() {},
    show() {
      showUser(10).then(res => {
        this.user = [res.data];
      });
    },
    edit() {},
    create() {
      createUser({ name: "haibin" }).then(res => {
        this.user = [...this.user, res.data];
      });
    },
    update() {
      putUser(this.user[0].id, { name: "haha" }).then(res => {
        const index = this.user.findIndex(v => v.id === res.data.id);
        this.user.splice(index, 1, res.data);
      });
    },
    destroy() {
      deleteUser(this.user[0].id).then(res => {
        const index = this.user.findIndex(v => v.id === res.data.id);
        this.user.splice(index, 1);
      });
    },
    login() {
      axios.post("/login").then(response => {
        if (response.data) {
          console.log(response.data);
          alert(response.data.name);
        }
      });
    },

    list() {
      axios.post("/list").then(response => {
        if (response.data) {
          console.log(response.data);
          alert(response.data.name + "," + response.data.age);
        }
      });
    }
  },
  created() {
    getUser().then(res => {
      this.user = res.data;
    });
    this.login()
    this.list()
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.user {
  .box {
    @include wh(800px) {
      padding: 30px;
      background-color: #ddd;
    }
    @include ct-p;
    .opera {
      margin-bottom: 20px;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .button {
          cursor: pointer;
          @include wh(60px, 30px) {
            border-radius: 4px;
            margin-right: 30px;
            background-color: #888;
            text-align: center;
            line-height: 30px;
          }
        }
      }
    }
    .color {
      background-color: yellow;
    }
  }
}
</style>
