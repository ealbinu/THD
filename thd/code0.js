gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDGameTitleObjects3= [];
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects3= [];
gdjs.MainMenuCode.GDinstructions3Objects1= [];
gdjs.MainMenuCode.GDinstructions3Objects2= [];
gdjs.MainMenuCode.GDinstructions3Objects3= [];
gdjs.MainMenuCode.GDinstructions2Objects1= [];
gdjs.MainMenuCode.GDinstructions2Objects2= [];
gdjs.MainMenuCode.GDinstructions2Objects3= [];
gdjs.MainMenuCode.GDinstructionsObjects1= [];
gdjs.MainMenuCode.GDinstructionsObjects2= [];
gdjs.MainMenuCode.GDinstructionsObjects3= [];
gdjs.MainMenuCode.GDComojugarObjects1= [];
gdjs.MainMenuCode.GDComojugarObjects2= [];
gdjs.MainMenuCode.GDComojugarObjects3= [];
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];
gdjs.MainMenuCode.GDBGObjects3= [];
gdjs.MainMenuCode.GDBGFloorObjects1= [];
gdjs.MainMenuCode.GDBGFloorObjects2= [];
gdjs.MainMenuCode.GDBGFloorObjects3= [];
gdjs.MainMenuCode.GDBNTRightObjects1= [];
gdjs.MainMenuCode.GDBNTRightObjects2= [];
gdjs.MainMenuCode.GDBNTRightObjects3= [];
gdjs.MainMenuCode.GDBNTLeftObjects1= [];
gdjs.MainMenuCode.GDBNTLeftObjects2= [];
gdjs.MainMenuCode.GDBNTLeftObjects3= [];
gdjs.MainMenuCode.GDcubetaObjects1= [];
gdjs.MainMenuCode.GDcubetaObjects2= [];
gdjs.MainMenuCode.GDcubetaObjects3= [];
gdjs.MainMenuCode.GDcubetax2Objects1= [];
gdjs.MainMenuCode.GDcubetax2Objects2= [];
gdjs.MainMenuCode.GDcubetax2Objects3= [];
gdjs.MainMenuCode.GDBTNcomenzarObjects1= [];
gdjs.MainMenuCode.GDBTNcomenzarObjects2= [];
gdjs.MainMenuCode.GDBTNcomenzarObjects3= [];
gdjs.MainMenuCode.GDTimerObjects1= [];
gdjs.MainMenuCode.GDTimerObjects2= [];
gdjs.MainMenuCode.GDTimerObjects3= [];
gdjs.MainMenuCode.GDmainbackgroundObjects1= [];
gdjs.MainMenuCode.GDmainbackgroundObjects2= [];
gdjs.MainMenuCode.GDmainbackgroundObjects3= [];
gdjs.MainMenuCode.GDtimebarObjects1= [];
gdjs.MainMenuCode.GDtimebarObjects2= [];
gdjs.MainMenuCode.GDtimebarObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDBTNcomenzarObjects1Objects = Hashtable.newFrom({"BTNcomenzar": gdjs.MainMenuCode.GDBTNcomenzarObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDBTNcomenzarObjects1, gdjs.MainMenuCode.GDBTNcomenzarObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDBTNcomenzarObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBTNcomenzarObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTNcomenzar"), gdjs.MainMenuCode.GDBTNcomenzarObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDBTNcomenzarObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MainMenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("BGFloor"), gdjs.MainMenuCode.GDBGFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions"), gdjs.MainMenuCode.GDinstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("instructions2"), gdjs.MainMenuCode.GDinstructions2Objects1);
gdjs.copyArray(runtimeScene.getObjects("instructions3"), gdjs.MainMenuCode.GDinstructions3Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBGObjects1[i].drawRoundedRectangle(0, 0, 576, 790, 10);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBGFloorObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBGFloorObjects1[i].drawRectangle(0, 0, gdjs.evtTools.window.getWindowInnerWidth(), 160);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDinstructionsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructionsObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDinstructions2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructions2Objects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDinstructions3Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDinstructions3Objects1[i].setTextAlignment("center");
}
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects3.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs.MainMenuCode.GDinstructions3Objects1.length = 0;
gdjs.MainMenuCode.GDinstructions3Objects2.length = 0;
gdjs.MainMenuCode.GDinstructions3Objects3.length = 0;
gdjs.MainMenuCode.GDinstructions2Objects1.length = 0;
gdjs.MainMenuCode.GDinstructions2Objects2.length = 0;
gdjs.MainMenuCode.GDinstructions2Objects3.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects1.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects2.length = 0;
gdjs.MainMenuCode.GDinstructionsObjects3.length = 0;
gdjs.MainMenuCode.GDComojugarObjects1.length = 0;
gdjs.MainMenuCode.GDComojugarObjects2.length = 0;
gdjs.MainMenuCode.GDComojugarObjects3.length = 0;
gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;
gdjs.MainMenuCode.GDBGObjects3.length = 0;
gdjs.MainMenuCode.GDBGFloorObjects1.length = 0;
gdjs.MainMenuCode.GDBGFloorObjects2.length = 0;
gdjs.MainMenuCode.GDBGFloorObjects3.length = 0;
gdjs.MainMenuCode.GDBNTRightObjects1.length = 0;
gdjs.MainMenuCode.GDBNTRightObjects2.length = 0;
gdjs.MainMenuCode.GDBNTRightObjects3.length = 0;
gdjs.MainMenuCode.GDBNTLeftObjects1.length = 0;
gdjs.MainMenuCode.GDBNTLeftObjects2.length = 0;
gdjs.MainMenuCode.GDBNTLeftObjects3.length = 0;
gdjs.MainMenuCode.GDcubetaObjects1.length = 0;
gdjs.MainMenuCode.GDcubetaObjects2.length = 0;
gdjs.MainMenuCode.GDcubetaObjects3.length = 0;
gdjs.MainMenuCode.GDcubetax2Objects1.length = 0;
gdjs.MainMenuCode.GDcubetax2Objects2.length = 0;
gdjs.MainMenuCode.GDcubetax2Objects3.length = 0;
gdjs.MainMenuCode.GDBTNcomenzarObjects1.length = 0;
gdjs.MainMenuCode.GDBTNcomenzarObjects2.length = 0;
gdjs.MainMenuCode.GDBTNcomenzarObjects3.length = 0;
gdjs.MainMenuCode.GDTimerObjects1.length = 0;
gdjs.MainMenuCode.GDTimerObjects2.length = 0;
gdjs.MainMenuCode.GDTimerObjects3.length = 0;
gdjs.MainMenuCode.GDmainbackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDmainbackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDmainbackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDtimebarObjects1.length = 0;
gdjs.MainMenuCode.GDtimebarObjects2.length = 0;
gdjs.MainMenuCode.GDtimebarObjects3.length = 0;

gdjs.MainMenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
