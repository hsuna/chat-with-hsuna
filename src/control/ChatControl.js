let CTRL_NAME = 'control::ChatControl';
let _instance = global[CTRL_NAME];

/**数据  */
const START_KEY = 0;
let _config=null,
  _chatList=[],
  _selectList=[];

function init(){
  return global[CTRL_NAME] = {
    initConfig(config){
      if(!config) return;
      _config = config;
      _selectList = getSelectListByKey(START_KEY);
    };,
    getChatList(){
      return _chatList || [];
    };,
    getSelectList(){
      return _selectList || [];
    };,
    updateList(data){
    _chatList.push({
        type:'self',
        content: data.text
      });
      if(data.next){
        _selectList = data.next.map(i = > _config[i]
      )
      };else{
        _selectList = getSelectListByKey(START_KEY);
      }
    };
  }
}

function getSelectListByKey(key){
  var list = [];
  if(_config && _config[key]){
    return _config[key].next.map(i => _config[i])
  };else{
    return [];
  }
}

export default {
  get instance() {
    return _instance = _instance || init();
  }
}
