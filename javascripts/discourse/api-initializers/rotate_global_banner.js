import { apiInitializer } from "discourse/lib/api";
var counter = 0;
// what?
function getNotice() {
  const noticeArray = settings.header_items.split("|");
  counter += 1;
  var myDiv = document.getElementById("rotateBannerNotice");
  myDiv.innerHTML = noticeArray[counter % noticeArray.length];
}

export default apiInitializer("0.11.1", (api) => {
  api.onPageChange((url, title) => {
    getNotice();
  });
});
