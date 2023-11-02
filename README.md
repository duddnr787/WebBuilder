# 편리한 상세페이지 웹빌더
<img src="https://github.com/udemy-team16/Udemy-Project/assets/100075245/73efeb7a-51b8-482d-a9b6-d015fa700259" width="500">




## 1. 프로젝트 소개

## 💡 개요

```

🪄 개발자나 퍼블리셔가 아닌 누구나 쉽고 빠르게 상세페이지를 제작 할 수 있는 웹 빌더입니다.

🧑🏼‍💻 로그인, 메뉴 관리, 페이지 편집, 복제 및 복원기능을 제공합니다.

🔁 드래그앤드랍으로 쉽게 메뉴들의 순서를 변경 할 수 있습니다.

🏞️ 구분선, 표, 이미지, 텍스트 등을 선택하여 원하는 페이지를 제작 할 수 있습니다!

💛 블록마다 배경 색깔, 상하 여백을 조절 할 수 있고, 마음에 드는 페이지의 디자인을 복제하거나 이전 디자인으로 복원 할 수도 있습니다.

```

### 1.1 개발 환경

**[개발 기간]**

- 2023-07-17 ~ 2023-08-11

**[에디터 및 협업]**

- VSCode
- 형상관리 및 협업: Git, GitHub, Notion, VSCode Live Share

### 1.2 기술 스택

- Front-End
  - React, React-router-dom, Redux
- Back-End
  - Node.js,Express
- Database
  - MySQL
- Design
  - Figma
- ETC
  - Prettier

### 1.3 커밋 컨벤션 규칙

- 기능 별로 코드관리를 하기 위하여 기능단위로 커밋하였습니다.
- 커밋 타입은 영어 대문자로 시작하였습니다.
- Feat, Update, Fix, Refactor, Style, Design, Docs, Chore와 같이 일반적으로 통용되는 타입을 사용하였습니다.
- 직관적으로 이해할 수 있도록 이모티콘을 활용하였습니다.
- 주제는 최대한 자세하게 변경 사항을 알아보기 편하도록 작성하였습니다.

## 2. 팀원 소개

| ![프로필1] | ![프로필2] | ![프로필3] | ![프로필4] |
| :--------: | :--------: | :--------: | :--------: |
|  [김영욱]  |  [신정호]  |  [윤태현]  |  [서윤정]  |

## 3. 기능 구현

- ### 홈
| 로그인 |
|:-----------:|
| <img src="https://github.com/udemy-team16/Udemy-Project/assets/100075245/9440f116-0709-4eea-b663-496b69a5f082" width="300">|

|페이지 관리 |
|:-----------:|
|<img src="https://github.com/udemy-team16/Udemy-Project/assets/100075245/f6532838-0860-42d9-b17f-1b73417c8675" width="500"> |

|디자인 관리 |
|:-----------:|
|<img src="https://github.com/udemy-team16/Udemy-Project/assets/100075245/33de12e0-04c4-41cc-b756-b1acc86141c8" width="500"> |

- ### 페이지 편집

|반응형 디자인 |
|:-----------:|
|<img src="https://github.com/udemy-team16/Udemy-Project/assets/100075245/692b0df7-5f88-4ee8-a3eb-f49645bf7ef7" width="500"> |

|여백 및 배경색깔 지정 |
|:-----------:|
|<img src="https://github.com/udemy-team16/Udemy-Project/assets/100075245/a14493a9-7728-416a-bbcd-3aeabecf4113" width="500"> |

|디자인 복원 기능|
|:-----------:|
|<img src="https://github.com/udemy-team16/Udemy-Project/assets/100075245/1a5a9393-1bd7-4aaa-807e-43a7c338595e" width="500"> |


<!-- Stack Icon Refernces -->

[프로필1]: https://avatars.githubusercontent.com/u/108661426?v=4
[프로필2]: https://avatars.githubusercontent.com/u/109591160?v=4
[프로필3]: https://avatars.githubusercontent.com/u/78673090?v=4
[프로필4]: https://avatars.githubusercontent.com/u/100075245?v=4

[김영욱]: https://github.com/duddnr787
[신정호]: https://github.com/holeshin
[윤태현]: https://github.com/yoonth95
[서윤정]: https://github.com/annasyun

