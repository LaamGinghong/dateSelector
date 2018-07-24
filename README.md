# DateSelector 日期选择器 [日期选择器](https://laamginghong.github.io/dateSelector/dist/dataSelector/index.html)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

该项目基于[Angular](https://github.com/angular/angular-cli) 6.0.8

## Development server 本地开发服务器

Run `ng serve or npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

打开终端运行`ng serve`或者`npm start`来启动本地开发服务器，服务器地址是`http://localhost:4200/`

## Build 打包

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Menu 项目目录结构

    |--src
       |--app(页面组件)
          |--date-box(日历模块)
             |--day-box(日历组件)
             |--month-box(选择月份组件)
             |--year-box(选择年份组件)
             |--date-box.component.css(日历模块样式)
             |--date-box.component.html(日历模块样式)
             |--date-box.compoennt.ts(日历模块组件)
             |--date-box.module.ts(日历模块)
          |--input-box(输入框模块)
             |--input-box.component.css(输入框模块样式)
             |--input-box.component.html(输入框模块夜眠)
             |--input-box.component.ts(输入框模块组件)
             |--input-box.module.ts(输入框模块)
          |--app.component.css(根组件样式)
          |--app.component.html(根组件页面)
          |--app.component.ts(根组件脚本)
          |--app.module.ts(根组件模块)
          |--broadcast.service.ts(广播服务)
       |--assets(静态资源)
       |--environments(环境配置)
