'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const pump = require('mz-modules/pump');

class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        ctx.body = 'hi, egg';
    }
    async uploadimg() {
        const stream = await this.ctx.getFileStream();
        const filename = new Date().getTime() + path.extname(stream.filename).toLowerCase();
        const target = path.join(this.config.baseDir, 'app/public/uploads/images', filename);
        const writeStream = fs.createWriteStream(target);
        await pump(stream, writeStream);
        this.ctx.body = {
            name: filename,
            // file: `/public/uploads/images/${filename}`  //正式地址
            file: `http://127.0.0.1:7001/public/uploads/images/${filename}` //临时服务器地址
        }
    }
<<<<<<< HEAD
    console.log(this.ctx.body)
  }
=======
>>>>>>> 0d82813162bd634089fbe63d31758ea41432d96e

    async deleteimg() {
        try {
            let url = this.ctx.request.body.url;
            console.log(url);
            fs.unlink(url, () => {
                this.ctx.body = "删除成功"
            });
            this.ctx.body = "123"
        } catch (error) {
            this.ctx.body = "删除失败"
        }
    }
}

module.exports = HomeController;