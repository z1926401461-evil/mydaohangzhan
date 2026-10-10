export default {
  async fetch(request, env) {
    // 以后想加 API，就在上面加 if 判断
    // 目前所有请求都直接找 public 里的静态文件
    return env.ASSETS.fetch(request);
  }
};