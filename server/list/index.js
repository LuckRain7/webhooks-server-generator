const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cmd = require('node-cmd');

const app = express();
app.use(bodyParser.text({ type: '*/*' }));

// 校验
const VerifyWebHook = (req) => {
    // 判断用户代理
    if (!req.headers['user-agent'].includes('GitHub-Hookshot')) {
        return false;
    }

    // 判断秘钥
    const secret = 'aaaa';
    const payload = req.body;
    const ourSignature = `sha1=${crypto.createHmac('sha1', secret).update(payload).digest('hex')}`;
    if (req.headers['x-hub-signature'] !== ourSignature) {
        return false;
    }

    return true;
}

function WorkLoadPull() {
    cmd.get('cd C:\Users\ZHCZ\Desktop\webhooks-server-generator\server\template && aaa',
        function (err, data, stderr) {
            console.log(data);
        }
    );
}

app.post('/aaa', (req, res) => {
    const OK = () => {
        WorkLoadPull()
        res.status(200).send('ok')
    }
    const Verify = VerifyWebHook(req);
    Verify ? OK() : res.status(404).send('NO');
    console.log(req.headers);
});

app.listen(666, function () {
    console.log('WebHook service running at http://localhost:666');
});


