CKEDITOR.dialog.add("scaytDialog",function(t){var e=t.scayt,i='<p><img src="'+e.getLogo()+'" /></p><p>'+e.getLocal("version")+e.getVersion()+"</p><p>"+e.getLocal("text_copyrights")+"</p>",n=CKEDITOR.document,a={isChanged:function(){return null===this.newLang||this.currentLang===this.newLang?!1:!0},currentLang:e.getLang(),newLang:null,reset:function(){this.currentLang=e.getLang(),this.newLang=null},id:"lang"},i=[{id:"options",label:e.getLocal("tab_options"),onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var t,i=e.getApplicationConfig(),n=[],a={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"};for(t in i)i={type:"checkbox"},i.id=t,i.label=e.getLocal(a[t]),n.push(i);return n}(),onShow:function(){this.getChild();for(var e=t.scayt,i=0;i<this.getChild().length;i++)this.getChild()[i].setValue(e.getApplicationConfig()[this.getChild()[i].id])}}]},{id:"langs",label:e.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;margin-bottom:15px;",html:'<div><div style="float:left;width:45%;margin-left:5px;" id="left-col-'+t.name+'" class="scayt-lang-list"></div><div style="float:left;width:45%;margin-left:15px;" id="right-col-'+t.name+'" class="scayt-lang-list"></div></div>',onShow:function(){var e=t.scayt.getLang();n.getById("scaytLang_"+t.name+"_"+e).$.checked=!0}},{type:"html",id:"graytLanguagesHint",html:'<div style="margin:5px auto; width:95%;white-space:normal;" id="'+t.name+'graytLanguagesHint"><span style="width:10px;height:10px;display: inline-block; background:#02b620;vertical-align:top;margin-top:2px;"></span> - This languages are supported by Grammar As You Type(GRAYT).</div>',onShow:function(){var e=n.getById(t.name+"graytLanguagesHint");t.config.grayt_autoStartup||(e.$.style.display="none")}}]}]},{id:"dictionaries",label:e.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:e.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(e){var i=e.sender,n=t.scayt;e=SCAYT.prototype.UILib;var a=i.getContentElement("dictionaries","dictionaryName").getInputElement().$;n.isLicensed()||(a.disabled=!0,e.css(a,{cursor:"not-allowed"})),setTimeout(function(){i.getContentElement("dictionaries","dictionaryNote").getElement().setText(""),null!=n.getUserDictionaryName()&&""!=n.getUserDictionaryName()&&i.getContentElement("dictionaries","dictionaryName").setValue(n.getUserDictionaryName())},0)}},{type:"hbox",id:"udButtonsHolder",align:"left",widths:["auto"],style:"width:auto;",children:[{type:"button",id:"createDic",label:e.getLocal("btn_createDic"),title:e.getLocal("btn_createDic"),onLoad:function(){this.getDialog();var e=t.scayt,i=SCAYT.prototype.UILib,n=this.getElement().$,a=this.getElement().getChild(0).$;e.isLicensed()||(i.css(n,{cursor:"not-allowed"}),i.css(a,{cursor:"not-allowed"}))},onClick:function(){var e=this.getDialog(),i=o,n=t.scayt,a=e.getContentElement("dictionaries","dictionaryName").getValue();n.isLicensed()&&n.createUserDictionary(a,function(n){n.error||i.toggleDictionaryState.call(e,"dictionaryState"),n.dialog=e,n.command="create",n.name=a,t.fire("scaytUserDictionaryAction",n)},function(i){i.dialog=e,i.command="create",i.name=a,t.fire("scaytUserDictionaryActionError",i)})}},{type:"button",id:"restoreDic",label:e.getLocal("btn_connectDic"),title:e.getLocal("btn_connectDic"),onLoad:function(){this.getDialog();var e=t.scayt,i=SCAYT.prototype.UILib,n=this.getElement().$,a=this.getElement().getChild(0).$;e.isLicensed()||(i.css(n,{cursor:"not-allowed"}),i.css(a,{cursor:"not-allowed"}))},onClick:function(){var e=this.getDialog(),i=t.scayt,n=o,a=e.getContentElement("dictionaries","dictionaryName").getValue();i.isLicensed()&&i.restoreUserDictionary(a,function(i){i.dialog=e,i.error||n.toggleDictionaryState.call(e,"dictionaryState"),i.command="restore",i.name=a,t.fire("scaytUserDictionaryAction",i)},function(i){i.dialog=e,i.command="restore",i.name=a,t.fire("scaytUserDictionaryActionError",i)})}},{type:"button",id:"disconnectDic",label:e.getLocal("btn_disconnectDic"),title:e.getLocal("btn_disconnectDic"),onClick:function(){var e=this.getDialog(),i=t.scayt,n=o,a=e.getContentElement("dictionaries","dictionaryName"),r=a.getValue();i.isLicensed()&&(i.disconnectFromUserDictionary({}),a.setValue(""),n.toggleDictionaryState.call(e,"initialState"),t.fire("scaytUserDictionaryAction",{dialog:e,command:"disconnect",name:r}))}},{type:"button",id:"removeDic",label:e.getLocal("btn_deleteDic"),title:e.getLocal("btn_deleteDic"),onClick:function(){var e=this.getDialog(),i=t.scayt,n=o,a=e.getContentElement("dictionaries","dictionaryName"),r=a.getValue();i.isLicensed()&&i.removeUserDictionary(r,function(i){a.setValue(""),i.error||n.toggleDictionaryState.call(e,"initialState"),i.dialog=e,i.command="remove",i.name=r,t.fire("scaytUserDictionaryAction",i)},function(i){i.dialog=e,i.command="remove",i.name=r,t.fire("scaytUserDictionaryActionError",i)})}},{type:"button",id:"renameDic",label:e.getLocal("btn_renameDic"),title:e.getLocal("btn_renameDic"),onClick:function(){var e=this.getDialog(),i=t.scayt,n=e.getContentElement("dictionaries","dictionaryName").getValue();i.isLicensed()&&i.renameUserDictionary(n,function(i){i.dialog=e,i.command="rename",i.name=n,t.fire("scaytUserDictionaryAction",i)},function(i){i.dialog=e,i.command="rename",i.name=n,t.fire("scaytUserDictionaryActionError",i)})}},{type:"button",id:"editDic",label:e.getLocal("btn_goToDic"),title:e.getLocal("btn_goToDic"),onLoad:function(){this.getDialog()},onClick:function(){var t=this.getDialog(),e=t.getContentElement("dictionaries","addWordField");o.clearWordList.call(t),e.setValue(""),o.getUserDictionary.call(t),o.toggleDictionaryState.call(t,"wordsState")}}]},{type:"hbox",id:"dicInfo",align:"left",children:[{type:"html",id:"dicInfoHtml",html:'<div id="dic_info_editor1" style="margin:5px auto; width:95%;white-space:normal;">'+(t.scayt.isLicensed&&t.scayt.isLicensed()?e.getLocal("text_descriptionDicForPaid"):e.getLocal("text_descriptionDicForFree"))+"</div>"}]},{id:"addWordAction",type:"hbox",style:"width: 100%; margin-bottom: 0;",widths:["40%","60%"],children:[{id:"addWord",type:"vbox",style:"min-width: 150px;",children:[{type:"text",id:"addWordField",label:"Add word",maxLength:"64"}]},{id:"addWordButtons",type:"vbox",style:"margin-top: 20px;",children:[{type:"hbox",id:"addWordButton",align:"left",children:[{type:"button",id:"addWord",label:e.getLocal("btn_addWord"),title:e.getLocal("btn_addWord"),onClick:function(){var e=this.getDialog(),i=t.scayt,n=e.getContentElement("dictionaries","itemList"),a=e.getContentElement("dictionaries","addWordField"),o=a.getValue(),r=i.getOption("wordBoundaryRegex"),c=this;o&&(-1!==o.search(r)?t.fire("scaytUserDictionaryAction",{dialog:e,command:"wordWithBannedSymbols",name:o,error:!0}):n.inChildren(o)?(a.setValue(""),t.fire("scaytUserDictionaryAction",{dialog:e,command:"wordAlreadyAdded",name:o})):(this.disable(),i.addWordToUserDictionary(o,function(i){i.error||(a.setValue(""),n.addChild(o,!0)),i.dialog=e,i.command="addWord",i.name=o,c.enable(),t.fire("scaytUserDictionaryAction",i)},function(i){i.dialog=e,i.command="addWord",i.name=o,c.enable(),t.fire("scaytUserDictionaryActionError",i)})))}},{type:"button",id:"backToDic",label:e.getLocal("btn_dictionaryPreferences"),title:e.getLocal("btn_dictionaryPreferences"),align:"right",onClick:function(){var e=this.getDialog(),i=t.scayt;null!=i.getUserDictionaryName()&&""!=i.getUserDictionaryName()?o.toggleDictionaryState.call(e,"dictionaryState"):o.toggleDictionaryState.call(e,"initialState")}}]}]}]},{id:"wordsHolder",type:"hbox",style:"width: 100%; height: 170px; margin-bottom: 0;",children:[{type:"scaytItemList",id:"itemList",align:"left",style:"width: 100%; height: 170px; overflow: auto",onClick:function(e){e=e.data.$;var i=t.scayt,n=SCAYT.prototype.UILib,a=n.parent(e.target)[0],o=n.attr(a,"data-cke-scayt-ud-word"),r=this.getDialog(),c=r.getContentElement("dictionaries","itemList");n.hasClass(e.target,"cke_scaytItemList_remove")&&i.deleteWordFromUserDictionary(o,function(e){e.error||c.removeChild(a,o),e.dialog=r,e.command="deleteWord",e.name=o,t.fire("scaytUserDictionaryAction",e)},function(e){e.dialog=r,e.command="deleteWord",e.name=o,t.fire("scaytUserDictionaryActionError",e)})}}]}]}]},{id:"about",label:e.getLocal("tab_about"),elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div><div id="scayt_about_">'+i+"</div></div>"}]}];t.on("scaytUserDictionaryAction",function(t){var e,i=SCAYT.prototype.UILib,n=t.data.dialog,a=n.getContentElement("dictionaries","dictionaryNote").getElement(),o=t.editor.scayt;void 0===t.data.error?(e=o.getLocal("message_success_"+t.data.command+"Dic"),e=e.replace("%s",t.data.name),a.setText(e),i.css(a.$,{color:"blue"})):(""===t.data.name?a.setText(o.getLocal("message_info_emptyDic")):(e=o.getLocal("message_error_"+t.data.command+"Dic"),e=e.replace("%s",t.data.name),a.setText(e)),i.css(a.$,{color:"red"}),null!=o.getUserDictionaryName()&&""!=o.getUserDictionaryName()?n.getContentElement("dictionaries","dictionaryName").setValue(o.getUserDictionaryName()):n.getContentElement("dictionaries","dictionaryName").setValue(""))}),t.on("scaytUserDictionaryActionError",function(t){var e,i=SCAYT.prototype.UILib,n=t.data.dialog,a=n.getContentElement("dictionaries","dictionaryNote").getElement(),o=t.editor.scayt;""===t.data.name?a.setText(o.getLocal("message_info_emptyDic")):(e=o.getLocal("message_error_"+t.data.command+"Dic"),e=e.replace("%s",t.data.name),a.setText(e)),i.css(a.$,{color:"red"}),null!=o.getUserDictionaryName()&&""!=o.getUserDictionaryName()?n.getContentElement("dictionaries","dictionaryName").setValue(o.getUserDictionaryName()):n.getContentElement("dictionaries","dictionaryName").setValue("")});var o={title:e.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:"moono-lisa"==(CKEDITOR.skinName||t.config.skin)?450:340,minHeight:300,onLoad:function(){if(0!=t.config.scayt_uiTabs[1]){var e=o,i=e.getLangBoxes.call(this);this.getContentElement("dictionaries","addWordField"),i.getParent().setStyle("white-space","normal"),e.renderLangList(i),this.definition.minWidth=this.getSize().width,this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){a.reset()},onHide:function(){t.unlockSelection()},onShow:function(){if(t.fire("scaytDialogShown",this),0!=t.config.scayt_uiTabs[2]){var e=this.getContentElement("dictionaries","addWordField");o.clearWordList.call(this),e.setValue(""),o.getUserDictionary.call(this),o.toggleDictionaryState.call(this,"wordsState")}},onOk:function(){var e=o,i=t.scayt;this.getContentElement("options","scaytOptions"),e=e.getChangedOption.call(this),i.commitOption({changedOptions:e})},toggleDictionaryButtons:function(t){var e=this.getContentElement("dictionaries","existDic").getElement().getParent(),i=this.getContentElement("dictionaries","notExistDic").getElement().getParent();t?(e.show(),i.hide()):(e.hide(),i.show())},getChangedOption:function(){var e={};if(1==t.config.scayt_uiTabs[0])for(var i=this.getContentElement("options","scaytOptions").getChild(),n=0;n<i.length;n++)i[n].isChanged()&&(e[i[n].id]=i[n].getValue());return a.isChanged()&&(e[a.id]=t.config.scayt_sLang=a.currentLang=a.newLang),e},buildRadioInputs:function(e,i,n){var o=new CKEDITOR.dom.element("div"),r="scaytLang_"+t.name+"_"+i,c=CKEDITOR.dom.element.createFromHtml('<input id="'+r+'" type="radio"  value="'+i+'" name="scayt_lang" />'),l=new CKEDITOR.dom.element("label"),s=t.scayt;return o.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"}),c.on("click",function(t){a.newLang=t.sender.getValue()}),l.appendText(e),l.setAttribute("for",r),n&&t.config.grayt_autoStartup&&l.setStyles({color:"#02b620"}),o.append(c),o.append(l),i===s.getLang()&&(c.setAttribute("checked",!0),c.setAttribute("defaultChecked","defaultChecked")),o},renderLangList:function(i){var n=i.find("#left-col-"+t.name).getItem(0);i=i.find("#right-col-"+t.name).getItem(0);var a,o=e.getScaytLangList(),r=e.getGraytLangList(),c={},l=[],s=0,d=!1;for(a in o.ltr)c[a]=o.ltr[a];for(a in o.rtl)c[a]=o.rtl[a];for(a in c)l.push([a,c[a]]);for(l.sort(function(t,e){var i=0;return t[1]>e[1]?i=1:t[1]<e[1]&&(i=-1),i}),c={},d=0;d<l.length;d++)c[l[d][0]]=l[d][1];l=Math.round(l.length/2);for(a in c)s++,d=a in r.ltr||a in r.rtl,this.buildRadioInputs(c[a],a,d).appendTo(l>=s?n:i)},getLangBoxes:function(){return this.getContentElement("langs","langBox").getElement()},toggleDictionaryState:function(t){var e=this.getContentElement("dictionaries","dictionaryName").getElement().getParent(),i=this.getContentElement("dictionaries","udButtonsHolder").getElement().getParent(),n=this.getContentElement("dictionaries","createDic").getElement().getParent(),a=this.getContentElement("dictionaries","restoreDic").getElement().getParent(),o=this.getContentElement("dictionaries","disconnectDic").getElement().getParent(),r=this.getContentElement("dictionaries","removeDic").getElement().getParent(),c=this.getContentElement("dictionaries","renameDic").getElement().getParent(),l=this.getContentElement("dictionaries","dicInfo").getElement().getParent(),s=this.getContentElement("dictionaries","addWordAction").getElement().getParent(),d=this.getContentElement("dictionaries","wordsHolder").getElement().getParent();switch(t){case"initialState":e.show(),i.show(),n.show(),a.show(),o.hide(),r.hide(),c.hide(),l.show(),s.hide(),d.hide();break;case"wordsState":e.hide(),i.hide(),l.hide(),s.show(),d.show();break;case"dictionaryState":e.show(),i.show(),n.hide(),a.hide(),o.show(),r.show(),c.show(),l.show(),s.hide(),d.hide()}},clearWordList:function(){this.getContentElement("dictionaries","itemList").removeAllChild()},getUserDictionary:function(){var e=this;t.scayt.getUserDictionary("",function(t){t.error||o.renderItemList.call(e,t.wordlist)})},renderItemList:function(t){for(var e=this.getContentElement("dictionaries","itemList"),i=0;i<t.length;i++)e.addChild(t[i])},contents:function(t,e){var i=[],n=e.config.scayt_uiTabs;if(!n)return t;for(var a in n)1==n[a]&&i.push(t[a]);return i.push(t[t.length-1]),i}(i,t)};return o}),CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{scaytItemList:function(t,e,i){if(arguments.length){var n=this;t.on("load",function(){n.getElement().on("click",function(t){})}),CKEDITOR.ui.dialog.uiElement.call(this,t,e,i,"",null,null,function(){var t=['<p class="cke_dialog_ui_',e.type,'"'];return e.style&&t.push('style="'+e.style+'" '),t.push(">"),t.push("</p>"),t.join("")})}}}),CKEDITOR.ui.dialog.scaytItemList.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{children:[],addChild:function(t,e){var i=new CKEDITOR.dom.element("p"),n=new CKEDITOR.dom.element("a"),a=this.getElement().getChildren().getItem(0);this.children.push(t),i.addClass("cke_scaytItemList-child"),i.setAttribute("data-cke-scayt-ud-word",t),i.appendText(t),n.addClass("cke_scaytItemList_remove"),n.addClass("cke_dialog_close_button"),n.setAttribute("href","javascript:void(0)"),i.append(n),a.append(i,e?!0:!1)},inChildren:function(t){return SCAYT.prototype.Utils.inArray(this.children,t)},removeChild:function(t,e){this.children.splice(SCAYT.prototype.Utils.indexOf(this.children,e),1),this.getElement().getChildren().getItem(0).$.removeChild(t)},removeAllChild:function(){this.children=[],this.getElement().getChildren().getItem(0).setHtml("")}}),function(){commonBuilder={build:function(t,e,i){return new CKEDITOR.ui.dialog[e.type](t,e,i)}},CKEDITOR.dialog.addUIElement("scaytItemList",commonBuilder)}();