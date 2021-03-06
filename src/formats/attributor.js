import Parchment from 'parchment';


let Align = new Parchment.Attributor.Style('align', 'text-align', {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['left', 'right', 'center', 'justify']
});
let Direction = new Parchment.Attributor.Style('direction', 'direction', {
  scope: Parchment.Scope.BLOCK,
  whitelist: ['ltr', 'rtl']
});
let Indent = new Parchment.Attributor.Class('indent', 'ql-indent', {
  scope: Parchment.Scope.BLOCK
});

let Background = new Parchment.Attributor.Style('background', 'background-color', {
  scope: Parchment.Scope.INLINE
});
let Color = new Parchment.Attributor.Style('color', 'color', {
  scope: Parchment.Scope.INLINE
});
let Font = new Parchment.Attributor.Style('font', 'font-family', {
  scope: Parchment.Scope.INLINE
});
let Size = new Parchment.Attributor.Style('size', 'font-size', {
  scope: Parchment.Scope.INLINE
});

Parchment.register(Align);
Parchment.register(Direction);
Parchment.register(Indent);
Parchment.register(Background);
Parchment.register(Color);
Parchment.register(Font);
Parchment.register(Size);

export { Align, Direction, Indent, Background, Color, Font, Size };
