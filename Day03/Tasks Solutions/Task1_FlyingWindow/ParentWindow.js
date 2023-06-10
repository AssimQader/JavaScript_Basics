let win = open("ChildWindow.html", "", "width=100, height=100");
win.focus();

let id;
id = setInterval(function moveWindow()
{
  win.moveBy(50, 50);
}, 300);

function stopMoving()
{
  clearInterval(id);
  win.focus();
}


