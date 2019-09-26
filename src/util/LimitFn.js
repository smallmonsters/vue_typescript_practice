// 函数节流
class LimitFn {
  constructor(callback, delay = 1000) {
    if (LimitFn.init) return LimitFn.init
    this.delay = delay
    this.callback = callback
    LimitFn.init = this
  }
  // 清除类上挂载的数据
  clear() {
    LimitFn.timer = setTimeout(() => {
      LimitFn.preTime = null
      LimitFn.nextTime = null
      LimitFn.timer = null
      LimitFn.init = null
    }, this.delay);
  }
  // 函数节流
  throttleFn() {
    // 在周期内，重置周期
    if (!LimitFn.preTime) this.delayHandle()
  }
  // 函数防抖
  debounceFn() {
    // 第一次触发事件，记录时间戳
    if (!LimitFn.preTime) {
      this.delayHandle()
    } else { // 在次触发事件
      LimitFn.nextTime = new Date().getTime()
      // 在周期内，重置周期
      if (LimitFn.preTime + this.delay > LimitFn.nextTime) {
        clearTimeout(LimitFn.timer)
        this.delayHandle()
      }
    }
  }
  delayHandle() {
    LimitFn.preTime = new Date().getTime()
    LimitFn.timer = setTimeout(() => {
      this.callback()
      this.clear()
    }, this.delay);
  }
}

