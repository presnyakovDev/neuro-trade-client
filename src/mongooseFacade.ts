import * as mongoose from 'mongoose';

export class MongooseFacade {
  models:any = {};
  constructor(public url:string) {
  }

  connect(){
    mongoose.connect(this.url);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('we"re connected!')
    });
  }

  createModel(nameOfModel:string, schema){
    let Schema = mongoose.Schema;
    let modelSchema = new Schema(schema);
    if(!this.models[nameOfModel]){
      this.models[nameOfModel] = mongoose.model(nameOfModel, modelSchema);
    }else{
      console.log("Model already exist!")
    }
  }

  insert(nameOfModel:string, data){
    this.models[nameOfModel].insertMany(data, (err)=> console.log(err))
  }
}
