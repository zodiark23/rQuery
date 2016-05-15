## rQuery

>Developed by **Reyan Celestial Tropia**



### Slider Javascript Class
> This class will transform the div into a slider. Just add the css and rQuery script and you're good to go.
> *Future Update: Remove the css file and add it into the javascript to make it easier to use.*


>HTML Syntax
```html

<div id="slider">
	<div slider="slide" class="sliding" style="display: block; opacity: 0.194256;"> 
			<div class="slider_box"></svg>
			</div>
		<img src="images/slider1.jpg">
	</div>
	<div slider="slide" class="sliding" style="display: block; opacity: 0.808224;"> 
		<div class="slider_box"></div>
				<img src="images/slider3.jpg">
	</div>
	<div slider="slide" class="sliding" style="display: none;">
		 <div class="slider_box"></div>
		 <img src="images/slider2.png">
	 </div>

</div>
```
>Javascript Syntax
```javascript
$("#slider").slider(3500);
//Note: the Id must be parent of the sliders

```




