window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

var $$ = $.fn;

$$.extend({
  SplitID : function()
  {
    return this.attr('id').split('-').pop();
  },

  Slideshow : {
    Ready : function()
    {
      $('div.banner-slideshow-control')
        .hover(
          function() {
            $(this).addClass('banner-slideshow-controlOn');
          },
          function() {
            $(this).removeClass('banner-slideshow-controlOn');
          }
        )
        .click(
          function() {
            $$.Slideshow.Interrupted = true;

            $('div.banner-slide').hide();
            $('div.banner-slideshow-control').removeClass('banner-slideshow-control-active');

            $('div#banner-slide-' + $(this).SplitID()).show()
            $(this).addClass('banner-slideshow-control-active');
          }
        );

      this.Counter = 1;
      this.Interrupted = false;

      this.Transition();
    },

    Transition : function()
    {
      if (this.Interrupted) {
        return;
      }

      this.Last = this.Counter - 1;

      if (this.Last < 1) {
        this.Last = 3;
      }

      $('div#banner-slide-' + this.Last).fadeOut(
        'slow',
        function() {
          $('div#banner-slideshow-control-' + $$.Slideshow.Last).removeClass('banner-slideshow-control-active');
          $('div#banner-slideshow-control-' + $$.Slideshow.Counter).addClass('banner-slideshow-control-active');
          $('div#banner-slide-' + $$.Slideshow.Counter).fadeIn('slow');

          $$.Slideshow.Counter++;

          if ($$.Slideshow.Counter > 3) {
            $$.Slideshow.Counter = 1;
          }

          setTimeout('$$.Slideshow.Transition();', 5000);
        }
      );
    }
  }
});

/** jQuery FAQ **/
;(function($){$.fn.simpleFAQ=function(o){var n=this;if(n.length!=1){return n;}
n.addClass('simpleFAQList');o=(o)?o:{};o=audit($.extend({},$.fn.simpleFAQ.defaults,o));if(n.attr('id').length<1){n.attr('id','simpleFAQ_'+Math.floor(Math.random()*1000));}
var qc=o.questionClass;var ac=o.answerClass;var nt=o.nodeType;if(o.data!=null){var d=o.data;n.html('');for(var i=0,l=d.length;i<l;++i){n.append("<"+nt+" class='simpleFAQ'>"+" <p class='"+qc+"'>"+d[i].question+"</p>"+" <div class='"+ac+"'>"+
d[i].answer+"<p class='"+o.tagClass+"'>"+d[i].tags+"</p>"+"</div>"+"</"+nt+">");}}
var faqs=$('#'+n.attr('id')+' > '+nt);faqs.find('.'+qc).css('cursor','pointer').hover(function(){$(this).addClass('simple-faq-hover');},function(){$(this).removeClass('simple-faq-hover');}).bind('click.simpleFAQ',function(e){var f=$(this).parent();if(o.showOnlyOne){n.find(nt).not(f).find('.'+ac).slideUp(o.speed,function(){$(this).parent().removeClass('simple-faq-showing');});}
$(this).siblings('.'+ac).slideToggle(o.speed,function(){if($(this).is(':visible')){f.addClass('simple-faq-showing');var h=f.attr('id');if(h&&h.length>0){document.location.hash=escape(h);}
n.trigger('show.simpleFAQ',[f[0]]);}else{f.removeClass('simple-faq-showing');}});});faqs.find('.'+ac).hide();if(o.allowSearch){var hideFAQ=function(node){$(node).hide().removeClass('simpleFAQResult').find('.'+ac).hide().parent().removeClass('simple-faq-showing');}
var sn=$(o.searchNode);if(sn.length>0&&typeof $.score=='function'){hideFAQ(n.find(nt));var h;sn.append("<input type='text' id='simplefaq-search' />").find('#simplefaq-search').keyup(function(e){clearTimeout(h);var sn=this;if(sn.value.length<1){hideFAQ(n.find(nt));return;}
h=setTimeout(function(){n.trigger('searchStart.simpleFAQ',[]);var sc=[];faqs.each(function(i){var f=$(this);var tg=f.find('.'+o.tagClass).text();tg=(o.caseSensitive)?tg:tg.toLowerCase();var t=f.text();t=(o.caseSensitive)?t:t.toLowerCase();var q=getQuery(sn.value,o);var s=0;if(q.length>0){s=$.score(t,q);s+=scoreTags(q,tg);}
if(s>o.minSearchScore){sc.push([s,f]);}else{hideFAQ($(this));}});if(o.sortSearch){sc.sort(function(a,b){return b[0]-a[0];});}
var r=[];$.each(sc,function(){n.append(this[1].show().addClass('simpleFAQResult'));r.push(this[1][0]);});n.trigger('sort.simpleFAQ',[r]);n.trigger('searchEnd.simpleFAQ',[r]);},$.fn.simpleFAQ.keyTimeout);});}}
var scoreTags=function(t,tags){var s=0;if(tags.length<1){return s;}
var w=t.split(' ');for(var i=0,l=w.length;i<l;++i){if(w[i].length<1){continue;}
if(tags.indexOf(w[i])>-1){s+=$.fn.simpleFAQ.tagMatchScore;}}
return s;}
var getQuery=function(t,o){var q='';t=(o.caseSensitive)?t:t.toLowerCase();var ig=o.ignore;if(ig.length>0){var w=t.split(' ');for(var i=0;i<w.length;++i){if(w[i].length>0){if(typeof ig.indexOf=='function'){if(ig.indexOf(w[i])<0){q+=w[i]+' ';}}else{var f=false;for(var j=0;j<ig.length;++j){if(ig[j]==w[i]){f=true;break;}}
if(!f){q+=w[i]+' ';}}}}
if(q.length>0){q=q.substr(0,q.length-1);}}else{q=t;}
return q;}
var h=document.location.hash;if(h&&h.length>0){var fn=$(h);if(fn&&fn.is('.simpleFAQList>*')){fn.find('.'+qc).trigger('click.simpleFAQ');}}
return n;};var audit=function(o){var d=o.data;if(!d||!d.length||typeof d.splice!='function'){o.data=$.fn.simpleFAQ.defaults.data;}
if(typeof o.nodeType!='string'){o.nodeType=$.fn.simpleFAQ.defaults.nodeType;}
if(typeof o.questionClass!='string'){o.questionClass=$.fn.simpleFAQ.defaults.questionClass;}
if(typeof o.answerClass!='string'){o.answerClass=$.fn.simpleFAQ.defaults.answerClass;}
if(typeof o.tagClass!='string'){o.tagClass=$.fn.simpleFAQ.defaults.tagClass;}
if(typeof o.showOnlyOne!='boolean'){o.showOnlyOne=$.fn.simpleFAQ.defaults.showOnlyOne;}
if(typeof o.allowSearch!='boolean'){o.allowSearch=$.fn.simpleFAQ.defaults.allowSearch;}
if(typeof o.minSearchScore!='number'){o.minSearchScore=$.fn.simpleFAQ.defaults.minSearchScore;}
if(typeof o.sortSearch!='boolean'){o.sortSearch=$.fn.simpleFAQ.defaults.sortSearch;}
if(typeof o.caseSensitive!='boolean'){o.caseSensitive=$.fn.simpleFAQ.defaults.caseSensitive;}
if(typeof o.speed!='number'){o.speed=$.fn.simpleFAQ.defaults.speed;}
var ig=o.ignore;if(!ig||!ig.length||typeof ig.splice!='function'){o.ignore=$.fn.simpleFAQ.defaults.ignore;}
return o;}
$.fn.simpleFAQ.keyTimeout=400;$.fn.simpleFAQ.tagMatchScore=0.1;$.fn.simpleFAQ.defaults={data:null,nodeType:'li',questionClass:'question',answerClass:'answer',tagClass:'tags',showOnlyOne:false,allowSearch:false,searchNode:null,minSearchScore:0,sortSearch:false,caseSensitive:false,speed:500,ignore:['the','a','an','i','we','you','it','that','those','these','them','to','and','or','as','at','by','for','of','so']};})(jQuery);

