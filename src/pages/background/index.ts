import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const { status } = changeInfo;
  if (status !== "loading") return;

  // business logic
  isScriptAllowedPage(tab.id).then((isAllowed) => {
    if (isAllowed) {
      chrome.scripting?.executeScript({
        files: ["src/pages/content/index.js"],
        target: { tabId },
      });
    }
  });
});

/**
 * コンテンツスクリプトが実行可能なページかどうかを判定する
 * @param tabId
 * @returns boolean
 */
export const isScriptAllowedPage = async (tabId: number) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      func: () => {
        //
      },
    });
    return !chrome.runtime.lastError;
  } catch (e) {
    return false;
  }
};
