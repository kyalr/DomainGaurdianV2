/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
Office.onReady(function (info) {

    if (info.host === Office.HostType.Outlook) {

      item = Office.context.mailbox.item;

      checkLoggedIn();
      
    }
  });
  
  function checkLoggedIn() {
    // Check if the userId is stored in localStorage
    debugger;
    userId = localStorage.getItem("userId");
    token = localStorage.getItem("SCToken")
    if (userId) {
      document.getElementById("app-body").style.display = "flex";
      document.getElementById('reporting').style.display = 'block'
      document.getElementById("login-section").style.display = 'none'
      document.getElementById("reportWarning").style.display = 'none'
      document.getElementById('logout').style.display = 'block'
      getOrganizationUNits(token);
      
    }
    else{
      document.getElementById("search-input").style.display = 'none';
      document.getElementById("app-body").style.display = "flex";
      document.getElementById('reporting').style.display = 'none';
      document.getElementById('warning').style.display = 'none';
      document.getElementById('reportWarning').style.display = 'none';
      document.getElementById('logout').style.display = 'none';
      document.getElementById("contentWrapper").style.display = "none";



    }
}