// qs_score - Quicksilver Score
// 
// A port of the Quicksilver string ranking algorithm
// 
// Examples changed to fit jQuery model (JSK):
// $.score("hello world", "axl") //=> 0.0
// $.score("hello world", "ow") //=> 0.6
// $.score("hello world", "hello world") //=> 1.0
//
// Tested in Firefox 2 and Safari 3
//
// The Quicksilver code is available here
// http://code.google.com/p/blacktree-alchemy/
// http://blacktree-alchemy.googlecode.com/svn/trunk/Crucible/Code/NSString+BLTRRanking.m
//
// The MIT License
// 
// Copyright (c) 2008 Lachie Cox
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* Ported to jQuery style by Jordan Kasper
 * Requires: jQuery 1.0.x
 */

;(function($) {
  
  // JSK - Added base string argument
  $.score = function(base, abbreviation, offset) {
    
    offset = offset || 0 // TODO: I think this is unused... remove
    
    if(abbreviation.length == 0) return 0.9
    if(abbreviation.length > base.length) return 0.0
    
    for (var i = abbreviation.length; i > 0; i--) {
      var sub_abbreviation = abbreviation.substring(0,i)
      var index = base.indexOf(sub_abbreviation)
      
      
      if(index < 0) continue;
      if(index + abbreviation.length > base.length + offset) continue;
      
      var next_string       = base.substring(index+sub_abbreviation.length)
      var next_abbreviation = null
      
      if(i >= abbreviation.length)
        next_abbreviation = ''
      else
        next_abbreviation = abbreviation.substring(i)
      
      // Changed to fit new (jQuery) format (JSK)
      var remaining_score   = $.score(next_string, next_abbreviation,offset+index)
      
      if (remaining_score > 0) {
        var score = base.length-next_string.length;
        
        if(index != 0) {
          var j = 0;
          
          var c = base.charCodeAt(index-1)
          if(c==32 || c == 9) {
            for(var j=(index-2); j >= 0; j--) {
              c = base.charCodeAt(j)
              score -= ((c == 32 || c == 9) ? 1 : 0.15)
            }
            
            // XXX maybe not port this heuristic
            // 
            //          } else if ([[NSCharacterSet uppercaseLetterCharacterSet] characterIsMember:[self characterAtIndex:matchedRange.location]]) {
            //            for (j = matchedRange.location-1; j >= (int) searchRange.location; j--) {
            //              if ([[NSCharacterSet uppercaseLetterCharacterSet] characterIsMember:[self characterAtIndex:j]])
            //                score--;
            //              else
            //                score -= 0.15;
            //            }
          } else {
            score -= index
          }
        }
        
        score += remaining_score * next_string.length
        score /= base.length;
        return score
      }
    }
    return 0.0
  }
})(jQuery);

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return $.browser.safari || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
			
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );