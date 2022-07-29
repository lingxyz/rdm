package com.example.demo.service.impl;

import com.example.demo.common.Result;
import com.example.demo.dao.UserMapper;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

/**
 * service.mpl
 */
@Service
public class UserServiceImpl implements UserService {

  @Resource
  private UserMapper userMapper;

  // 自定义方法

  /**
   * 注册
   *
   * @param user
   * @return User
   */
  @Override
  public Result<User> regist(User user) {
    Result<User> result = new Result<User>();
    result.setSuccess(false);
    result.setDetail(null);
    try {
      User existUser = userMapper.findUserByName(user.getName());
      if (existUser != null) {
        // 如果用户名已存在
        result.setMsg("用户名已存在");
      } else {
        userMapper.insert(user);
        // System.out.println(user.getId());
        result.setMsg("注册成功");
        result.setSuccess(true);
        result.setDetail(user);
      }
    } catch (Exception e) {
      result.setMsg(e.getMessage());
      e.printStackTrace();
    }
    return result;
  }

  /**
   * 登录
   *
   * @param user
   * @return User
   */
  @Override
  public Result<User> login(User user) {
    Result<User> result = new Result<>();
    result.setSuccess(false);
    result.setDetail(null);
    try {
      User exitUser = userMapper.login(user);
      if (exitUser == null) {
        result.setMsg("用户名或密码错误");
      } else {
        result.setMsg("登录成功");
        result.setSuccess(true);
        user.setId(exitUser.getId());
        result.setDetail(user);
      }
    } catch (Exception e) {
      result.setMsg(e.getMessage());
      e.printStackTrace();
    }
    return result;
  }

  /**
   * 用户列表
   *
   * @param null
   * @return List<User>
   */
  @Override
  public Result<List<User>> getUserList() {
    Result<List<User>> result = new Result<>();
    result.setSuccess(false);
    result.setDetail(null);
    try {
      List<User> users = userMapper.selectList(null);
      result.setMsg("查询成功");
      result.setSuccess(true);
      result.setDetail(users);
    } catch (Exception e) {
    result.setMsg(e.getMessage());
    e.printStackTrace();
    }
    return result;
  }
}
