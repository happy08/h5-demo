import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";

Vue.use(VeeValidate)

const formatFileSize = function(size) {//用于计算size大小
  let utilss = ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let threshold = 1024;
  size = Number(size) * threshold;
  let i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold));
  return (size / Math.pow(threshold, i)).toFixed(2) * 1 + " " + utilss[i];
};
//const fieldName = ""; //原来的i18n的fieldName会显示绑定的name值，就是英文，实际项目中不需要

Validator.localize("zh_CN", {
  name: "zh_CN",
  attributes: {},
  messages: {
    _default: (fieldName) => `${fieldName}无效`,
    after: (fieldName, [target]) => `${fieldName}必须在${target}之后`,
    alpha_dash: (fieldName) => `${fieldName}能够包含字母数字字符、破折号和下划线`,
    alpha_num: (fieldName) => `${fieldName}只能包含字母数字字符`,
    alpha_spaces: (fieldName) => `${fieldName}只能包含字母字符和空格`,
    alpha: (fieldName) => `${fieldName}只能包含字母字符`,
    before: (fieldName, [target]) => `${fieldName}必须在${target}之前`,
    between: (fieldName, [min, max]) => `${fieldName}必须在${min}与${max}之间`,
    confirmed: (fieldName, [confirmedField]) =>
      `${fieldName}和${confirmedField}不一致`,
    credit_card: (fieldName) => `${fieldName}格式错误`,
    date_between: (fieldName, [min, max]) => `${fieldName}必须在${min}和${max}之间`,
    date_format: (fieldName, [format]) => `${fieldName}必须符合${format}格式`,
    decimal: (fieldName, [decimals = "*"] = []) =>
      `${fieldName}必须是数字，且能够保留${
        decimals === "*" ? "" : decimals
      }位小数`,
    digits: (fieldName, [length]) =>
      `${fieldName}必须是${length}位数字`,
    dimensions: (fieldName, [width, height]) =>
      `${fieldName}必须在${width}像素与${height}像素之间`,
    email: (fieldName) => `${fieldName}不是一个有效的邮箱`,
    ext: (fieldName) => `${fieldName}不是一个有效的文件`,
    image: (fieldName) => `${fieldName}不是一张有效的图片`,
    included: (fieldName) => `${fieldName}不是一个有效值`,
    integer: (fieldName) => `${fieldName}必须是整数`,
    ip: (fieldName) => `${fieldName}不是一个有效的地址`,
    length: (fieldName, [length, max]) => {
      if (max) {
        return `${fieldName}长度必须${length}到${max}之间`;
      }
      return `${fieldName}长度必须为${length}`;
    },
    max: (fieldName, [length]) => `${fieldName}不能超过${length}个字符`,
    max_value: (fieldName, [max]) => `${fieldName}必须小于或等于${max}`,
    mimes: (fieldName) => `${fieldName}不是一个有效的文件类型`,
    min: (fieldName, [length]) => `${fieldName}必须至少有${length}个字符`,
    min_value: (fieldName, [min]) => `${fieldName}必须大于或等于${min}`,
    excluded: (fieldName) => `${fieldName}不是一个有效值`,
    numeric: (fieldName) => `${fieldName}只能包含数字字符`,
    regex: (fieldName) => `${fieldName}格式无效`,
    required: (fieldName) => `${fieldName}不能为空`,
    size: (fieldName, [size]) => `${fieldName}必须小于${formatFileSize(size)}`,
    url: (fieldName) => `${fieldName}不是一个有效的url`,
  }
});

// 手机号码验证
Validator.extend("mobile", {
  getMessage: (fieldName) => `${fieldName}格式错误`,
  validate: value =>
    value.length === 11 &&
    /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/.test(
      value
    )
});