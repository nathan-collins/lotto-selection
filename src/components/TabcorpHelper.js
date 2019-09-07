export default class JumboHelper {
  static buildArrayFromNumber = (totalNumbers) => {
    return Array(parseInt(totalNumbers)).fill();
  };
}
