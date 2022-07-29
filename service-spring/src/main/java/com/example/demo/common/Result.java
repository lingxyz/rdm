package com.example.demo.common;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 向前端返回信息封装
 *
 * @param <T>
 * @param <T> 可变类型
 */

@Data
@ApiModel(description = "返回响应数据")
public class Result<T> {
  // 返回信息
  @ApiModelProperty(value = "返回信息")
  private String msg;
  // 数据是否正常请求
  @ApiModelProperty(value = "是否成功")
  private boolean success;
  // 具体返回的数据
  @ApiModelProperty(value = "返回对象")
  private T detail;
}
