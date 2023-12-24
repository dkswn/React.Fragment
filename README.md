1. git 저장소 생성(초기화)
git init

2. git 원격 저장소 연결
git remote origin https://github.com/dkswn/React.Fragment.git

3. 브런치 생성 후 바로 생성한 브런치로 이동
git checkout -b <브런치이름>

4. 모든 변경 사항을 다음 commit에 반영
git add .

5. 메시지와 함께 commit 하기
git commit -m "내용"

6. 원격저장소에 push 하기
git push origin <브런치이름>
