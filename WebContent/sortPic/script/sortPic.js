function $(el){return typeof el == 'string' ?  document.getElementById(el) : el;}

var qbClass={

	ManageBlock:{
		
		
		DragsDiv:function(){
			
			function getPosition(e){
				var left = 0;
				var top  = 0;
				while (e!=null)
				{
					left += e.offsetLeft;
					top  += e.offsetTop;
					e     = e.offsetParent;
				}
				return {x:left, y:top};
			}
			
			function eventManager(){
				var m_events = {};
				
				this.attachEvent = function (handleName, handleFunc){
					m_events[handleName] = handleFunc;
				};
				this.detachEvent = function (handleName){
					m_events[handleName] = null;
				};
				this.fire = function (){
					for(var handleName in m_events)
					{
						if (m_events[handleName])
						{
							m_events[handleName].apply(this, arguments);
						}
					}
				};
			}
			
			function Animate(startPos, endPos, steps, timeval, obj, endFunc){
				var m_steps = steps||0;
				var m_done;
				var m_timeval = timeval||0;
				var m_startPos = startPos||{x:0, y:0};
				var m_endPos = endPos||{x:0, y:0};
				var m_step = {x:0, y:0};
				var m_timer = null;
				var m_obj = obj||null;
				var m_this = this;
				var m_endFunc = endFunc||null;
				this.doing = false;
				
				this.init = function (startPos, endPos, steps, timeval, obj, endFunc){
					m_steps = steps||0;
					m_timeval = timeval||0;
					m_startPos = startPos||{x:0, y:0};
					m_endPos = endPos||{x:0, y:0};
					m_timer = null;
					m_obj = obj||null;
					m_endFunc = endFunc||null;
				};
			
				function going(){
					if (!m_timer) return;
					m_done++;
					if (m_done < m_steps)
					{
						m_obj.style.left = parseInt(m_startPos.x+m_done*m_step.x)+"px";
						m_obj.style.top = parseInt(m_startPos.y+m_done*m_step.y)+"px";
					}
					else
					{
						clearInterval(m_timer);
						m_this.doing = false;
						if (m_endFunc){m_endFunc();}
					}
				}
			
				this.start = function (){
					if (m_obj&&m_obj.style){m_obj.style.position = "absolute";}
					m_step.x = (m_endPos.x - m_startPos.x)/m_steps;
					m_step.y = (m_endPos.y - m_startPos.y)/m_steps;
					m_done = 0;
					this.doing = true;
					m_timer = setInterval(going, m_timeval);
				};
			}
			
			var dragdrop=function(){
				var dropList = [];
				var dragOffset = {x:0, y:0};
				var dragDropping = null;
				var dragObject = null;
				var dragInsert = null;
				var dragHelper = null;
				var dragAnimate = new Animate();
				var Curcolumn=null;
				
			
				function getdragOffsetset(target, ev)
				{
					ev = ev || window.event;
				
					var docPos    = getPosition(target);
					var mousePos  = {x:ev.clientX + document.documentElement.scrollLeft,
									 y:ev.clientY + document.documentElement.scrollTop};
					return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
				}
			
				function makeDraggable(item)
				{
					if(!item) return;
			
					item.onmousedown = function (ev)
					{
						if (dragAnimate.doing) return;
						var thisP = this.parentNode;
						var objPos  = getPosition(this);
			
						dragObject = dragHelper;
						dragObject.style.position = "absolute";
						dragObject.style.top = objPos.y+"px";
						dragObject.style.left = objPos.x+"px";
						
						dragObject.innerHTML=thisP.innerHTML;
						dragObject.style.display = "block";
						dragOffset = getdragOffsetset(this, ev);
		
						dragDropping = thisP;

						Curcolumn=thisP.getAttribute("sy");
						return false;
					};
				}
				
				function makeDropList(item)
				{
					
					dropList.push(item);
				}
				
				 
				function dropIt(dropArea, mousePos)
				{
					var chd;
					
					for(var i = 0; i < dropArea.childNodes.length; i++)
					{
						chd = dropArea.childNodes[i];
						if(chd.nodeType==1 || chd.nodeType=="1"){
							if(!chd||!(chd.getAttribute("ty"))||chd.getAttribute("ty").indexOf('module')==-1){
								continue;
							}
							var chdPos = getPosition(chd);
							var yPos = chdPos.y + chd.offsetHeight/2;
							var xPos = chdPos.x + chd.offsetWidth/2;
							var absX=xPos-mousePos.x;
							var absY=yPos-mousePos.y;
							absX=Math.abs(absX);
							absY=Math.abs(absY);
							if ((absX > 0 && absX<20) && (absY > 0 && absY<20)){
								if (chd != dragInsert  && Curcolumn.indexOf(dropArea.parentNode.id)>-1){
									dropArea.insertBefore(dragDropping, chd);
									dragInsert = chd;
								}
								return;
							}
						}
						
					}
					
					if (dragInsert!=null && dragInsert != dropArea && Curcolumn.indexOf(dropArea.parentNode.id)>-1){
						dropArea.insertBefore(dragDropping, null);
						dragInsert = dropArea;
					}
				}
				
			
				function testDrop(mousePos)
				{
					for(var i=0; i < dropList.length; i++)
					{
						var dropArea = dropList[i];
						var pos = getPosition(dropArea);
						if ((mousePos.x > pos.x)&&(mousePos.x < pos.x+dropArea.offsetWidth)){
							dropIt(dropArea, mousePos);
							return;
						}
					}
				}
				
				this.init = function (dragName, dropName)
				{
					var divs = $("ShowBlockTD").getElementsByTagName("div");
					for(var i=0; i<divs.length; i++)
					{
						
			
						if (divs[i].getAttribute("ty") == dragName){makeDraggable(divs[i]);}
							
						if (divs[i].getAttribute("ty") == dropName){makeDropList(divs[i]);}
					}
					
					dragHelper = document.createElement('DIV');
					dragHelper.style.cssText = 'position:absolute;display:none;';
					$("ShowBlockTD").appendChild(dragHelper);
				};
				
				this.mouseMove = function (ev)
				{
					if (dragAnimate.doing) return;
					
					ev = ev || window.event;
				
					if(dragObject)
					{
						var mousePos  = {x:ev.clientX + document.documentElement.scrollLeft,
										 y:ev.clientY + document.documentElement.scrollTop};
						dragObject.style.position = "absolute";
						dragObject.style.top = (mousePos.y - dragOffset.y)+"px";
						dragObject.style.left = (mousePos.x - dragOffset.x)+"px";
						testDrop(mousePos);
					}
					return false;
				};
			
				function startAnimate()
				{
					function endAnimate()
					{
						dragObject.innerHTML = "";
						dragObject.style.display = "none";
						dragObject = null;
					   
					}
			
					var endPos = getPosition(dragDropping);
					var startPos = {};
					startPos.x = parseInt(dragObject.style.left);
					startPos.y = parseInt(dragObject.style.top);
					dragAnimate.init(startPos, endPos, 20, 3, dragObject, endAnimate);
					dragAnimate.start();
				}
				
				this.mouseUp = function (ev){
					if (dragAnimate.doing) return;
					
					if (dragObject)
					{
						startAnimate();
					}
					return false;
				};
			};
			
			var dragIt = new dragdrop();
			var onMouseMv = new eventManager();
			var onMouseU = new eventManager();
			onMouseMv.attachEvent("mouseMove", dragIt.mouseMove);
			onMouseU.attachEvent("mouseUp", dragIt.mouseUp);
			document.onmousemove = onMouseMv.fire;
			document.onmouseup = onMouseU.fire;
			dragIt.init("bloc", "column");
		}
	
	}
};