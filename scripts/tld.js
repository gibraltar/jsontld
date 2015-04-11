$(document).ready(function()
{
  $('form').submit(function () {
    return false;
  });


  // loading json file
  var url = "./json/tlds.json";
  
  $('#purchaseBtn').click(function ()
  { 
    window.location.href = $('#domainOptions').val();
  });
      
  $("input[name=domainName]").keypress(function(e)
  {
    var curName = $(this).val();
    if(e.which == 13)
    {
      $.getJSON( url, function( data )
      {
        $.each(data, function (i, val)
        {
          var domain = curName + '.' + val.fields.tld
          var redirect = "http://shop.whynotdomains.com/domains/search.aspx?domainToCheck="+curName+"&tld="+val.fields.tld;
              
          $('#domainOptions').append($('<option>', { 
             value: redirect,
             text : domain 
          }));
        });
          
        // show the controls
        $('#domainOptions').show();
        $('#purchaseBtn').show();
      });
    }
  });
});
