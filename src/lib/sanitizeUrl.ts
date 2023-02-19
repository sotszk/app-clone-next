/**
 * 許可したドメイン以外の URL かどうかをチェックし、許可されていないドメインの URL だった場合、サニタイズして返す。
 * @param url string;
 * @param acceptUrls string[];
 * @returns string;
 */
const sanitizeUrl = (url: string, acceptUrls: string[]) => {
  const strictAcceptUrls = acceptUrls.map((url) => {
    const lastChar = url.charAt(url.length - 1);
    return lastChar === "/" ? url : `${url}/`;
  });
  const reg = new RegExp(strictAcceptUrls.map((url) => `^${url}`).join("|"));
  return url.match(reg) ? url : "/";
};

export default sanitizeUrl;
