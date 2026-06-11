# 照護需求調查 (Assistive Technology Quest)

此專案為「長照3.0 資訊整合平台」的市場調查問卷前端網站，主要用來收集使用者在尋找長照與輔具資源時所面臨的真實痛點。

## 🌟 專案特色

- **高質感 UI 設計**：採用現代化淺色清晰風格、毛玻璃卡片設計與微動畫，提供流暢的手機端填寫體驗。
- **資料驅動設計 (Data-Driven)**：問卷題目完全透過 `src/config/questions.js` 設定檔動態產生，無需修改任何 UI 程式碼即可輕鬆增刪題目。
- **智慧跳題邏輯**：內建動態跳題功能（例如：未曾申請過長照服務者，將自動略過申請困難相關題目），有效提升資料收集準確度。
- **無伺服器架構**：前端使用 Vite + React 開發，後端透過 Google Apps Script 將資料直接寫入 Google Sheets，兼顧資安與維護成本。

## 🛠️ 開發與部署

本專案使用 [Vite](https://vitejs.dev/) + [React](https://react.dev/) 建置。

### 本地端開發
1. 確保已安裝 Node.js
2. 進入專案資料夾 `frontend`
3. 安裝依賴套件：
   ```bash
   npm install
   ```
4. 啟動本地開發伺服器：
   ```bash
   npm run dev
   ```
5. 在瀏覽器打開 `http://localhost:5173` 即可預覽。

### 部署方式
專案根目錄已包含 `vercel.json`，推薦直接透過 GitHub 連結至 [Vercel](https://vercel.com/) 進行一鍵免費部署。

## 📝 資料庫修改 (Google Sheets 串接)

如需更改資料儲存位置：
1. 參閱專案文件 `Google_Apps_Script_教學.md` 取得最新的 Web App URL。
2. 替換 `src/lib/submitData.js` 內的 `GAS_WEBAPP_URL` 變數。

## 💡 最近優化項目
- **加入跳題邏輯**：確保目標客群資料不被干擾。
- **重構商業意願題**：將原有的免費使用意願題，拆解為更具商業驗證價值的 NPS (推薦意願)、付費意願與行動意願三題。
- **精準分流設計**：新增單/複選標籤，並將開放性建議改為選填。
