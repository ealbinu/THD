gdjs.TextRuntimeObject=function(t,e){gdjs.RuntimeObject.call(this,t,e),this._characterSize=Math.max(1,e.characterSize),this._fontName=e.font,this._bold=e.bold,this._italic=e.italic,this._underlined=e.underlined,this._color=[e.color.r,e.color.g,e.color.b],this._useGradient=!1,this._gradient=[],this._gradientType="",this.opacity=255,this._textAlign="left",this._wrapping=!1,this._wrappingWidth=1,this._outlineThickness=0,this._outlineColor=[255,255,255],this._shadow=!1,this._shadowColor=[0,0,0],this._shadowDistance=1,this._shadowBlur=1,this._shadowAngle=0,this._padding=5,this._scaleX=1,this._scaleY=1,this._str=e.string,this._renderer?gdjs.TextRuntimeObjectRenderer.call(this._renderer,this,t):this._renderer=new gdjs.TextRuntimeObjectRenderer(this,t),this.onCreated()},gdjs.TextRuntimeObject.prototype=Object.create(gdjs.RuntimeObject.prototype),gdjs.registerObject("TextObject::Text",gdjs.TextRuntimeObject),gdjs.TextRuntimeObject.prototype.updateFromObjectData=function(t,e){return t.characterSize!==e.characterSize&&this.setCharacterSize(e.characterSize),t.font!==e.font&&this.setFontName(e.font),t.bold!==e.bold&&this.setBold(e.bold),t.italic!==e.italic&&this.setItalic(e.italic),t.color.r===e.color.r&&t.color.g===e.color.g&&t.color.b===e.color.b||this.setColor(e.color.r+";"+e.color.g+";"+e.color.b),t.string!==e.string&&this.setString(e.string),t.underlined===e.underlined},gdjs.TextRuntimeObject.prototype.getRendererObject=function(){return this._renderer.getRendererObject()},gdjs.TextRuntimeObject.prototype.update=function(){this._renderer.ensureUpToDate()},gdjs.TextRuntimeObject.prototype.extraInitializationFromInitialInstance=function(t){t.customSize?(this.setWrapping(!0),this.setWrappingWidth(t.width)):this.setWrapping(!1)},gdjs.TextRuntimeObject.prototype._updateTextPosition=function(){this.hitBoxesDirty=!0,this._renderer.updatePosition()},gdjs.TextRuntimeObject.prototype.setX=function(t){gdjs.RuntimeObject.prototype.setX.call(this,t),this._updateTextPosition()},gdjs.TextRuntimeObject.prototype.setY=function(t){gdjs.RuntimeObject.prototype.setY.call(this,t),this._updateTextPosition()},gdjs.TextRuntimeObject.prototype.setAngle=function(t){gdjs.RuntimeObject.prototype.setAngle.call(this,t),this._renderer.updateAngle()},gdjs.TextRuntimeObject.prototype.setOpacity=function(t){t<0&&(t=0),t>255&&(t=255),this.opacity=t,this._renderer.updateOpacity()},gdjs.TextRuntimeObject.prototype.getOpacity=function(){return this.opacity},gdjs.TextRuntimeObject.prototype.getString=function(){return this._str},gdjs.TextRuntimeObject.prototype.setString=function(t){t!==this._str&&(this._str=t,this._renderer.updateString(),this._updateTextPosition())},gdjs.TextRuntimeObject.prototype.getCharacterSize=function(){return this._characterSize},gdjs.TextRuntimeObject.prototype.setCharacterSize=function(t){t<=1&&(t=1),this._characterSize=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.setFontName=function(t){this._fontName=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.isBold=function(){return this._bold},gdjs.TextRuntimeObject.prototype.setBold=function(t){this._bold=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.isItalic=function(){return this._italic},gdjs.TextRuntimeObject.prototype.setItalic=function(t){this._italic=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.getWidth=function(){return this._renderer.getWidth()},gdjs.TextRuntimeObject.prototype.getHeight=function(){return this._renderer.getHeight()},gdjs.TextRuntimeObject.prototype.getScale=function(){return(Math.abs(this._scaleX)+Math.abs(this._scaleY))/2},gdjs.TextRuntimeObject.prototype.getScaleX=function(){return this._renderer.getScaleX()},gdjs.TextRuntimeObject.prototype.getScaleY=function(){return this._renderer.getScaleY()},gdjs.TextRuntimeObject.prototype.setScale=function(t){this._scaleX=t,this._scaleY=t,this._renderer.setScale(t)},gdjs.TextRuntimeObject.prototype.setScaleX=function(t){this._scaleX=t,this._renderer.setScaleX(t)},gdjs.TextRuntimeObject.prototype.setScaleY=function(t){this._scaleY=t,this._renderer.setScaleY(t)},gdjs.TextRuntimeObject.prototype.setColor=function(t){var e=t.split(";");e.length<3||(this._color[0]=parseInt(e[0],10),this._color[1]=parseInt(e[1],10),this._color[2]=parseInt(e[2],10),this._useGradient=!1,this._renderer.updateStyle())},gdjs.TextRuntimeObject.prototype.getColor=function(t){return this._color[0]+";"+this._color[1]+";"+this._color[2]},gdjs.TextRuntimeObject.prototype.setTextAlignment=function(t){this._textAlign=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.getTextAlignment=function(){return this._textAlign},gdjs.TextRuntimeObject.prototype.isWrapping=function(){return this._wrapping},gdjs.TextRuntimeObject.prototype.setWrapping=function(t){this._wrapping=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.getWrappingWidth=function(){return this._wrappingWidth},gdjs.TextRuntimeObject.prototype.setWrappingWidth=function(t){t<=1&&(t=1),this._wrappingWidth=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.setOutline=function(t,e){var i=t.split(";");i.length<3||(this._outlineColor[0]=parseInt(i[0],10),this._outlineColor[1]=parseInt(i[1],10),this._outlineColor[2]=parseInt(i[2],10),this._outlineThickness=e,this._renderer.updateStyle())},gdjs.TextRuntimeObject.prototype.setShadow=function(t,e,i,r){var n=t.split(";");n.length<3||(this._shadowColor[0]=parseInt(n[0],10),this._shadowColor[1]=parseInt(n[1],10),this._shadowColor[2]=parseInt(n[2],10),this._shadowDistance=e,this._shadowBlur=i,this._shadowAngle=r,this._shadow=!0,this._renderer.updateStyle())},gdjs.TextRuntimeObject.prototype.setGradient=function(t,e,i,r,n){var s=e.split(";"),o=i.split(";"),p=r.split(";"),c=n.split(";");this._gradient=[],3==s.length&&this._gradient.push([parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10)]),3==o.length&&this._gradient.push([parseInt(o[0],10),parseInt(o[1],10),parseInt(o[2],10)]),3==p.length&&this._gradient.push([parseInt(p[0],10),parseInt(p[1],10),parseInt(p[2],10)]),3==c.length&&this._gradient.push([parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]),this._gradientType=t,this._useGradient=this._gradient.length>1,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.showShadow=function(t){this._shadow=t,this._renderer.updateStyle()},gdjs.TextRuntimeObject.prototype.getPadding=function(){return this._padding},gdjs.TextRuntimeObject.prototype.setPadding=function(t){this._padding=t,this._renderer.updateStyle()};