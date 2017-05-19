var menu = new nw.Menu({ type: "menubar" });
var submenu = new nw.Menu();

submenu.append(new nw.MenuItem({ label: "打开文件..." }));
submenu.append(new nw.MenuItem({ label: "Item B" }));

menu.append(new nw.MenuItem({ label: "文件", submenu }));

nw.Window.get().menu = menu;
