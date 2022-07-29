package com.example.demo.service;

import com.example.demo.common.Result;
import com.example.demo.entity.User;

public interface UserService {
  // 自定义方法
  Result<User> login(User user);
  Result<User> regist(User user);
  Result<User> users();
}