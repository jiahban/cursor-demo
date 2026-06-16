# cursor-demo

사용자 목록에서 이메일을 검증·추출하는 Node.js 유틸리티 프로젝트입니다.

## 릴리스 노트

### v1.0.0

**사용자 목록에서 RFC 5322 기준으로 이메일을 검증·추출하는 유틸리티 모듈을 제공하는 첫 번째 공개 버전입니다.**

#### ✨ 기능

- **이메일 검증 API** (`isValidEmail`) — RFC 5322 정규식과 RFC 3696 길이 제한(로컬 파트 64자, 전체 254자)을 적용
- **이메일 추출 API** (`extractEmails`, `getValidEmails`) — 사용자 배열에서 이메일을 추출하고, 유효한 이메일만 필터링
- **단위 테스트** — `src/email.test.js`로 검증·추출 로직 커버 (`npm test`)

#### 🧹 기타

- ES Module 기반 프로젝트 초기 구성 (`package.json`, `src/index.js`)
- `docs/validator.md` 검증 모듈 스펙 문서 추가
- `.cursor/rules/coding-style.mdc` 코딩 스타일 규칙 추가
- 원격 저장소와 로컬 저장소 동기화

## 사용법

```bash
npm test
```

```js
import { getValidEmails } from './src/email.js';

const members = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'invalid-email' },
];

const emails = getValidEmails(members);
// ['john@example.com']
```

## 문서

- [validator.js 스펙](docs/validator.md)
