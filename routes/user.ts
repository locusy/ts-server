/*
 * @Author: tianzhi
 * @Date: 2020-01-05 15:19:15
 * @LastEditors  : tianzhi
 * @LastEditTime : 2020-01-05 16:21:34
 */
import * as Koa from 'koa';
const users = [{ name: 'tom', age: 20 }, { name: 'tom', age: 20 }];
export default class User {
    @get('/users')
    public list(ctx: Koa.Context) {
        ctx.body = { ok: 1, data: users };
    }
    @post('/users')
    public add(ctx: Koa.Context) {
        users.push(ctx.request.body);
        ctx.body = { ok: 1 }
    }
}

function get(path) {
    return function(target, property, descriptor) {}
}