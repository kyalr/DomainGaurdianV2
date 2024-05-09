/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
let item;
Office.onReady(function (info) {
  if (info.host === Office.HostType.Outlook) {
    item = Office.context.mailbox.item;
    Office.actions.associate("onMessageSendHandler", onItemSendHandler);
    Office.actions.associate("onMessageComposeHandler", onItemSendHandler)
    Office.actions.associate("onAppointmentSendHandler", saveAppointment);
    Office.actions.associate("onAppointmentComposeHandler", setTimesheets);
  }
});



