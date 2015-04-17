$(document).ready(function()
{
 
  $("form").submit(function ()
  {
    return false;
  });

  // loading json file
  var url = "https://rawgit.com/gibraltar/jsontld/master/json/tlds.json";
  var redirectUrl = "http://shop.whynotdomains.com/domains/search.aspx?domainToCheck=";


  $('#goBtn').click(function() {
    var curName = $("input[name=domainName]").val();
    goAction(curName);
  }); 

 

  $('#purchaseBtn').click(function ()
  { 
    window.location.href = $('#domainOptions').val();
  });
  

  $('#domainOptions').keyup(function(e)
  {
    if(e.which == 13)
    {
      window.location.href = $(this).val();
    }
  });


  $("input[name=domainName]").keyup(function(e)
  {
    var curName = $(this).val();
    if (curName.length === 0) {
      $('#goBtn').attr('disabled','disabled').show();
    } else {
      $('#goBtn').removeAttr('disabled').show();
    }

    if(e.which == 13)
    {
      goAction(curName);
    }
  });


  function goAction (curName)
  {
    // hide go button
    $("#goBtn").hide();

    // clear the list
    $('#domainOptions').find('option').remove().end();

    $.getJSON( url, function( data )
    {
      $.each(data, function (i, val)
      {
        var domain = curName + val;
        $('#domainOptions').append($('<option>', { 
          value: redirectUrl + curName+"&tld="+val,
          text : domain 
        }));
      });
      
      // show the controls
      $('#domainOptions').show().focus();
      $('#purchaseBtn').show();
    });
  }

});



