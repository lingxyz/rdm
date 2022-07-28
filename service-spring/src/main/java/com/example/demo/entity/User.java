package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

@Data
//1.将对象与表进行关联
//规则1：如果表明与对象名一致，则名称可以省略
//规则2：如果字段名与属性名一致，则注解可以省略
@TableName("admin_user")
//序列化接口的作用：保证对象网络传输的有效性！！！
public class User implements Serializable {
  //2.主键 --- 主键自增[AUTO]、非空、UUID[ASSIGN_UUID](生成唯一编号)
  @TableId(type = IdType.AUTO) //主键的意思
  private Integer id;
  //3.标识属性与字段的映射
//    @TableField("name")
  private String name;
  private String password;
}