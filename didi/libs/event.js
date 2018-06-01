// event.js
class Event {
    
    /**
     * on 方法把订阅者所想要订阅的事件及相应的回调函数记录在 Event 对象的 _cbs 属性中
     */
    on (event, fn) {
        if (typeof fn != "function") {
            console.error('fn must be a function')
            return
        }
        
        this._cbs = this._cbs || {}
        ;(this._cbs[event] = this._cbs[event] || []).push(fn)
    }
    /**
     * emit 方法接受一个事件名称参数，在 Event 对象的 _cbs 属性中取出对应的数组，并逐个执行里面的回调函数
     */
    emit (event) {
        this._cbs = this._cbs || {}
        var callbacks = this._cbs[event], args
        if (callbacks) {
            callbacks = callbacks.slice(0)
            args = [].slice.call(arguments, 1)
            for (var i = 0, len = callbacks.length; i < len; i++) {
                callbacks[i].apply(null, args)
            }
        }
    }
    /**
     * off 方法接受事件名称和当初注册的回调函数作参数，在 Event 对象的 _cbs 属性中删除对应的回调函数。
     */
    off (event, fn) {
        this._cbs = this._cbs || {}
        // all
        if (!arguments.length) {
            this._cbs = {}
            return
        }
        var callbacks = this._cbs[event]
        if (!callbacks) return
        // remove all handlers
        if (arguments.length === 1) {
            delete this._cbs[event]
            return 
        }
        // remove specific handler
        var cb
        for (var i = 0, len = callbacks.length; i < len; i++) {
            cb = callbacks[i]
            if (cb === fn || cb.fn === fn) {
                callbacks.splice(i, 1)
                break
            }
        }
        return
    }    
}