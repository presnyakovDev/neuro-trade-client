"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class MongooseFacade {
    constructor(url) {
        this.url = url;
        this.models = {};
    }
    connect() {
        mongoose.connect(this.url);
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log('we"re connected!');
        });
    }
    createModel(nameOfModel, schema) {
        let Schema = mongoose.Schema;
        let modelSchema = new Schema(schema);
        if (!this.models[nameOfModel]) {
            this.models[nameOfModel] = mongoose.model(nameOfModel, modelSchema);
        }
        else {
            console.log("Model already exist!");
        }
    }
    insert(nameOfModel, data) {
        this.models[nameOfModel].insertMany(data, (err) => console.log(err));
    }
}
exports.MongooseFacade = MongooseFacade;
//# sourceMappingURL=mongooseFacade.js.map