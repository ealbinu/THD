gdjs._481MainMenuCode={},gdjs._481MainMenuCode.GDGameTitleObjects1=[],gdjs._481MainMenuCode.GDGameTitleObjects2=[],gdjs._481MainMenuCode.GDGameTitleObjects3=[],gdjs._481MainMenuCode.GDButtonStartObjects1=[],gdjs._481MainMenuCode.GDButtonStartObjects2=[],gdjs._481MainMenuCode.GDButtonStartObjects3=[],gdjs._481MainMenuCode.GDinstructionsDeskObjects1=[],gdjs._481MainMenuCode.GDinstructionsDeskObjects2=[],gdjs._481MainMenuCode.GDinstructionsDeskObjects3=[],gdjs._481MainMenuCode.GDinstructionsMovObjects1=[],gdjs._481MainMenuCode.GDinstructionsMovObjects2=[],gdjs._481MainMenuCode.GDinstructionsMovObjects3=[],gdjs._481MainMenuCode.GDinstructions3Objects1=[],gdjs._481MainMenuCode.GDinstructions3Objects2=[],gdjs._481MainMenuCode.GDinstructions3Objects3=[],gdjs._481MainMenuCode.GDinstructions2Objects1=[],gdjs._481MainMenuCode.GDinstructions2Objects2=[],gdjs._481MainMenuCode.GDinstructions2Objects3=[],gdjs._481MainMenuCode.GDinstructionsObjects1=[],gdjs._481MainMenuCode.GDinstructionsObjects2=[],gdjs._481MainMenuCode.GDinstructionsObjects3=[],gdjs._481MainMenuCode.GDComojugarObjects1=[],gdjs._481MainMenuCode.GDComojugarObjects2=[],gdjs._481MainMenuCode.GDComojugarObjects3=[],gdjs._481MainMenuCode.GDBGObjects1=[],gdjs._481MainMenuCode.GDBGObjects2=[],gdjs._481MainMenuCode.GDBGObjects3=[],gdjs._481MainMenuCode.GDBGFloorObjects1=[],gdjs._481MainMenuCode.GDBGFloorObjects2=[],gdjs._481MainMenuCode.GDBGFloorObjects3=[],gdjs._481MainMenuCode.GDBNTRightObjects1=[],gdjs._481MainMenuCode.GDBNTRightObjects2=[],gdjs._481MainMenuCode.GDBNTRightObjects3=[],gdjs._481MainMenuCode.GDBNTLeftObjects1=[],gdjs._481MainMenuCode.GDBNTLeftObjects2=[],gdjs._481MainMenuCode.GDBNTLeftObjects3=[],gdjs._481MainMenuCode.GDcubetaObjects1=[],gdjs._481MainMenuCode.GDcubetaObjects2=[],gdjs._481MainMenuCode.GDcubetaObjects3=[],gdjs._481MainMenuCode.GDcubetax2Objects1=[],gdjs._481MainMenuCode.GDcubetax2Objects2=[],gdjs._481MainMenuCode.GDcubetax2Objects3=[],gdjs._481MainMenuCode.GDBTNcomenzarObjects1=[],gdjs._481MainMenuCode.GDBTNcomenzarObjects2=[],gdjs._481MainMenuCode.GDBTNcomenzarObjects3=[],gdjs._481MainMenuCode.GDTimerObjects1=[],gdjs._481MainMenuCode.GDTimerObjects2=[],gdjs._481MainMenuCode.GDTimerObjects3=[],gdjs._481MainMenuCode.GDmainbackgroundObjects1=[],gdjs._481MainMenuCode.GDmainbackgroundObjects2=[],gdjs._481MainMenuCode.GDmainbackgroundObjects3=[],gdjs._481MainMenuCode.GDShape3Objects1=[],gdjs._481MainMenuCode.GDShape3Objects2=[],gdjs._481MainMenuCode.GDShape3Objects3=[],gdjs._481MainMenuCode.GDShape2Objects1=[],gdjs._481MainMenuCode.GDShape2Objects2=[],gdjs._481MainMenuCode.GDShape2Objects3=[],gdjs._481MainMenuCode.GDShape1Objects1=[],gdjs._481MainMenuCode.GDShape1Objects2=[],gdjs._481MainMenuCode.GDShape1Objects3=[],gdjs._481MainMenuCode.GDtimebarObjects1=[],gdjs._481MainMenuCode.GDtimebarObjects2=[],gdjs._481MainMenuCode.GDtimebarObjects3=[],gdjs._481MainMenuCode.GDicPhoneObjects1=[],gdjs._481MainMenuCode.GDicPhoneObjects2=[],gdjs._481MainMenuCode.GDicPhoneObjects3=[],gdjs._481MainMenuCode.GDicComputerObjects1=[],gdjs._481MainMenuCode.GDicComputerObjects2=[],gdjs._481MainMenuCode.GDicComputerObjects3=[],gdjs._481MainMenuCode.GDBTNBackObjects1=[],gdjs._481MainMenuCode.GDBTNBackObjects2=[],gdjs._481MainMenuCode.GDBTNBackObjects3=[],gdjs._481MainMenuCode.GDTEXTBGObjects1=[],gdjs._481MainMenuCode.GDTEXTBGObjects2=[],gdjs._481MainMenuCode.GDTEXTBGObjects3=[],gdjs._481MainMenuCode.conditionTrue_0={val:!1},gdjs._481MainMenuCode.condition0IsTrue_0={val:!1},gdjs._481MainMenuCode.condition1IsTrue_0={val:!1},gdjs._481MainMenuCode.condition2IsTrue_0={val:!1},gdjs._481MainMenuCode.condition3IsTrue_0={val:!1},gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDButtonStartObjects1Objects=Hashtable.newFrom({ButtonStart:gdjs._481MainMenuCode.GDButtonStartObjects1}),gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNcomenzarObjects1Objects=Hashtable.newFrom({BTNcomenzar:gdjs._481MainMenuCode.GDBTNcomenzarObjects1}),gdjs._481MainMenuCode.eventsList0=function(e){if(gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.input.isMouseButtonPressed(e,"Left"),gdjs._481MainMenuCode.condition0IsTrue_0.val){gdjs.copyArray(gdjs._481MainMenuCode.GDBTNcomenzarObjects1,gdjs._481MainMenuCode.GDBTNcomenzarObjects2);for(var n=0,s=gdjs._481MainMenuCode.GDBTNcomenzarObjects2.length;n<s;++n)gdjs._481MainMenuCode.GDBTNcomenzarObjects2[n].setAnimationName("click")}gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.input.isMouseButtonReleased(e,"Left"),gdjs._481MainMenuCode.condition0IsTrue_0.val&&gdjs.evtTools.runtimeScene.replaceScene(e,"MainMenu2",!1)},gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNBackObjects1Objects=Hashtable.newFrom({BTNBack:gdjs._481MainMenuCode.GDBTNBackObjects1}),gdjs._481MainMenuCode.userFunc0x7a76c0=function(e){"use strict";window.top.postMessage(JSON.stringify({close:!0}),"*")},gdjs._481MainMenuCode.eventsList1=function(e){gdjs._481MainMenuCode.userFunc0x7a76c0(e)},gdjs._481MainMenuCode.eventsList2=function(e){if(gdjs.copyArray(e.getObjects("ButtonStart"),gdjs._481MainMenuCode.GDButtonStartObjects1),gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.input.cursorOnObject(gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDButtonStartObjects1Objects,e,!0,!0),gdjs._481MainMenuCode.condition0IsTrue_0.val)for(var n=0,s=gdjs._481MainMenuCode.GDButtonStartObjects1.length;n<s;++n)gdjs._481MainMenuCode.GDButtonStartObjects1[n].setAnimationName("StartNormal");gdjs.copyArray(e.getObjects("BTNcomenzar"),gdjs._481MainMenuCode.GDBTNcomenzarObjects1),gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.input.cursorOnObject(gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNcomenzarObjects1Objects,e,!0,!1),gdjs._481MainMenuCode.condition0IsTrue_0.val&&gdjs._481MainMenuCode.eventsList0(e),gdjs.copyArray(e.getObjects("BG"),gdjs._481MainMenuCode.GDBGObjects1),gdjs.copyArray(e.getObjects("BGFloor"),gdjs._481MainMenuCode.GDBGFloorObjects1),gdjs.copyArray(e.getObjects("instructions"),gdjs._481MainMenuCode.GDinstructionsObjects1),gdjs.copyArray(e.getObjects("instructions2"),gdjs._481MainMenuCode.GDinstructions2Objects1),gdjs.copyArray(e.getObjects("instructions3"),gdjs._481MainMenuCode.GDinstructions3Objects1),gdjs.copyArray(e.getObjects("instructionsDesk"),gdjs._481MainMenuCode.GDinstructionsDeskObjects1),gdjs.copyArray(e.getObjects("instructionsMov"),gdjs._481MainMenuCode.GDinstructionsMovObjects1);for(var n=0,s=gdjs._481MainMenuCode.GDBGObjects1.length;n<s;++n)gdjs._481MainMenuCode.GDBGObjects1[n].drawRoundedRectangle(0,0,576,790,10);for(var n=0,s=gdjs._481MainMenuCode.GDBGFloorObjects1.length;n<s;++n)gdjs._481MainMenuCode.GDBGFloorObjects1[n].drawRectangle(0,0,gdjs.evtTools.window.getWindowInnerWidth(),160);for(var n=0,s=gdjs._481MainMenuCode.GDinstructionsObjects1.length;n<s;++n)gdjs._481MainMenuCode.GDinstructionsObjects1[n].setTextAlignment("center");for(var n=0,s=gdjs._481MainMenuCode.GDinstructions2Objects1.length;n<s;++n)gdjs._481MainMenuCode.GDinstructions2Objects1[n].setTextAlignment("center");for(var n=0,s=gdjs._481MainMenuCode.GDinstructionsMovObjects1.length;n<s;++n)gdjs._481MainMenuCode.GDinstructionsMovObjects1[n].setTextAlignment("center");for(var n=0,s=gdjs._481MainMenuCode.GDinstructions3Objects1.length;n<s;++n)gdjs._481MainMenuCode.GDinstructions3Objects1[n].setTextAlignment("center");for(var n=0,s=gdjs._481MainMenuCode.GDinstructionsDeskObjects1.length;n<s;++n)gdjs._481MainMenuCode.GDinstructionsDeskObjects1[n].setTextAlignment("center");gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition1IsTrue_0.val=!1,gdjs._481MainMenuCode.condition2IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.input.isKeyPressed(e,"d"),gdjs._481MainMenuCode.condition0IsTrue_0.val&&(gdjs._481MainMenuCode.condition1IsTrue_0.val=gdjs.evtTools.input.isKeyPressed(e,"e"),gdjs._481MainMenuCode.condition1IsTrue_0.val&&(gdjs._481MainMenuCode.condition2IsTrue_0.val=gdjs.evtTools.input.isKeyPressed(e,"v"))),gdjs._481MainMenuCode.condition2IsTrue_0.val&&gdjs.evtTools.runtimeScene.replaceScene(e,"EndScene",!1),gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition1IsTrue_0.val=!1,gdjs._481MainMenuCode.condition2IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.input.isKeyPressed(e,"d"),gdjs._481MainMenuCode.condition0IsTrue_0.val&&(gdjs._481MainMenuCode.condition1IsTrue_0.val=gdjs.evtTools.input.isKeyPressed(e,"e"),gdjs._481MainMenuCode.condition1IsTrue_0.val&&(gdjs._481MainMenuCode.condition2IsTrue_0.val=gdjs.evtTools.input.isKeyPressed(e,"b"))),gdjs._481MainMenuCode.condition2IsTrue_0.val&&(gdjs.evtTools.runtimeScene.replaceScene(e,"EndScene",!1),e.getGame().getVariables().getFromIndex(0).setNumber(15999)),gdjs.copyArray(e.getObjects("BTNBack"),gdjs._481MainMenuCode.GDBTNBackObjects1),gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition1IsTrue_0.val=!1,gdjs._481MainMenuCode.condition2IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.input.cursorOnObject(gdjs._481MainMenuCode.mapOfGDgdjs_46_95481MainMenuCode_46GDBTNBackObjects1Objects,e,!0,!1),gdjs._481MainMenuCode.condition0IsTrue_0.val&&(gdjs._481MainMenuCode.condition1IsTrue_0.val=gdjs.evtTools.input.isMouseButtonPressed(e,"Left"),gdjs._481MainMenuCode.condition1IsTrue_0.val&&(gdjs._481MainMenuCode.condition2IsTrue_0.val=gdjs.evtTools.runtimeScene.timerElapsedTime(e,2,"BackButtonTimer"))),gdjs._481MainMenuCode.condition2IsTrue_0.val&&gdjs._481MainMenuCode.eventsList1(e),gdjs._481MainMenuCode.condition0IsTrue_0.val=!1,gdjs._481MainMenuCode.condition0IsTrue_0.val=gdjs.evtTools.runtimeScene.sceneJustBegins(e),gdjs._481MainMenuCode.condition0IsTrue_0.val&&gdjs.evtTools.runtimeScene.resetTimer(e,"BackButtonTimer")},gdjs._481MainMenuCode.func=function(e){e.getOnceTriggers().startNewFrame(),gdjs._481MainMenuCode.GDGameTitleObjects1.length=0,gdjs._481MainMenuCode.GDGameTitleObjects2.length=0,gdjs._481MainMenuCode.GDGameTitleObjects3.length=0,gdjs._481MainMenuCode.GDButtonStartObjects1.length=0,gdjs._481MainMenuCode.GDButtonStartObjects2.length=0,gdjs._481MainMenuCode.GDButtonStartObjects3.length=0,gdjs._481MainMenuCode.GDinstructionsDeskObjects1.length=0,gdjs._481MainMenuCode.GDinstructionsDeskObjects2.length=0,gdjs._481MainMenuCode.GDinstructionsDeskObjects3.length=0,gdjs._481MainMenuCode.GDinstructionsMovObjects1.length=0,gdjs._481MainMenuCode.GDinstructionsMovObjects2.length=0,gdjs._481MainMenuCode.GDinstructionsMovObjects3.length=0,gdjs._481MainMenuCode.GDinstructions3Objects1.length=0,gdjs._481MainMenuCode.GDinstructions3Objects2.length=0,gdjs._481MainMenuCode.GDinstructions3Objects3.length=0,gdjs._481MainMenuCode.GDinstructions2Objects1.length=0,gdjs._481MainMenuCode.GDinstructions2Objects2.length=0,gdjs._481MainMenuCode.GDinstructions2Objects3.length=0,gdjs._481MainMenuCode.GDinstructionsObjects1.length=0,gdjs._481MainMenuCode.GDinstructionsObjects2.length=0,gdjs._481MainMenuCode.GDinstructionsObjects3.length=0,gdjs._481MainMenuCode.GDComojugarObjects1.length=0,gdjs._481MainMenuCode.GDComojugarObjects2.length=0,gdjs._481MainMenuCode.GDComojugarObjects3.length=0,gdjs._481MainMenuCode.GDBGObjects1.length=0,gdjs._481MainMenuCode.GDBGObjects2.length=0,gdjs._481MainMenuCode.GDBGObjects3.length=0,gdjs._481MainMenuCode.GDBGFloorObjects1.length=0,gdjs._481MainMenuCode.GDBGFloorObjects2.length=0,gdjs._481MainMenuCode.GDBGFloorObjects3.length=0,gdjs._481MainMenuCode.GDBNTRightObjects1.length=0,gdjs._481MainMenuCode.GDBNTRightObjects2.length=0,gdjs._481MainMenuCode.GDBNTRightObjects3.length=0,gdjs._481MainMenuCode.GDBNTLeftObjects1.length=0,gdjs._481MainMenuCode.GDBNTLeftObjects2.length=0,gdjs._481MainMenuCode.GDBNTLeftObjects3.length=0,gdjs._481MainMenuCode.GDcubetaObjects1.length=0,gdjs._481MainMenuCode.GDcubetaObjects2.length=0,gdjs._481MainMenuCode.GDcubetaObjects3.length=0,gdjs._481MainMenuCode.GDcubetax2Objects1.length=0,gdjs._481MainMenuCode.GDcubetax2Objects2.length=0,gdjs._481MainMenuCode.GDcubetax2Objects3.length=0,gdjs._481MainMenuCode.GDBTNcomenzarObjects1.length=0,gdjs._481MainMenuCode.GDBTNcomenzarObjects2.length=0,gdjs._481MainMenuCode.GDBTNcomenzarObjects3.length=0,gdjs._481MainMenuCode.GDTimerObjects1.length=0,gdjs._481MainMenuCode.GDTimerObjects2.length=0,gdjs._481MainMenuCode.GDTimerObjects3.length=0,gdjs._481MainMenuCode.GDmainbackgroundObjects1.length=0,gdjs._481MainMenuCode.GDmainbackgroundObjects2.length=0,gdjs._481MainMenuCode.GDmainbackgroundObjects3.length=0,gdjs._481MainMenuCode.GDShape3Objects1.length=0,gdjs._481MainMenuCode.GDShape3Objects2.length=0,gdjs._481MainMenuCode.GDShape3Objects3.length=0,gdjs._481MainMenuCode.GDShape2Objects1.length=0,gdjs._481MainMenuCode.GDShape2Objects2.length=0,gdjs._481MainMenuCode.GDShape2Objects3.length=0,gdjs._481MainMenuCode.GDShape1Objects1.length=0,gdjs._481MainMenuCode.GDShape1Objects2.length=0,gdjs._481MainMenuCode.GDShape1Objects3.length=0,gdjs._481MainMenuCode.GDtimebarObjects1.length=0,gdjs._481MainMenuCode.GDtimebarObjects2.length=0,gdjs._481MainMenuCode.GDtimebarObjects3.length=0,gdjs._481MainMenuCode.GDicPhoneObjects1.length=0,gdjs._481MainMenuCode.GDicPhoneObjects2.length=0,gdjs._481MainMenuCode.GDicPhoneObjects3.length=0,gdjs._481MainMenuCode.GDicComputerObjects1.length=0,gdjs._481MainMenuCode.GDicComputerObjects2.length=0,gdjs._481MainMenuCode.GDicComputerObjects3.length=0,gdjs._481MainMenuCode.GDBTNBackObjects1.length=0,gdjs._481MainMenuCode.GDBTNBackObjects2.length=0,gdjs._481MainMenuCode.GDBTNBackObjects3.length=0,gdjs._481MainMenuCode.GDTEXTBGObjects1.length=0,gdjs._481MainMenuCode.GDTEXTBGObjects2.length=0,gdjs._481MainMenuCode.GDTEXTBGObjects3.length=0,gdjs._481MainMenuCode.eventsList2(e)},gdjs._481MainMenuCode=gdjs._481MainMenuCode;