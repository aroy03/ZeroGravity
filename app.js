App = function()
{
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
		wade.loadScene('scene1.wsc', true, function()
        {
            // the scene has been loaded, do something here

        });
        
        wade.app.onMouseUp = function(){
           var obj = wade.getSceneObject("ball");
           
           if(obj.hasMouseJoint)
           {
               obj.getBehavior().removeMouseJoint();
               obj.hasMouseJoint = false;
           }
           
           
        };
        
        wade.app.onMouseMove = function(data){
            var obj = wade.getSceneObject("ball");
            
            if(obj.hasMouseJoint){
                obj.getBehavior().updateMouseJoint(data.screenPosition);
            }
        };
	};
};
