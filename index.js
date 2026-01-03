const express = require('express');
const app = express();
const port = 80; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.post('/app/api/countryList', (req, res) => {
    console.log('국가 목록 요청 수신');
    const mockResponse = {
        code: 0,
        msg: "Success",
        data: [
            {
                countryCode: "KR",
                enName: "South Korea",
                zhName: "韩国",
                phoneCode: "82"
            },
            {
                countryCode: "YA",
                enName: "yainshidae",
                zhName: "야인시대",
                phoneCode: "19721121"
            }
        ]
    };

    res.json(mockResponse);
    console.log('국가 목록 응답 전송 완료');
});

app.post('/app/api/sendValidation', (req, res) => {
    const requestPhone = req.query.userPhone || "unknown";
    const mockResponse = {
        code: 0,
        msg: "Success",
        data: {
            userPhone: requestPhone,
            vCode: "1111"
        }
    };
    res.json(mockResponse);
    console.log('인증 응답 전송 완료');
});

app.post('/app/api/phoneValidationLogin', (req, res) => {
    console.log('로그인 요청 수신');
    const mobile = req.query.mobile || "01000000000";
    const mockResponse = {
        code: 0,
        msg: "Login Success",
        data: {
            expire: "31536000",
            token: "mock_token_sample_123456",
            user: {
                userId: "888888",
                username: "Hacked!!",
                nickname: "Hacked!!",
                userphone: mobile,
                useremail: "hacked@chol.com",
                headImage: "",
                sex: "1",
                country: "KR",
                city: "Seoul",
                signature: "Ready to fly",
                birthday: "1970-01-01",
                addtime: "1970-01-01",
                storeToken: "mock_store_token",
                storeUid: "mock_store_uid",
                ipCity: "Seoul"
            }
        }
    };

    res.json(mockResponse);
    console.log('로그인 성공 응답 전송 완료');
});

app.post('/app/api/proActivation', (req, res) => {
    console.log('기기 활성화 요청 수신');
    const mockResponse = {
        code: 0,
        msg: "Activation Success"
    };

    res.json(mockResponse);
    console.log('기기 활성화 성공 응답 전송 완료');
});


app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});