<script setup lang="ts"></script>

<template>
  <el-row :gutter="20">
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <el-card class="card-box" :body-style="{ padding: '0px' }">
        <img src="./assests/image/album/GKCD-001.jpg" class="image" />
        <div style="padding: 20px">
          <span> Rainseeker EP </span>
          <div class="bottom">
            <time class="time">发行时间：2022-6-15</time>
            <el-link
              :underline="false"
              href="https://www.dizzylab.net/d/GKCD-001/"
              target="_blank"
              type="primary"
              ><el-button type="primary">试听</el-button>
            </el-link>

            <el-dropdown>
              <el-button type="primary">购买</el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <el-link
                      :underline="false"
                      href="https://www.dizzylab.net/d/GKCD-001/"
                      target="_blank"
                      >电子专辑</el-link
                    >
                  </el-dropdown-item>
                  <el-dropdown-item
                    ><el-link
                      :underline="false"
                      href="https://item.taobao.com/item.htm?id=694678370751"
                      target="_blank"
                      >实体专辑</el-link
                    ></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <el-card class="card-box" :body-style="{ padding: '0px' }">
        <img src="./assests/image/album/GKCD-002.jpg" class="image" />
        <div style="padding: 20px">
          <span> Inoch EP </span>
          <div class="bottom">
            <time class="time">发行时间：2022-9-26</time>

            <el-link
              :underline="false"
              href="https://www.bilibili.com/video/av645884714/"
              target="_blank"
              type="primary"
              ><el-button type="primary">试听</el-button>
            </el-link>

            <el-dropdown>
              <el-button type="primary">购买</el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <el-link
                      :underline="false"
                      href="https://www.dizzylab.net/d/GKCD-002/"
                      target="_blank"
                      >电子专辑</el-link
                    >
                  </el-dropdown-item>
                  <el-dropdown-item
                    ><el-link
                      :underline="false"
                      href="https://item.taobao.com/item.htm?id=694420773523"
                      target="_blank"
                      >实体专辑</el-link
                    ></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>

          </div>
        </div>
      </el-card>
    </el-col>

    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <el-card class="card-box" :body-style="{ padding: '0px' }">
        <img src="./assests/image/album/GKCD-003.jpg" class="image" />
        <div style="padding: 20px">
          <span> Season EP </span>
          <div class="bottom">
            <time class="time">发行时间：2022-11-12</time>
            <el-link
              :underline="false"
              href="https://www.bilibili.com/video/av220001740/"
              target="_blank"
              type="primary"
              ><el-button type="primary">试听</el-button>
            </el-link>

            <el-dropdown>
              <el-button type="primary">购买</el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    <el-link
                      :underline="false"
                      href="https://www.dizzylab.net/d/GKCD-003/"
                      target="_blank"
                      >电子专辑</el-link
                    >
                  </el-dropdown-item>
                  <el-dropdown-item
                    ><el-link
                      :underline="false"
                      href="https://item.taobao.com/item.htm?id=694413917188"
                      target="_blank"
                      >实体专辑</el-link
                    ></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-backtop :right="100" :bottom="100" />
</template>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 10px;
}

.image {
  width: 100%;
  display: block;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.time {
  font-size: 12px;
  color: #999;
}
</style>
