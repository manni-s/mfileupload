Mfileupload
===========

Mfileupload - Jquery Plugin For Upload Preview &amp; File Validations


Initialize
==========

       $('.inputFile').mfileUpload({
                 
                  preview        : true, 
                  dimensions     : '600,600',
                  allowExt       : 'jpg,png,jpeg',
                  maxSize        : 200,   
                  maxTotalSize   : 2000, 
                  btnClass       : 'up-btn', 
                  onDimension    : function(){  },
                  onExtension    : function(){  },
                  onMaxsize      : function() {  },
                  onMaxtotalsize : function() {  }
                  
              });
