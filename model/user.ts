/*
 * @Author: tianzhi
 * @Date: 2020-01-05 18:10:17
 * @LastEditors: tianzhi
 * @LastEditTime: 2020-01-05 18:10:26
 */
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({modelName: 'users'})
export default class User extends Model<User> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    public id: number;

    @Column(DataType.CHAR)
    public name: string;
}