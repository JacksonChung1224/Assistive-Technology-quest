export const questions = [
  {
    id: "q1",
    title: "1. 您目前的身份為？(單選)",
    type: "radio",
    options: [
      "被照顧者本人",
      "家屬照顧者",
      "外籍看護",
      "居服員",
      "醫護人員"
    ],
    hasOther: true
  },
  {
    id: "q2",
    title: "2. 您照顧的對象是？(單選)",
    type: "radio",
    options: [
      "自己",
      "父母",
      "配偶",
      "子女",
      "其他親屬",
      "無"
    ],
    hasOther: false
  },
  {
    id: "q3",
    title: "3. 您是否曾申請過以下項目？(可複選)",
    type: "checkbox",
    options: [
      "長照服務",
      "輔具補助",
      "身心障礙補助",
      "交通接送服務",
      "居家照護服務",
      "未曾申請過"
    ],
    hasOther: false,
    skipLogic: {
      conditionOption: "未曾申請過",
      skipIds: ["q4", "q5", "q6"]
    }
  },
  {
    id: "q4",
    title: "4. 最近一次尋找照護資源或申請補助時，最困難的是什麼？(可複選)",
    type: "checkbox",
    options: [
      "不知道有哪些補助可以申請",
      "不知道自己是否符合資格",
      "找不到正確資訊",
      "網路資訊太分散",
      "看不懂申請規定",
      "不知道向哪個單位申請",
      "不知道需要準備哪些文件",
      "補件次數太多",
      "申請流程太複雜",
      "不知道如何選擇適合的輔具",
      "不清楚補助金額"
    ],
    hasOther: true
  },
  {
    id: "q5",
    title: "5. 您認為申請補助過程中最麻煩的一件事是什麼？(單選)",
    type: "radio",
    options: [
      "查詢資格",
      "準備文件",
      "找到申請窗口",
      "填寫申請資料",
      "等待審核",
      "輔具選購比較"
    ],
    hasOther: true
  },
  {
    id: "q6",
    title: "6. 您大約花了多少時間才完成申請或找到需要的資訊？(單選)",
    type: "radio",
    options: [
      "30分鐘內",
      "1~3小時",
      "半天",
      "1天以上",
      "3天以上",
      "尚未完成"
    ],
    hasOther: false
  },
  {
    id: "q7",
    title: "7. 如果有一個小助手，可以協助您查詢長照與輔具補助資訊，您最希望它提供哪些功能？(可複選)",
    type: "checkbox",
    options: [
      "補助資格快速查詢",
      "自動判斷可申請項目",
      "文件清單整理",
      "申請流程指引",
      "附近服務據點查詢",
      "輔具推薦與比較",
      "申請進度提醒",
      "真人客服諮詢"
    ],
    hasOther: true
  },
  {
    id: "q8",
    title: "8. 您最常使用哪些工具查詢資訊？(可複選)",
    type: "checkbox",
    options: [
      "Google",
      "LINE",
      "Facebook",
      "YouTube",
      "醫院或診所",
      "政府網站",
      "親友介紹"
    ],
    hasOther: true
  },
  {
    id: "q9a",
    title: "9a. 如果有這樣的服務，您會主動推薦給朋友或家人嗎？(1-10分，10分最高)(單選)",
    type: "radio",
    options: [
      "10 (極度願意推薦)",
      "9",
      "8",
      "7",
      "6",
      "5 (中立)",
      "4",
      "3",
      "2",
      "1 (完全不會推薦)"
    ],
    hasOther: false
  },
  {
    id: "q9b",
    title: "9b. 如果這個服務是付費的，您可以接受的價格是？(單選)",
    type: "radio",
    options: [
      "只願意使用免費版",
      "一次性 50-100 元",
      "一次性 100-300 元",
      "月費 100-300 元",
      "看價值決定，先看效果"
    ],
    hasOther: false
  },
  {
    id: "q9c",
    title: "9c. 您最快多久內會想試用這個服務？(單選)",
    type: "radio",
    options: [
      "立刻",
      "一個月內",
      "有需要時再說",
      "不會試用"
    ],
    hasOther: false
  },
  {
    id: "q10",
    title: "10. 如果可以改善目前的補助申請流程，您最希望解決什麼問題？(選填)",
    type: "text",
    placeholder: "請簡述您的想法...",
    hasOther: false,
    required: false
  },
  {
    id: "q11",
    title: "11. 您是否願意接受我們後續簡短的訪談，協助打造更符合需求的服務？(單選)",
    type: "radio",
    options: [
      "是，我願意",
      "先不要"
    ],
    hasOther: false,
    skipLogic: {
      conditionOption: "先不要",
      skipIds: ["q12"]
    }
  },
  {
    id: "q12",
    title: "12. 若您願意，請留下您的 Email 或聯絡電話：(選填)",
    type: "text",
    placeholder: "例如：test@example.com 或 0912-345-678",
    hasOther: false,
    required: false
  }
];
