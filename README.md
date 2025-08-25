# 두 번째 useEffect에 userId를 의존성으로 넣은 이유
1. userId가 10자리 입력되면 패스워드 입력으로 이동하기를 원함
2. useEffect는 모든 렌더링이 끝난 후에 실행되는 Hook이라서 안전하게 포커스 이동 가능
3. useEffect의 의존성 배열에 userId를 넣으면 입력이 변할 때마다 useEffect가 실행
4. useEffect의 내부 if 조건문에 길이가 10자리를 넘어가면 useRef를 사용해서 패스워드 입력으로 이동