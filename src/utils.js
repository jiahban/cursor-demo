/**
 * 이메일 배열에서 중복을 제거하고 첫 등장 순서를 유지한다.
 * @param {string[]} emails - 이메일 문자열 배열
 * @returns {string[]} 중복이 제거된 배열
 */
export function uniqueEmails(emails) {
  if (!Array.isArray(emails)) {
    return [];
  }
  return [...new Set(emails)];
}
