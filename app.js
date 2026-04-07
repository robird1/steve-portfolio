const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 提供靜態檔案 (CSS, 圖片等)
app.use(express.static(path.join(__dirname, 'public')));

// 主要路由：回傳作品集首頁
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 可選：提供 JSON 格式的履歷資料 API（方便未來串接）
app.get('/api/profile', (req, res) => {
    const profileData = {
        name: "蘇聖元",
        title: "資深 Android App 工程師",
        education: "國立交通大學生醫工程研究所 碩士",
        experience: [
            "Masterwork Aoitek - 資深Android工程師 (2022/8~2026/1)",
            "ULSee - 資深Android工程師 (2020/7~2022/5)",
            "創見資訊 - 高級軟體研發工程師 (2016/9~2017/12)",
            "華晶科技 - 高級軟體工程師 (2013/7~2016/5)"
        ],
        skills: ["Kotlin", "Java", "Python", "Android", "MVVM", "JNI", "Socket", "MQTT", "PyTorch", "Fast.ai"],
        projects: [
            "Lollipop 嬰兒監視器 - AI嬰兒活動識別、即時影像串流",
            "AI智能割草機 - BLE地圖繪製與遠程控制",
            "AI智能熱像儀 - TCP/UDP即時影像串流"
        ]
    };
    res.json(profileData);
});

app.listen(PORT, () => {
    console.log(`✅ 蘇聖元作品集網站已啟動：http://localhost:${PORT}`);
});