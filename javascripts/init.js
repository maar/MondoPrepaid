/* initialize tab effects */
var TabbedContent = {
	init: function() {	
		$(".tab-item").mouseover(function() {
		
			var background = $(this).parent().find(".moving-bg");
			
			$(background).stop().animate({
				left: $(this).position()['left']
			}, {
				duration: 300
			});
			
			TabbedContent.slideContent($(this));
			
		});
	},
	
	slideContent: function(obj) {
		
		var margin = $(obj).parent().parent().find(".slide-content").width();
		margin = margin * ($(obj).prevAll().size() - 1);
		margin = margin * -1;
		
		$(obj).parent().parent().find(".tab-slider").stop().animate({
			marginLeft: margin + "px"
		}, {
			duration: 300
		});
	}
}

/*initialize simple faq*/
  $(document).ready(function() {
    $('#faq-list').simpleFAQ({
      data: faqs,
      allowSearch: true,
      searchNode: '#faq-search',
      minSearchScore: 0.5
    });
    $('#simplefaq-search').keyup(function(jQEvent, results) {
        // If the user has no search query, show all results
        if (this.value.length < 1) {
          $('.simpleFAQ').show();
        }
      });
    $('.simpleFAQ').show();
  });
  
  var faqs = [
    {
      question: "How does my Card function?",
      answer: "<p>Your new card is a Mondo Prepaid Card that you can use almost everywhere MasterCard are accepted worldwide, including <abbr title='Automated Teller Machine'>ATM</abbr>s. Certain exclusions or conditions may apply. Consult the <a href='../en/cardholder-agreement.html' title='Cardholder Agreement'>Cardholder Agreement</a> and these FAQs for information on how to get the most from your <b>Mondo Prepaid Card</b>. Your <b>Mondo Prepaid Card</b> card works exactly like a traditional <b>MasterCard</b> or <b>Visa</b> debit card, except that your <b>Mondo Prepaid Card</b> does not carry a credit line. Rather, you pay as you go by pre-paying the amount you wish to spend.</p>",
      tags: "Keywords: ATM, MasterCard, Visa, debit card, credit card"
    },
    {
      question: "Expiration Date of my Card",
      answer: "<p>Your <b>Mondo Prepaid Card</b> is good for at least one year from the date of first activation so long as you maintain a balance of greater than zero euros (&euro;). However, if your <b>Mondo Prepaid Card</b> has a zero balance for 60 continuous days, then your <b>Mondo Prepaid Card</b> will expire at the end of that 60 day period even if is sooner than one year. Once your <b>Mondo Prepaid Card</b> has expired for any reason, it cannot be renewed or reloaded.</p>",
      tags: "Keywords: expiration, expiration date"
    },	
    {
      question: "Reloading Value to my Card",
      answer: "<p>You may add more money to your <b>Mondo Prepaid Card</b> at any participating bank or by following the directions supplied with the card. A reload fee will apply. Reloads made at bank locations are generally available to spend on your <b>Mondo Prepaid Card</b> within 24 hours or sooner. Check the information provided with your card for details and instructions. Allow up to ten business days after mailing for funds to be available. You will not be able to add more money to your card once the card has expired or your account has been closed.</p>",
      tags: "Keywords: reloading, reload, reloading value, reload fee"
    },		
    {
      question: "Card Exclusions and Limitations",
      answer: "<p><b>Recurring Transactions:</b></p><p><b>Recurring Transactions:</b> are transactions that are automatically charged to your Card each month with or without your knowledge. Examples of merchants that may use recurring transactions include Internet Service Providers, Cable TV services, Mobile Phone and Insurance companies, Health Clubs,(and the like) that automatically charge monthly premiums to your Card, Because your Card is prepaid and does not carry a credit line, these merchants may suspend or cancel your service if you don't have enough money left on your Card when that recurring transaction comes due.</p><p><b>Merchants Illegal for Minors:</b></p><p><b>Mondo Prepaid Cards</b> are designed to be used by people of all ages including minors. Therefore, these Cards may not be accepted by certain types of merchants not legal for minors. Examples of such merchants include casinos, gambling web sites, pornography merchants and certain other merchants categorized as not legal for minors.</p><p><b>Open End Transactions:</b></p><p>There are certain types of merchants that sell goods or services where the final amount they will charge to your Card is unknown at the time they first authorize your Card. Typical merchants in this category include rental car companies, hotels, Internet service providers, certain time-based or variable cost merchants and others where the final purchase amount is not known up front. Therefore, your account may be <em>authorized</em> or <em>have money held</em> for more than the actual amount of the purchase until the final transaction is complete-meaning that those <em>authorized dollars</em> are not available for you to spend elsewhere. Other merchants will accept prepaid cards, but only under special rules or policies that may cause your Card to be declined. Furthermore, transactions at certain merchants that authorize high dollar amounts, especially rental car companies and hotels, may cause an <em>authorization</em> or a <em>hold</em> on your card balance for up to 90 days-meaning you will not have access to the authorized amount of these funds during that entire time. This is done to prevent fraud from prepaid card customers who may run up a bill higher than the amount first approved. <b>Note:</b> We cannot manually release legitimate authorizations without a certified letter or fax from the merchant. Furthermore, should you request that we manually release a legitimate authorization, a research and/or special service fee will apply.</p>",
      tags: "Keywords: exclusions, limitations"
    },		
    {
      question: "How old do you have to be to use the Card?",
      answer: "<p>Anyone above the age of 18 can buy and use this Card. For minors between the age of 16 to 17 we require parental/guardian authorization to activate. Minors between the age of 16 to 17 need a parent or legal guardian on the phone with them during the account activation process in order to accept the Cardholder Agreement on behalf of the underage child. Some merchants will ask to see the ID of the cardholder. So, it may be wise for underage users to have a student identification or other type of valid identification when using the Card.</p>",
      tags: "Keywords: ATM, MasterCard, Visa, debit card, credit card"
    },		
    {
      question: "What if I have bad credit? Can I still get this Card?",
      answer: "<p>Yes. There are no applications and no credit checks required.</p>",
      tags: "Keywords: credit, bad credit"
    },	
    {
      question: "Does buying or using this Card build my credit rating?",
      answer: "<p>No. This Card is not a credit card. It is prepaid. Because no credit is granted and no payments are required, this Card does not build credit history.</p>",
      tags: "Keywords: credit rating, credit"
    },		
    {
      question: "Is This Card Anonymous?",
      answer: "<p>Yes.</p>",
      tags: "Keywords: anonymous"
    },	
    {
      question: "How can I get a second Card to give to a friend or family member?",
      answer: "<p>Yes.</p>",
      tags: "Keywords: second card, family, family member"
    },	
    {
      question: "How do I check the card balance?",
      answer: "<p>You may check your balance online 24/7 on this website.  Or, you may call customer service at 123-456-789. When you check your balance online or call customer service, <b>there is no charge</b>.</p>",
      tags: "Keywords: balance, checking balance"
    },		
    {
      question: "How can I check my transaction history?",
      answer: "<p>You may check your balance online 24/7 on this website.  Or, you may call customer service at 123-456-789. When you check your balance online or call customer service, <b>there is no charge</b>.</p>",
      tags: "Keywords: transaction, transaction history"
    },	
    {
      question: "Are there limits on how much money I can put on my Card?",
      answer: "<p>Yes. Load limits vary by brand of card and by retailer. Check the card packaging or ask the retailer before purchasing your new Card.</p>",
      tags: "Keywords: load, limits, load limits"
    },		
    {
      question: "Can I spend more money than I have on the Card?",
      answer: "<p>No. But, sometimes a merchant will make a mistake and accept your Card even though you didn't have enough money on it. Should this happen, you are responsible for this payment. Please refer to the <a href='../en/cardholder-agreement.html' title='Cardholder Agreement'>Cardholder Agreement</a> for more information.</p>",
      tags: "Keywords: money on the card, enough money on the card"
    },	
    {
      question: "What if someone steals my Card or uses it without my permission?",
      answer: "<p>You should treat your Card as if it were cash. Guard the account number the same way you would cash or any credit card. Do not share your Card number with anyone. If you lose your Card or believe it to be stolen, please report it lost/stolen. We will cancel your old Card, transfer the remaining balance to a new Card and then mail it out to you at the address on file. Fees may apply.</p>",
      tags: "Keywords: stolen, lost, stolen card, lost, card"
    },	
    {
      question: "What if I return merchandise?",
      answer: "<p>Web and store merchants credit your returns back to your <b>Mondo Prepaid Card</b> as they would any other purchase. Store return policies may vary. Depending on the particular store, you may receive a credit to your Card, a cash refund or even a store credit. If a merchant cancels a transaction at your request, it may take up to 10 days for the authorization hold to be removed from your Card.</p>",
      tags: "Keywords: returns"
    },	
    {
      question: "What do I do with the Card after I haveve spent the money?",
      answer: "<p>You can throw it away or reload it with more cash. See <b>Reloading Value to Your Card</b> for more information. If you throw it away, make sure you destroy the plastic before discarding.  Should someone find the card in the trash and use it for fraudulent transactions, you could become a victim of identity theft or financial fraud.</p>",
      tags: "Keywords: reload, reloading, reloading value"
    },		
    {
      question: "What if I decide I don't want the Card anymore, can I return it to the store and get my money back?",
      answer: "<p>No. The Card is not refundable or redeemable for cash. However, you may request a liquidation of your account by calling customer service at 123-456-789. A liquidation fee will apply</p>",
      tags: "Keywords: liquidation, liquidation fee, cancelation, refund, redeem"
    },	
    {
      question: "What are posted transactions?",
      answer: "<p>Posted transactions are purchases, bill payments, and credits that have been processed by the merchant’s bank. In most cases, it takes about a day or two for the transaction amount to be deducted or credited to your account after a transaction is made. When the transaction has finished processing, the status changes from <em>pending</em> to <em>posted</em> on your transaction history.</p>",
      tags: "Keywords: transaction, transactions, posted transactions"
    },	
    {
      question: "What are pending transactions?",
      answer: "<p>Pending transactions are transactions in which your Card may be <em>authorized</em> or have money <em>held</em> for more than the actual amount of the purchase until the final transaction is complete-meaning that those <em>authorized amonyt<em> is not available for you to spend elsewhere.</p>",
      tags: "Keywords: transaction, transactions, pending transactions"
    },
    {
      question: "Are there limits on how much money I can put on my Card?",
      answer: "<p>Yes. Load limits vary by brand of card and by retailer.  Check the card packaging or ask the retailer before purchasing your new Card.</p>",
      tags: "Keywords: card milits, limits"
    },	
    {
      question: "How do I log in?",
      answer: "<p>We won't ask you to log in until you have to, but you can do so by clicking on the login icon above. Once you land on the <b>Log In</b> page, simply enter your email address and password. and hit enter or click on the <b>Log In</b> button. If you have forgotten your password, click on the link on the <b>Log In</b> page that says: <b>Did you forget your password?</b>.</p>",
      tags: "Keywords: log in, user account, reset password"
    },
    {
      question: "I forgot my password, what do I do?",
      answer: "<p>If you have forgotten your password you will need to reset it to something else. From the <b>Log In</b> page, click on the <b> Did you forget your password?</b>  link. You will need to type in your email address (the one you use to log into this site) and click on the button. After resetting your password you will receive an email with a new, temporary password. Use this to log in, and then change your password.</p>",
      tags: "Keywords: password, forgot password, reset password"
    },
    {
      question: "My account is locked, how do I unlock it?",
      answer: "<p>User accounts can be locked for a variety of reasons, the most common of which is that you tried to log in too many times with the incorrect password. When your account is locked you cannot log in to this site at all. Only an administrator can unlock your account. You will need to send us an email from the email address on your account requesting it to be unliocked.</p><p><em>If your account is locked for a reason other than incorrect log in attempts you may be asked to explain the circumstances surrounding the lock.</em></p>",
      tags: "Keywords: locked account, reset account, log in, incorrect password, unlock account"
    },
    {
      question: "How do I register for a user account?",
      answer: "<p>You can actually use most of this site without registering for a user account, but you may see a note that indicates that some features are not available without registering. In order to register for an account, go to the <b>Log In</b> page and enter your email address and desired password. You must also check the box that says <b>Register my new account</b>. As soon as you register, you will be automatically logged in and you can begin using all of this site. You will also receive an email confirming your registration.</p>",
      tags: "Keywords: register, user account, confirm, registration"
    },
    {
      question: "How do I save my information?",
      answer: "<p>Your information is automatically saved whenever you make an update, there is no need to click on a <b>Save</b> button. On some pages you will see a small notice that indicates that your work has been saved.</p><p><b>Note:</b> You cannot save your information without logging in. Your information is still saved while you are working on it, but it will not be there the next time you visit this site unless you log in.</p>",
      tags: "Keywords: save, saving information, saved"
    },
    {
      question: "What are the terms for using this application?",
      answer: "<p>Thanks for asking! Our Terms of Use are fair and only intend to cover misuse of the site. We are not trying to steal your data or claim it as our own. In fact, we also have a separate <b>Privacy Policy</b> which describes a little about how we protect your data.</p><p>If you have any questions or concerns about our <b>Terms and Conditions of Use</b>, please send us an email!</p>",
      tags: "Keywords: terms of use, privacy, policy, policies, conditions"
    },
    {
      question: "How can I get more help?",
      answer: "<p>If you can&apos;t find your answer here, feel free to send us an email any time. We will try to respond to your concern as soon as possible.</p>",
      tags: "Keywords: help, contact us, email"
    },
    {
      question: "I received an error that said I should contact you, what do I do?",
      answer: "<p>We hope to minimize those errors, but sometimes they slip through. Please send us an email if you can and let us know what page you were on, and what you were doing when you received the error. It would also be helpful if you could send us what Operating System (Windows, Mac, Linux) and browser (Internet Explorer, Firefox, Safari, etc.) you are using. If you are not sure how to get this information, try <a class='external' href='http://supportdetails.com/' title='Support Details web site'>visiting this site</a>. It will print out all of the information we need. Once you get there, you can export the details as a CSV or PDF file, or just copy and paste them into your email.</p>",
      tags: "Keywords: help, error message, support, email, issue, problem"
    },
    {
      question: "What are the technical requirements for this site",
      answer: "<p>This site is run entirely in your browser, thus all you need is a web browser and an internet connection. However, your browser does need to support JavaScript and have it turned on (this is the default for most browsers). We strive to make sure this site operates as expected in as many browsers as possible, but we officially only support a smaller number of browsers.</p><p><b>Fully Supported Browsers</b><ul id='supported-browsers'><li id='ffx'>Firefox 2-6</li><li id='chr'>Google Chrome 8-13</li><li id='saf'>Safari 3-5</li><li id='op'>Opera 9-11</li><li id='ie'>Internet Explorer 7-9</li></ul><p>If you notice any issues while using this site please send us an email. It would also be helpful if you could send us what Operating System (Windows, Mac, Linux) and browser (Internet Explorer, Firefox, etc.) you are using. If you're not sure how to get this information, try <a href='http://supportdetails.com/' title='Support Details web site'>visiting this site</a>. It will print out all of the information we need. Once you get there, you can export the details as a CSV or PDF file, or just copy and paste them into your email.</p>",
      tags: "Keywords: technical requirements, browsers, support, javascript"
    },
    {
      question: "How do I change my password or email address?",
      answer: "<p>Any time you need to change your password or email address, just visit your profile page. When changing your password, simply enter the new password, click on the button, and then confirm your old password.</p><p><b> Note:</b> If you change your email address, you will need to log in with the new address thereafter! </p>",
      tags: "Keywords: change password, change email address, account settings, user settings"
    }
  ];
 
/* initialize slideshow */
$(document).ready(
  function() {
    $$.Slideshow.Ready();
  }
);

/* initialize scrollto */
$(document).ready(function() {	

	//Get the height of the first item
	$('#mask').css({'height':$('#tab-1').height()});	
	
	//Calculate the total width - sum of all sub-tabs width
	//Width is generated according to the width of #mask * total of sub-tabs
	$('#tab').width(parseInt($('#mask').width() * $('#tab div').length));
	
	//Set the sub-tab width according to the #mask width (width of #mask and sub-tab must be same)
	$('#tab div').width($('#mask').width());
	
	//Get all the links with rel as tab
	$('a[rel=tab]').click(function () {
	
		//Get the height of the sub-tab
		var panelheight = $($(this).attr('href')).height();
		
		//Set class for the selected item
		$('a[rel=tab]').removeClass('selected');
		$(this).addClass('selected');
		
		//Resize the height
		$('#mask').animate({'height':panelheight},{queue:false, duration:500});			
		
		//Scroll to the correct tab, the tab id is grabbed from the href attribute of the anchor
		$('#mask').scrollTo($(this).attr('href'), 800);		
		
		//Discard the link default behavior
		return false;
	});
	
});














