/* 重置css */
import "reset-css/reset.css";
/* 重置css */

// App entry, type your magical code  here.
import Vue from "vue";
import FastClick from "fastclick";

import "flex.css/dist/flex.css";

/* 添加FastClick到body */
FastClick.attach(document.body);
console.log(require('./assets/tray-icon.png'));
let tray = new nw.Tray({title: 'Rex', tooltip: 'Rex2', icon: require('./assets/tray-icon.png'), iconsAreTemplates: false});

var menu = new nw.Menu();
menu.append(new nw.MenuItem({type: 'checkbox', label: 'box1'}));
tray.menu = menu;

console.log(JSON.stringify(tray));



var menu = new nw.Menu({ type: "menubar" });
menu.createMacBuiltin("Rex");

var submenu = new nw.Menu();

submenu.append(new nw.MenuItem({ label: "打开文件..." }));
submenu.append(new nw.MenuItem({ label: "Item B" }));

menu.append(new nw.MenuItem({ label: "文件", submenu }));


nw.Window.get().menu = menu;
