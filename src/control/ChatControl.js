const CTRL_NAME = 'control::ChatControl';
let _instance = global[CTRL_NAME];

/**数据  */
const START_KEY = 'start',
  QUESTION_KEY = 'question';

let _config=null,
  _queueTimeId = -1,
  _chatQueue = [],
  _chatList=[],
  _callList = [],
  _selectList=[];

function init(){
  return global[CTRL_NAME] = {
    initConfig(config){
      if(!config) return;
      _config = config;
      updateChatList(_config[START_KEY]);
      _instance.setSelectList(getSelectListByKey(START_KEY));
    },
    getChatList(){
      return _chatList;
    },
    getSelectList(){
      return _selectList;
    },
    setSelectList(list){
      _selectList.splice(0, _selectList.length,...list);
    },
    updateList(data, callback){
      _callList.push(() => {
        callback&&callback();
        _instance.setSelectList(getSelectListByKey(data.next||QUESTION_KEY));
      })
      updateChatList(data);
    },
    isChating(){
      return -1 == _queueTimeId ? false : true;
    }
  }
}

function updateChatList(data, callback){
  if(data.text){
    if(Array.isArray(data.text)){
      data.text.forEach((value) => {
        _chatQueue.push({
          name:'me',
          content: value
        })
      })
    }else{
      _chatQueue.push({
        name:'me',
        content: data.text
      });
    }

  }
  if(data.answer){
    data.answer.forEach((value) => {
      _chatQueue.push({
        name:'hsuna',
        type: value.type,
        path: value.path,
        content: value.content
      })
    })
  }
  chatQueueTimer();
}

function chatQueueTimer(init=true){
  if(_chatQueue.length > 0){
    if(-1 == _queueTimeId) {
      _chatList.push(_chatQueue.shift());
      _queueTimeId = setInterval(() => {
        chatQueueTimer(!1);
      }, 1000);
    }else if(!init){
      _chatList.push(_chatQueue.shift());
    }
  }else{
    if(-1 != _queueTimeId) {
      clearInterval(_queueTimeId);
      _queueTimeId = -1;
    }
    while(_callList.length > 0){
      _callList.shift()();
    }

  }
}


function getSelectListByKey(data){
  if(Array.isArray(data)){
    return data.map(i => _config[i]);
  }else if(_config && _config[data]){
    return _config[data].next.map(i => _config[i]);
  }else{
    return [];
  }
}

export default {
  get instance() {
    return _instance = _instance || init();
  }
}
