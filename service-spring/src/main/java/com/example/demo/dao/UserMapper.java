package com.example.demo.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.User;

import java.util.List;

/**
 * 1.规则1：继承BaseMapper时，必须添加泛型对象，否则映射表报错
 * 2.规则2：自己的方法不要与接口方法重名
 */
public interface UserMapper extends BaseMapper<User> {
  //MP规则：以对象的方式操作数据库，CURD操作
  //查询所有的user用户
  List<User> findAll();
  User login(User record);
  User findUserByName(String userName);
  int deleteByPrimaryKey(Integer userId);
  // 以下可 mybatis-plus自动生成，待删除
  int insert(User record);

  int insertSelective(User record);

  User selectByPrimaryKey(Integer userId);

  int updateByPrimaryKeySelective(User record);

  int updateByPrimaryKey(User record);
}