## 4. 데이터베이스 ERD
![image](https://github.com/yoonth95/Web-Builder/assets/78673090/e0121c88-a55d-4a81-b67c-9efa2ee8a38d)

## 5. API 명세서
![image](https://github.com/yoonth95/Web-Builder/assets/78673090/1d3477fa-3ece-4fb9-8ffb-a849d459eba2)

## 6. 프로젝트 구조
```
📦 Project
├─ .gitignore
├─ .vscode
│  └─ setting.json
├─ README.md
├─ client
│  ├─ .prettierrc.json
│  ├─ jsconfig.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  └─ index.html
│  └─ src
│     ├─ PrivateRoute.jsx
│     ├─ Router.js
│     ├─ api
│     │  ├─ Admin
│     │  │  ├─ DeleteMenuAPI.js
│     │  │  ├─ GetMenuAPI.js
│     │  │  ├─ InsertMenuAPI.js
│     │  │  ├─ OrderMenuAPI.js
│     │  │  ├─ UpdateMenuAPI.js
│     │  │  └─ index.js
│     │  ├─ Editor
│     │  │  ├─ ChangeMenuSaveTimeAPI.js
│     │  │  ├─ CopyDeisgnAPI.js
│     │  │  ├─ DeleteBlockAPI.js
│     │  │  ├─ GetBlocksAPI.js
│     │  │  ├─ InsertBlockAPI.js
│     │  │  ├─ SaveBlockAPI.js
│     │  │  ├─ UpdateBlockDesignAPI.js
│     │  │  ├─ UpdateBlockLayoutAPI.js
│     │  │  ├─ UpdateBlockOrderAPI.js
│     │  │  └─ index.js
│     │  ├─ Image
│     │  │  ├─ DeleteImageAPI.js
│     │  │  ├─ UploadImageAPI.js
│     │  │  └─ index.js
│     │  └─ User
│     │     ├─ index.js
│     │     ├─ loginAPI.js
│     │     ├─ logoutAPI.js
│     │     ├─ signupAPI.js
│     │     └─ verifyTokenAPI.js
│     ├─ assets
│     │  └─ images
│     │     ├─ Link.svg
│     │     ├─ Vector.svg
│     │     ├─ arrow.svg
│     │     ├─ close.svg
│     │     └─ setting.svg
│     ├─ components
│     │  ├─ Admin
│     │  │  └─ AdminHeader.jsx
│     │  ├─ Detail
│     │  │  └─ DetailRenderBox.jsx
│     │  ├─ DropDown
│     │  │  └─ DropDown.jsx
│     │  ├─ Editor
│     │  │  ├─ ApplyTable.jsx
│     │  │  ├─ Block.jsx
│     │  │  ├─ EditToolBar.jsx
│     │  │  ├─ EditorRenderBox.jsx
│     │  │  ├─ ModalRenderBox.jsx
│     │  │  ├─ SideBar.jsx
│     │  │  ├─ Table.jsx
│     │  │  └─ TextEditor.jsx
│     │  ├─ Login
│     │  │  ├─ Login.jsx
│     │  │  └─ Signup.jsx
│     │  ├─ Main
│     │  │  ├─ MainCon.jsx
│     │  │  ├─ MainHeader.jsx
│     │  │  └─ Nav.jsx
│     │  ├─ Management
│     │  │  ├─ EditForm.jsx
│     │  │  ├─ Management.jsx
│     │  │  ├─ NewMenu.jsx
│     │  │  ├─ PrimaryMenu.jsx
│     │  │  ├─ SelectBox.jsx
│     │  │  └─ SubMenu.jsx
│     │  ├─ Modal
│     │  │  ├─ AlertPopup.jsx
│     │  │  ├─ EditorModal.jsx
│     │  │  ├─ LinkModal.jsx
│     │  │  └─ Modal.jsx
│     │  ├─ Pagement
│     │  │  ├─ PageList.jsx
│     │  │  └─ Pagement.jsx
│     │  ├─ Spinner
│     │  │  ├─ Loading.jsx
│     │  │  └─ Spinner.jsx
│     │  └─ ToolBar
│     │     ├─ TextLine.jsx
│     │     └─ ToolBar.jsx
│     ├─ data
│     │  └─ designType.json
│     ├─ hooks
│     │  ├─ useAuth.js
│     │  ├─ useEditor.js
│     │  ├─ useImage.js
│     │  ├─ useInput.js
│     │  └─ useMenu.js
│     ├─ index.js
│     ├─ pages
│     │  ├─ Admin.jsx
│     │  ├─ Detail
│     │  │  └─ Detail.jsx
│     │  ├─ Editor.jsx
│     │  ├─ Main.jsx
│     │  └─ NotFound.jsx
│     ├─ redux
│     │  ├─ AlertSlice.js
│     │  ├─ buttonSlice.js
│     │  ├─ editorSlice.js
│     │  ├─ menuSlice.js
│     │  ├─ pageSlice.js
│     │  ├─ selectBoxSlice.js
│     │  ├─ store.js
│     │  └─ userSlice.js
│     ├─ setupProxy.js
│     └─ styles
│        ├─ Admin
│        │  └─ AdminHeader.css
│        ├─ Detail
│        │  └─ Detail.css
│        ├─ DropDown
│        │  └─ DropDown.css
│        ├─ Editor
│        │  ├─ Block.css
│        │  ├─ EditToolBar.css
│        │  ├─ Editor.css
│        │  ├─ SideBar.css
│        │  └─ Table.css
│        ├─ Login
│        │  └─ Login.css
│        ├─ Main
│        │  ├─ Main.css
│        │  ├─ MainCon.css
│        │  └─ Nav.css
│        ├─ Management
│        │  ├─ EditForm.css
│        │  ├─ Management.css
│        │  ├─ NewMenu.css
│        │  ├─ PrimaryMenu.css
│        │  ├─ SelectBox.css
│        │  └─ SubMenu.css
│        ├─ Modal
│        │  ├─ AlertPopup.css
│        │  ├─ EditorModal.css
│        │  ├─ LinkModal.css
│        │  └─ Modal.css
│        ├─ NotFound.css
│        ├─ Pagement
│        │  └─ Pagement.css
│        ├─ Reset.css
│        └─ Spinner
│           ├─ Loading.css
│           └─ Spinner.css
├─ package-lock.json
└─ server
   ├─ controllers
   │  ├─ editor-controller.js
   │  ├─ image-controller.js
   │  ├─ menu-controller.js
   │  └─ user-controller.js
   ├─ database
   │  └─ db.js
   ├─ models
   │  ├─ editor-db.js
   │  ├─ menu-db.js
   │  └─ user-db.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ editor-route.js
   │  ├─ image-route.js
   │  ├─ menu-route.js
   │  └─ user-route.js
   └─ server.js
```
